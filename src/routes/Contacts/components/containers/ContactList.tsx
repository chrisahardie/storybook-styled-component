import * as React from "react";
import { Link } from "react-router-dom";

/**
 * Lists user's contacts
 * @returns Contact list component
 */
export function ContactList(): JSX.Element {
  return (
    <table>
      <thead>
        <th>Name</th>
        <th />
        <th />
      </thead>
      <tbody>
        <tr>
          <td>John Johnson</td>
          <td><Link to="/contacts/1/addresses">Addresses</Link></td>
          <td><Link to="/contacts/1/roles">Roles</Link></td>
        </tr>
      </tbody>
    </table>
  );
}