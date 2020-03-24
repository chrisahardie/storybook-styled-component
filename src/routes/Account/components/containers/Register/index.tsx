import React from "react";
import { Styles } from "src/routes/Account/components/containers/Register/Styles";
import { Form, Field } from "react-final-form";
import { Textbox, PasswordTextbox, Button } from "src/components";

/**
 * Form submit handler
 * @param values Form values
 */
const onSubmit = (values: FieldNames) => {
  // eslint-disable-next-line no-alert
  setTimeout(() => window.alert(JSON.stringify(values, null, 2)));
};

/**
 * List the form's field 
 */
interface FieldNames {
  /**
   * Username
   */
  username?: string;
  /**
   * Password
   */
  password?: string;
  /**
   * Used to confirm the user has typed his password correctly
   */
  confirm?: string;
}

/**
 * Registration form
 * @returns - A registration form component
 */
export const Register = () => (
  <Styles>
    <h1>Register</h1>
    <Form
      onSubmit={onSubmit}
      validate={values => {
        const errors: FieldNames = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        if (!values.confirm) {
          errors.confirm = "Required";
        } else if (values.confirm !== values.password) {
          errors.confirm = "Must match";
        }
        return errors;
      }}
      render={({
        handleSubmit, form, submitting, pristine, values 
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label htmlFor="username">Username
                  <Textbox {...input} id="username" name="username" placeholder="Username" />
                  {meta.error && meta.touched && <span className="error username-error">{meta.error}</span>}
                </label>
              </div>
            )}
          </Field>
          <Field name="password">
            {({ input, meta }) => (
              <div>
                <label htmlFor="password">Password
                  <PasswordTextbox {...input} id="password" name="password" placeholder="Password" />
                  {meta.error && meta.touched && <span className="error password-error">{meta.error}</span>}
                </label>
              </div>
            )}
          </Field>
          <Field name="confirm">
            {({ input, meta }) => (
              <div>
                <label htmlFor="confirm">Confirm
                  <PasswordTextbox {...input} id="confirm" name="confirm" placeholder="Confirm" />
                  {meta.error && meta.touched && <span className="error confirm-error">{meta.error}</span>}
                </label>
              </div>
            )}
          </Field>
          <div className="buttons">
            <Button type="submit" disabled={submitting}>
              Submit
            </Button>
            <Button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </Button>
          </div>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    />
  </Styles>
);