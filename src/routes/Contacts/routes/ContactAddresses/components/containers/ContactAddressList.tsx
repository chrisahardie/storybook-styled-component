import * as React from "react";
import { Address } from "src/routes/Contacts/routes/ContactAddresses/components/presentation/Address";
import { ExtractPropsType } from "src/types";
import shortid from "shortid";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

/**
 * Address details for a contact
 */
type ContactAddress = ExtractPropsType<typeof Address> & {
  /**
   * Contact user id
   */
  userId: string;
};

// Our external state which only a container should know about...
const contactAddreses: ContactAddress[] = [{
  userId: "1",
  streetNumber: "123",
  addressType: "Home",
  streetName: "Main Street",
  city: "Ottawa",
  province: "ON",
  postalCode: "K1K0X0",
}, {
  userId: "1",
  streetNumber: "373",
  addressType: "Office",
  streetName: "Coventry Road",
  city: "Ottawa",
  province: "ON",
  postalCode: "K1K0X0",
}];

/**
 * A component that lists all addresses for a particula contact
 * @returns a list of contact address components
 */
export const ContactAddressList: React.FC = () => {
  const { userId } = useParams();
  const addresses = contactAddreses.filter(address => address.userId === userId);

  return (
    <>
      <Link to="/contacts">Go back</Link>
      {addresses.map(address => (
        <Address
          key={shortid.generate()}
          addressType={address.addressType}
          streetNumber={address.streetNumber}
          streetName={address.streetName}
          city={address.city}
          province={address.province}
          postalCode={address.postalCode}
        />
      ))}
    </>
  );
};