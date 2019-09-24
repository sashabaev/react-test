
import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { doConfirm, updateState } from "../../redux/admin/book/actions";
import { ConfirmModal } from "../../components/modals/confirmModal";

const mapStateToProps = (state: RootState) => {
  return ({
    error: state.error,
    isOpenModal: state.confirmModal.isOpenModal,
    action: state.confirmModal.action,
    value: state.confirmModal.value
  });
};

export default connect(
  mapStateToProps,
  { doConfirm, updateState }
)(ConfirmModal);


