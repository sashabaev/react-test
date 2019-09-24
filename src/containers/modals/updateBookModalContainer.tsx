
import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { handleUpdateModal } from "../../redux/admin/book/actions";
import { UpdateBook } from "../../components/modals/admin/updateBook";

const mapStateToProps = (state: RootState) => {
    return ({
        error: state.error,
        isOpenModal: state.updateBook.isOpenModal,
        book: state.updateBook.book
    });
};
  
  export default connect(
    mapStateToProps,
    { handleUpdateModal }
  )(UpdateBook);