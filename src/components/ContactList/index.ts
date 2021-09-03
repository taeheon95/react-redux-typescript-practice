import { connect } from "react-redux";
import { getContactList } from "../../stores/modules/contactList/contactList";
import { AppDispatch, RootState } from "../../stores/store";
import { Contact } from "../../types";
import ContactListContainer from "./ContactListContainer";

const mapStateToProps = (state: RootState) => ({
  contactList: state.contactList.contactList,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getContactList: () => dispatch(getContactList()),
});

export interface Props {
  contactList: Contact[];
  getContactList: () => void;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactListContainer);
