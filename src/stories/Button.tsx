import React, { FC, ReactNode } from "react";

/**
 * Props
 */
interface ButtonProps {
  /**
   * @inheritdoc
   */
  children: ReactNode;

  /**
   * Simple click handler
   */
  onClick?: () => void;
};

/**
 * The world's most _basic_ button
 * @returns Button component
 */
export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => (
  <button onClick={onClick} type="button">
    {children}
  </button>
);