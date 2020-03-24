import * as React from "react";
import * as moment from "moment";

/**
 * Props
 */
interface Props {
  /**
   * Name of the role
   */
  roleName: string;
  /**
   * Indicates whether the role is active
   */
  isActive: boolean;
  /**
   * Indicates when the role was last modified
   */
  lastModifiedDate: moment.Moment;
}

/**
 * Shows role details for a contact
 * @param props - Component props
 * @returns a component showing role details
 */
export const Role: React.FC<Props> = (props) => (
  <table>
    <thead>
      <th>Role name</th>
      <th>Is active?</th>
      <th>Last modified</th>
    </thead>
    <tbody>
      <td>{props.roleName}</td>
      <td>{props.isActive.toString()}</td>
      <td>{props.lastModifiedDate.format("YYYY-mm-DD")}</td>
    </tbody>
  </table>
);