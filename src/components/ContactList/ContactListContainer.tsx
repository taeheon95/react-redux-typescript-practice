import React, { PureComponent } from "react";
import { Contact } from "../../types";
import ContactListPresenter from "./ContactListPresenter";

interface Props {
  contactList: Contact[];
  getContactList: () => void;
}

class ContactListContainer extends PureComponent<Props> {
  componentDidMount() {
    this.props.getContactList();
  }

  render() {
    return <ContactListPresenter {...this.props} />;
  }
}

export default ContactListContainer;
