import React from "react";
import { Switch, Route } from "react-router";
import { AccountRoutes } from "src/routes/Account";
import { ContactsRoutes } from "src/routes/Contacts";

/**
 * Root component
 * @returns A React Component
 */
export function App(): JSX.Element {
  return (
    <Switch>
      <Route path="/account">
        <AccountRoutes />
      </Route>
      <Route path="/contacts">
        <ContactsRoutes />
      </Route>
      <Route>
        <p>404</p>
      </Route>
    </Switch>
  );
}
