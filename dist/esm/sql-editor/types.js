var OperatorType = /* @__PURE__ */ ((OperatorType2) => {
  OperatorType2[OperatorType2["Comparison"] = 0] = "Comparison";
  OperatorType2[OperatorType2["Logical"] = 1] = "Logical";
  return OperatorType2;
})(OperatorType || {});
var MacroType = /* @__PURE__ */ ((MacroType2) => {
  MacroType2[MacroType2["Value"] = 0] = "Value";
  MacroType2[MacroType2["Filter"] = 1] = "Filter";
  MacroType2[MacroType2["Group"] = 2] = "Group";
  MacroType2[MacroType2["Column"] = 3] = "Column";
  MacroType2[MacroType2["Table"] = 4] = "Table";
  return MacroType2;
})(MacroType || {});
var TokenType = /* @__PURE__ */ ((TokenType2) => {
  TokenType2["Parenthesis"] = "delimiter.parenthesis.sql";
  TokenType2["Whitespace"] = "white.sql";
  TokenType2["Keyword"] = "keyword.sql";
  TokenType2["Delimiter"] = "delimiter.sql";
  TokenType2["Operator"] = "operator.sql";
  TokenType2["Identifier"] = "identifier.sql";
  TokenType2["IdentifierQuote"] = "identifier.quote.sql";
  TokenType2["Type"] = "type.sql";
  TokenType2["Function"] = "predefined.sql";
  TokenType2["Number"] = "number.sql";
  TokenType2["String"] = "string.sql";
  TokenType2["Variable"] = "variable.sql";
  return TokenType2;
})(TokenType || {});
var StatementPosition = /* @__PURE__ */ ((StatementPosition2) => {
  StatementPosition2["Unknown"] = "unknown";
  StatementPosition2["SelectKeyword"] = "selectKeyword";
  StatementPosition2["WithKeyword"] = "withKeyword";
  StatementPosition2["AfterSelectKeyword"] = "afterSelectKeyword";
  StatementPosition2["AfterSelectArguments"] = "afterSelectArguments";
  StatementPosition2["AfterSelectFuncFirstArgument"] = "afterSelectFuncFirstArgument";
  StatementPosition2["SelectAlias"] = "selectAlias";
  StatementPosition2["AfterFromKeyword"] = "afterFromKeyword";
  StatementPosition2["AfterTable"] = "afterTable";
  StatementPosition2["SchemaFuncFirstArgument"] = "schemaFuncFirstArgument";
  StatementPosition2["SchemaFuncExtraArgument"] = "schemaFuncExtraArgument";
  StatementPosition2["FromKeyword"] = "fromKeyword";
  StatementPosition2["AfterFrom"] = "afterFrom";
  StatementPosition2["WhereKeyword"] = "whereKeyword";
  StatementPosition2["WhereComparisonOperator"] = "whereComparisonOperator";
  StatementPosition2["WhereValue"] = "whereValue";
  StatementPosition2["AfterWhereFunctionArgument"] = "afterWhereFunctionArgument";
  StatementPosition2["AfterGroupByFunctionArgument"] = "afterGroupByFunctionArgument";
  StatementPosition2["AfterWhereValue"] = "afterWhereValue";
  StatementPosition2["AfterGroupByKeywords"] = "afterGroupByKeywords";
  StatementPosition2["AfterGroupBy"] = "afterGroupBy";
  StatementPosition2["AfterOrderByKeywords"] = "afterOrderByKeywords";
  StatementPosition2["AfterOrderByFunction"] = "afterOrderByFunction";
  StatementPosition2["AfterOrderByDirection"] = "afterOrderByDirection";
  StatementPosition2["AfterIsOperator"] = "afterIsOperator";
  StatementPosition2["AfterIsNotOperator"] = "afterIsNotOperator";
  StatementPosition2["AfterSchema"] = "afterSchema";
  return StatementPosition2;
})(StatementPosition || {});
var SuggestionKind = /* @__PURE__ */ ((SuggestionKind2) => {
  SuggestionKind2["Schemas"] = "schemas";
  SuggestionKind2["Tables"] = "tables";
  SuggestionKind2["Columns"] = "columns";
  SuggestionKind2["SelectKeyword"] = "selectKeyword";
  SuggestionKind2["WithKeyword"] = "withKeyword";
  SuggestionKind2["FunctionsWithArguments"] = "functionsWithArguments";
  SuggestionKind2["FromKeyword"] = "fromKeyword";
  SuggestionKind2["WhereKeyword"] = "whereKeyword";
  SuggestionKind2["GroupByKeywords"] = "groupByKeywords";
  SuggestionKind2["OrderByKeywords"] = "orderByKeywords";
  SuggestionKind2["FunctionsWithoutArguments"] = "functionsWithoutArguments";
  SuggestionKind2["LimitKeyword"] = "limitKeyword";
  SuggestionKind2["SortOrderDirectionKeyword"] = "sortOrderDirectionKeyword";
  SuggestionKind2["ComparisonOperators"] = "comparisonOperators";
  SuggestionKind2["LogicalOperators"] = "logicalOperators";
  SuggestionKind2["SelectMacro"] = "selectMacro";
  SuggestionKind2["TableMacro"] = "tableMacro";
  SuggestionKind2["FilterMacro"] = "filterMacro";
  SuggestionKind2["GroupMacro"] = "groupMacro";
  SuggestionKind2["BoolValues"] = "boolValues";
  SuggestionKind2["NullValue"] = "nullValue";
  SuggestionKind2["NotKeyword"] = "notKeyword";
  SuggestionKind2["TemplateVariables"] = "templateVariables";
  SuggestionKind2["StarWildCard"] = "starWildCard";
  return SuggestionKind2;
})(SuggestionKind || {});
var CompletionItemPriority = /* @__PURE__ */ ((CompletionItemPriority2) => {
  CompletionItemPriority2["High"] = "a";
  CompletionItemPriority2["MediumHigh"] = "d";
  CompletionItemPriority2["Medium"] = "g";
  CompletionItemPriority2["MediumLow"] = "k";
  CompletionItemPriority2["Low"] = "q";
  return CompletionItemPriority2;
})(CompletionItemPriority || {});
var CompletionItemKind = /* @__PURE__ */ ((CompletionItemKind2) => {
  CompletionItemKind2[CompletionItemKind2["Method"] = 0] = "Method";
  CompletionItemKind2[CompletionItemKind2["Function"] = 1] = "Function";
  CompletionItemKind2[CompletionItemKind2["Constructor"] = 2] = "Constructor";
  CompletionItemKind2[CompletionItemKind2["Field"] = 3] = "Field";
  CompletionItemKind2[CompletionItemKind2["Variable"] = 4] = "Variable";
  CompletionItemKind2[CompletionItemKind2["Class"] = 5] = "Class";
  CompletionItemKind2[CompletionItemKind2["Struct"] = 6] = "Struct";
  CompletionItemKind2[CompletionItemKind2["Interface"] = 7] = "Interface";
  CompletionItemKind2[CompletionItemKind2["Module"] = 8] = "Module";
  CompletionItemKind2[CompletionItemKind2["Property"] = 9] = "Property";
  CompletionItemKind2[CompletionItemKind2["Event"] = 10] = "Event";
  CompletionItemKind2[CompletionItemKind2["Operator"] = 11] = "Operator";
  CompletionItemKind2[CompletionItemKind2["Unit"] = 12] = "Unit";
  CompletionItemKind2[CompletionItemKind2["Value"] = 13] = "Value";
  CompletionItemKind2[CompletionItemKind2["Constant"] = 14] = "Constant";
  CompletionItemKind2[CompletionItemKind2["Enum"] = 15] = "Enum";
  CompletionItemKind2[CompletionItemKind2["EnumMember"] = 16] = "EnumMember";
  CompletionItemKind2[CompletionItemKind2["Keyword"] = 17] = "Keyword";
  CompletionItemKind2[CompletionItemKind2["Text"] = 18] = "Text";
  CompletionItemKind2[CompletionItemKind2["Color"] = 19] = "Color";
  CompletionItemKind2[CompletionItemKind2["File"] = 20] = "File";
  CompletionItemKind2[CompletionItemKind2["Reference"] = 21] = "Reference";
  CompletionItemKind2[CompletionItemKind2["Customcolor"] = 22] = "Customcolor";
  CompletionItemKind2[CompletionItemKind2["Folder"] = 23] = "Folder";
  CompletionItemKind2[CompletionItemKind2["TypeParameter"] = 24] = "TypeParameter";
  CompletionItemKind2[CompletionItemKind2["User"] = 25] = "User";
  CompletionItemKind2[CompletionItemKind2["Issue"] = 26] = "Issue";
  CompletionItemKind2[CompletionItemKind2["Snippet"] = 27] = "Snippet";
  return CompletionItemKind2;
})(CompletionItemKind || {});
var CompletionItemInsertTextRule = /* @__PURE__ */ ((CompletionItemInsertTextRule2) => {
  CompletionItemInsertTextRule2[CompletionItemInsertTextRule2["KeepWhitespace"] = 1] = "KeepWhitespace";
  CompletionItemInsertTextRule2[CompletionItemInsertTextRule2["InsertAsSnippet"] = 4] = "InsertAsSnippet";
  return CompletionItemInsertTextRule2;
})(CompletionItemInsertTextRule || {});
var EditorMode = /* @__PURE__ */ ((EditorMode2) => {
  EditorMode2["Builder"] = "builder";
  EditorMode2["Code"] = "code";
  return EditorMode2;
})(EditorMode || {});

export { CompletionItemInsertTextRule, CompletionItemKind, CompletionItemPriority, EditorMode, MacroType, OperatorType, StatementPosition, SuggestionKind, TokenType };
//# sourceMappingURL=types.js.map
