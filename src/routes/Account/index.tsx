import { Route } from "react-router-dom";
import React from "react";
import { Register } from "src/routes/Account/components/containers/Register";

/**
 * Router for account routes
 * @returns router for account
 */
export const AccountRoutes: React.FC = () => (
  <>
    <Route path="/account/register">
      <Register />
    </Route>
  </>
);