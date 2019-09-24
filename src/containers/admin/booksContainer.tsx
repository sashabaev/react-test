import { RootState } from "../../redux/rootReducer";
import { connect } from "react-redux";
import { doInitBooks, updateBook, createBook, doConfirm, handleModal,handleUpdateModal,updateState } from "../../redux/admin/book/actions";
import { BooksComponent } from "../../components/admin/books";

const mapStateToProps = (state: RootState) => ({
  error: state.error,
  books: state.book.books,
  isOpenModal: state.createBook.isOpenModal
});

export default connect(
  mapStateToProps,
  { doInitBooks, updateBook, createBook, doConfirm, handleModal, handleUpdateModal ,updateState}
)(BooksComponent);