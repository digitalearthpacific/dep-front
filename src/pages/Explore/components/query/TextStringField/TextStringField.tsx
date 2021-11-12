import {
  formatValue,
  operatorOptions,
  parseOperatorToKey,
  toCqlExpression,
} from "./helpers";
import { TextFieldBase } from "../TextFieldBase/TextFieldBase";
import { CqlExpressionParser } from "pages/Explore/utils/cql";

type TextStringFieldProps = {
  field: CqlExpressionParser<string>;
};

export const TextStringField = ({ field }: TextStringFieldProps) => {
  return (
    <TextFieldBase
      field={field}
      operatorOptions={operatorOptions}
      onFormatValue={formatValue}
      onParseOperatorKey={parseOperatorToKey}
      onGenerateCqlExpression={toCqlExpression}
      onRenderDisplay={formatValue}
    />
  );
};
