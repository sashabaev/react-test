import React from "react";
import { Product } from "../../types";
import { BookState } from "../../redux/admin/book/types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddBook from "../../containers/modals/addBookModalContainer";
import UpdateBook from "../../containers/modals/updateBookModalContainer";
import { Button } from "@material-ui/core";
import { ConfirmModalProps } from "../modals/confirmModal";
import ConfirmModal from "../../containers/modals/confirmModalContainer";

export interface BookProps {
  error: string;
  isOpenModal: boolean;
  books: Product[];
  doInitBooks: () => void;
  updateBook: (book: Product) => void;
  doConfirm: (value: string, action: string) => void;
  handleModal: (val: boolean) => void;
  createBook: (book: Product) => void;
  book: Product;
  updateState: (modalIsOpen: boolean, value: string, action: string) => void;
  handleUpdateModal: (val: boolean, book: Product) => void;
}

const style = {
  width: "120%",
  "margin": "0 0 0 -10%"
};

export class BooksComponent extends React.Component<BookProps, BookState> {
  confirmProps: ConfirmModalProps = {
    action: "",
    isOpenModal: false,
    value: "",
    doConfirm: this.props.doConfirm,
    updateState: this.props.updateState
  };

  state: BookState = {
    error: "",
    isOpenModal: false,
    value: "",
    books: []
  };

  init = () => {
    const { doInitBooks } = this.props;
    doInitBooks();
  };

  addNewBook(item: Product) {
    const { createBook } = this.props;
    createBook(item);
  }

  updateBook(item: Product) {
    const { updateBook } = this.props;
    updateBook(item);
  }

  // removeBook() {
  //   confirmProps.action = "@@book/DATA_REMOVE";
  //   confirmProps.value = this.state.idForRemove;
  //   this.setState(this.state);
  // }

  openModalUpdate(item: Product) {
    const { handleUpdateModal } = this.props;
    handleUpdateModal(true, item);
  }

  handleClose() {
    this.state.isOpenModal = false;
    this.setState(this.state);
  }

  handleClickOpen(id: string) {
    this.state.value = id;
    this.state.isOpenModal = true;
    const { doConfirm } = this.confirmProps;
    const { action } = this.confirmProps;
    const { value } = this.confirmProps;
    const { updateState } = this.props;
    updateState(true, id, "@@book/DATA_REMOVE");
    //this.confirmProps.action = "@@book/DATA_REMOVE";
    this.confirmProps.isOpenModal = this.state.isOpenModal;
    this.confirmProps.value = id;
    //this.setState(this.state);
  }

  render() {
    return (
      <div>
        <AddBook {...this.props} />
        <UpdateBook {...this.props} />
        <ConfirmModal {...this.confirmProps} />
        <Paper style={style}>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell >price</TableCell>
                <TableCell align="left">title</TableCell>
                <TableCell align="left">subtitle</TableCell>
                <TableCell align="left">author</TableCell>
                <TableCell align="left">published</TableCell>
                <TableCell align="left">publisher</TableCell>
                <TableCell align="left">pages</TableCell>
                <TableCell align="left">description</TableCell>
                <TableCell align="left">actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.books.map(row => (
                <TableRow key={row.id}>
                  <TableCell align="left">{row.price}</TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.subtitle}</TableCell>
                  <TableCell align="left">{row.author}</TableCell>
                  <TableCell align="left">{row.published}</TableCell>
                  <TableCell align="left">{row.publisher}</TableCell>
                  <TableCell align="left">{row.pages}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">
                    <Button variant="outlined" color="primary" onClick={() => this.openModalUpdate(row)}>
                      Edit
                  </Button>
                    <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen(row.id)}>
                      Delete
                  </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {/* <Dialog open={this.state.isOpenModal} onClose={() => this.handleClose()} aria-labelledby="responsive-dialog-title">
          <DialogTitle id="responsive-dialog-title">{"Confirmation"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Do you sure?
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Disagree
          </Button>
            <Button onClick={() => this.doConfirm()} color="primary" autoFocus>
              Agree
          </Button>
          </DialogActions>
        </Dialog> */}
      </div>
    );
  }

  async componentDidMount() {
    console.log("init");
    this.init();
  }
}
