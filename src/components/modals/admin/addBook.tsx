import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { render } from 'react-dom';
import { Product } from '../../../types';
import { BookProps } from '../../admin/books';
import { AddBookState } from '../../../redux/modals/addBook/types';


const style = {
  width: "550px",
};

export class AddBook extends React.Component<BookProps, AddBookState> { 
  state: AddBookState = {
    isOpenModal: this.props.isOpenModal,
    error: "",
    price: this.props.book && this.props.book.price,
    title: this.props.book && this.props.book.title,
    subtitle: this.props.book && this.props.book.subtitle,
    author: this.props.book && this.props.book.author,
    published: this.props.book && this.props.book.published,
    publisher: this.props.book && this.props.book.publisher,
    pages: this.props.book && this.props.book.pages,
    description: this.props.book && this.props.book.description
  };

  handleClickOpen() {
    const { handleModal } = this.props;
    if (handleModal)
      handleModal(true);
    this.state.isOpenModal = true;
  }

  handleClose() {
    const { handleModal } = this.props;
    if (handleModal)
      handleModal(false);
    this.state.isOpenModal = false;
  }
  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  addBook() {
    let item: Product = {
      id: "",
      bookCount: 0,
      image: "",
      isBooked: false,
      isbn: 0,
      website: "",
      author: this.state.author,
      description: this.state.description,
      pages: this.state.pages,
      price: this.state.price,
      published: this.state.published,
      publisher: this.state.publisher,
      subtitle: this.state.subtitle,
      title: this.state.title
    }
    const { createBook } = this.props;
    createBook(item);
    const { handleModal } = this.props;
    if (handleModal)
      handleModal(false);
    this.state.isOpenModal = false;
  }

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen()}>
          Add book
      </Button>
        <Dialog open={this.state.isOpenModal} onClose={() => this.handleClose()} aria-labelledby="form-dialog-title">
          <DialogContent >
            <DialogContentText style={style}>
              Create book
            </DialogContentText>
            <TextField autoFocus type="text" id="price" value={this.state.price} name="price" label="price" placeholder="price" fullWidth onChange={this.handle} />
            <br />
            <TextField type="text" id="title" value={this.state.title} name="title" label="title" placeholder="title" fullWidth onChange={this.handle} />
            <br />
            <TextField type="text" value={this.state.subtitle} name="subtitle" label="subtitle" placeholder="subtitle" fullWidth onChange={this.handle} />
            <br />
            <TextField type="text" value={this.state.author} name="author" label="author" placeholder="author" fullWidth onChange={this.handle} />
            <br />
            <TextField type="text" value={this.state.published} name="published" label="published" fullWidth onChange={this.handle} />
            <br />
            <TextField type="text" value={this.state.publisher} name="publisher" label="publisher" placeholder="publisher" fullWidth onChange={this.handle} />
            <br />
            <TextField type="number" value={this.state.pages} name="pages" label="pages" placeholder="pages" fullWidth onChange={this.handle} />
            <br />
            <textarea value={this.state.description} name="description" className="form-control" placeholder="description" onChange={this.handle}></textarea>
            <br />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.addBook()} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

