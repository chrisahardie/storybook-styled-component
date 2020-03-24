import * as React from "react";
import { ExtractPropsType } from "src/types";
import shortid from "shortid";
import { Role } from "src/routes/Contacts/routes/ContactRoles/components/presentation/Role";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

/**
 * Defines a role a contact can belong to
 */
type ContactRole = ExtractPropsType<typeof Role> & {
  /**
   * Contact user id
   */
  userId: string;
};

// Our external state which only a container should know about...
const contactRoles: ContactRole[] = [
  {
    userId: "1",
    roleName: "editor",
    isActive: true,
    lastModifiedDate: moment()
  },
  {
    userId: "1",
    roleName: "reader",
    isActive: false,
    lastModifiedDate: moment("2020-02-01")
  },
  {
    userId: "1",
    roleName: "contributor",
    isActive: true,
    lastModifiedDate: moment("2020-01-15")
  }
];

/**
 * Displays a list of roles a contact belongs to
 * @returns A component that lists contact roles
 */
export const ContactRolesList: React.FC = () => {
  const { userId } = useParams();
  const roles = contactRoles.filter(role => role.userId === userId);
  
  return (
    <>
      <Link to="/contacts">Go back</Link>
      {roles.map(role => (
        <Role
          key={shortid.generate()}
          roleName={role.roleName}
          isActive={role.isActive}
          lastModifiedDate={role.lastModifiedDate}
        />
      ))}
    </>
  );
};