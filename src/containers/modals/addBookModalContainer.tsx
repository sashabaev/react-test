
import { connect } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { AddBook } from "../../components/modals/admin/addBook";
import { handleModal } from "../../redux/admin/book/actions";
const mapStateToProps = (state: RootState) => {
    return ({
        error: state.error,
        isOpenModal: state.createBook.isOpenModal
    });
};
  
  export default connect(
    mapStateToProps,
    { handleModal }
  )(AddBook);