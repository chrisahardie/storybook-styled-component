import * as React from "react";

/**
 * Props
 */
interface Props {
  /**
   * Type of address e.g. home, work, etc...
   */
  addressType: string;
  /**
   * Street number
   */
  streetNumber: string;
  /**
   * Street name
   */
  streetName: string;
  /**
   * City
   */
  city: string;
  /**
   * Province
   */
  province: string;
  /**
   * Postal code
   */
  postalCode: string;
}

/** Display's a user's address
 * @param props - Props
 * @returns Address component
 */
export const Address: React.FunctionComponent<Props> = (props) => (
  <div>
    <h2>{props.addressType} address</h2>
    <p>Street: {props.streetNumber} {props.streetName}</p>
    <p>City: {props.city}</p>
    <p>Province: {props.province}</p>
    <p>Postal code: {props.postalCode}</p>
  </div>
);