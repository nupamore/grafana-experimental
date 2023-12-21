import { css } from '@emotion/css';
import React, { useState, useEffect } from 'react';

import { DataSourceApi, GrafanaTheme2, PanelData, QueryHint } from '@grafana/data';
import { reportInteraction } from '@grafana/runtime';
import { DataQuery } from '@grafana/schema';
import { Button, Tooltip, useStyles2 } from '@grafana/ui';

import { VisualQuery, VisualQueryModeller } from '../types';

interface Props<T extends VisualQuery, Q extends DataQuery> {
  query: T;
  datasource: DataSourceApi;
  queryModeller: VisualQueryModeller;
  buildVisualQueryFromString: (queryString: string) => { query: T };
  buildDataQueryFromQueryString: (queryString: string) => Q;
  buildQueryStringFromDataQuery: (dataQuery: Q) => string;
  onChange: (update: T) => void;
  data?: PanelData;
}

export const QueryBuilderHints = <T extends VisualQuery, Q extends DataQuery>({
  datasource,
  query: visualQuery,
  onChange,
  data,
  queryModeller,
  buildVisualQueryFromString,
  buildDataQueryFromQueryString,
  buildQueryStringFromDataQuery,
}: Props<T, Q>) => {
  const [hints, setHints] = useState<QueryHint[]>([]);
  const styles = useStyles2(getStyles);

  useEffect(() => {
    const dataQuery = buildDataQueryFromQueryString(queryModeller.renderQuery(visualQuery))
    // For now show only actionable hints
    const hints = datasource.getQueryHints?.(dataQuery, data?.series || []).filter((hint) => hint.fix?.action);
    setHints(hints ?? []);
  }, [datasource, visualQuery, data, queryModeller, buildDataQueryFromQueryString]);

  return (
    <>
      {hints.length > 0 && (
        <div className={styles.container}>
          {hints.map((hint) => {
            return (
              <Tooltip content={`${hint.label} ${hint.fix?.label}`} key={hint.type}>
                <Button
                  onClick={() => {
                    reportInteraction('grafana_query_builder_hints_clicked', {
                      hint: hint.type,
                      datasourceType: datasource.type,
                    });

                    if (hint?.fix?.action) {
                      const dataQuery = buildDataQueryFromQueryString(queryModeller.renderQuery(visualQuery))
                      const newQuery = datasource.modifyQuery?.(dataQuery, hint.fix.action) as Q;
                      if (newQuery) {
                        const newVisualQuery = buildVisualQueryFromString(buildQueryStringFromDataQuery(newQuery) ?? '');
                        return onChange(newVisualQuery.query);
                      }
                    }
                  }}
                  fill="outline"
                  size="sm"
                  className={styles.hint}
                >
                  hint: {hint.fix?.title || hint.fix?.action?.type.toLowerCase().replace('_', ' ')}
                </Button>
              </Tooltip>
            );
          })}
        </div>
      )}
    </>
  );
};

QueryBuilderHints.displayName = 'QueryBuilderHints';

const getStyles = (theme: GrafanaTheme2) => {
  return {
    container: css`
      display: flex;
      align-items: start;
    `,
    hint: css`
      margin-right: ${theme.spacing(1)};
    `,
  };
};
