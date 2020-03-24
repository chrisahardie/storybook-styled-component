import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Register } from "src/routes/Account/components/containers/Register";

describe("Registration form ", () => {
  test("should show errors if mandatory fields are missing", () => {
    const { getByText, container } = render(<Register />);
    
    const submit = getByText("Submit");

    fireEvent.click(submit);

    const usernameError = container.querySelector("span.username-error");
    const passwordError = container.querySelector("span.password-error");
    const confirmError = container.querySelector("span.confirm-error");
    
    expect(usernameError).toBeInTheDocument();
    expect(usernameError?.innerHTML).toEqual("Required");
    expect(passwordError).toBeInTheDocument();
    expect(passwordError?.innerHTML).toEqual("Required");
    expect(confirmError).toBeInTheDocument();
    expect(passwordError?.innerHTML).toEqual("Required");
  });

  test(" should show errors if password and confirmation fields don't match", () => {
    const { getByLabelText, getByText, container } = render(<Register />);

    const passwordTextbox = getByLabelText("Password");
    const confirmTextbox = getByLabelText("Confirm");

    fireEvent.change(passwordTextbox, { target: { value: "Foobar" } });
    fireEvent.change(confirmTextbox, { target: { value: "Barfoo" } });

    const submit = getByText("Submit");
    fireEvent.click(submit);

    const confirmError = container.querySelector("span.confirm-error");

    expect(confirmError).toBeInTheDocument();
    expect(confirmError?.innerHTML).toEqual("Must match");
  });
});