import React, { PureComponent } from "react";
import { Contact } from "../../types";
import ContactListPresenter from "./ContactListPresenter";

interface Props {
  keyword: string;
  contactList: Contact[];
  getContactList: () => void;
}

class ContactListContainer extends PureComponent<Props> {
  componentDidMount() {
    this.props.getContactList();
  }

  hasKeyword = (contact: Contact) => {
    const keywordBoolean: Boolean[] = [];
    if (this.props.keyword === "") return true;

    Object.values(contact).forEach((value) => {
      value.toString().includes(this.props.keyword)
        ? keywordBoolean.push(true)
        : keywordBoolean.push(false);
    });

    return keywordBoolean.includes(true) ? true : false;
  };

  render() {
    return (
      <ContactListPresenter
        {...this.props}
        hasKeyword={this.hasKeyword.bind(this)}
      />
    );
  }
}

export default ContactListContainer;
