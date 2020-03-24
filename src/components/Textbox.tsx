import styled from "styled-components";
import { FieldRenderProps } from "react-final-form";

/**
 * Props
 */
interface Props extends FieldRenderProps<string, any> {
  /**
   * Indicates if the textbox is disabled
   */
  disabled?: boolean;
}

export const Textbox = styled.input.attrs(({
  disabled, input, meta, ...rest 
}: Props) => ({
  type: "text",
  ...input,
  ...rest
}))`
  border-radius: 3px;
  border: 1px solid #ccc;
  display: block;
  margin: 0 0 1em;
  background-color: ${(props: Props) => (props.disabled ? "#eee" : "transparent")};;

  ::placeholder {
    color: #d2d2d2;
  }
`;
