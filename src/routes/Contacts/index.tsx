import { Route } from "react-router-dom";
import React from "react";
import { ContactList } from "src/routes/Contacts/components/containers";
import { ContactAddressesRoutes } from "src/routes/Contacts/routes/ContactAddresses";
import { ContactRolesRoutes } from "src/routes/Contacts/routes/ContactRoles";

/**
 * Routes for contacts
 * @returns Routes for contacts
 */
export const ContactsRoutes: React.FC = () => (
  <>
    <Route path="/contacts" exact>
      <ContactList />
    </Route>
    <ContactRolesRoutes />
    <ContactAddressesRoutes />
  </>
);