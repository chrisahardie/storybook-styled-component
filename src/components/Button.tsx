import styled from "styled-components";

/**
 * Props
 */
interface Props {
  /**
   * Indicates if the button is disabled
   */
  disabled?: boolean;
  /**
   * Type of button
   */
  type: "submit" | "button" | "reset";
}

/**
 * Button component
 * @param props @inheritdoc
 * @returns a button component
 */
export const Button = styled.button.attrs<Props>((props) => ({
  type: props.type
}))`
  border-radius: 3px;
  border: 1px solid #d2d2d2;
  display: block;
  margin: 0 0 1em;
  background-color: ${(props) => (props.disabled ? "#ccc" : "transparent")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;
