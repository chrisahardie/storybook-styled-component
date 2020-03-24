import { Route } from "react-router";
import React from "react";
import { ContactRolesList } from "src/routes/Contacts/routes/ContactRoles/components/containers/ContactRolesList";

/**
 * Routes for contact roles
 * @returns routes for contact roles
 */
export const ContactRolesRoutes: React.FC = () => (
  <Route path="/contacts/:userId/roles" exact>
    <ContactRolesList />
  </Route>
);