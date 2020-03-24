import { Route } from "react-router";
import React from "react";
import { ContactAddressList } from "src/routes/Contacts/routes/ContactAddresses/components/containers/ContactAddressList";

/**
 * Route for contact addresses
 * @returns Contact address routes
 */
export const ContactAddressesRoutes: React.FC = () => (
  <Route path="/contacts/:userId/addresses" exact>
    <ContactAddressList />
  </Route>
);