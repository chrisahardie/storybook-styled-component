import React from "react";
import { Textbox, PasswordTextbox } from "src/components";
import { Button } from "./Button";
// Default export required for Storybook
// eslint-disable-next-line import/no-default-export
export default {
  title: "Form controls",
};

/**
 * Textbox story
 * @returns Textbox story
 */
export const TextboxStory = () => <Textbox />;

/**
 * Passwordtextbox story
 * @returns Passwordtextbox story
 */
export const PasswordTextboxStory = () => <PasswordTextbox />;

/**
 * Button story
 * @returns Button story
 */
export const ButtonStory = () => <Button>Submit</Button>;