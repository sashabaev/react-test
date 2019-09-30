import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { BookProps } from '../../admin/books';
import { UpdateBookState } from '../../../redux/modals/updateBook/types';

const style = {
    width: "550px",
};

export class UpdateBook extends React.Component<BookProps, UpdateBookState> {

    state: UpdateBookState = {
        isOpenModal: this.props.isOpenModal,
        book: this.props.book && this.props.book,
        error: "",
        image: this.props.book && this.props.book.image,
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
        const { handleUpdateModal } = this.props;
        if (handleUpdateModal)
            handleUpdateModal(true, this.props.book);
        this.state.isOpenModal = true;
        this.state.image = this.state.image && this.state.image ||  this.props.book.image;
        this.state.author = this.state.author && this.state.author ||  this.props.book.author;
        this.state.description = this.state.description && this.state.description||this.props.book.description;
        this.state.pages =  this.state.pages && this.state.pages || this.props.book.pages;
        this.state.price =  this.state.price && this.state.price|| this.props.book.price;
        this.state.published =  this.state.published && this.state.published|| this.props.book.published;
        this.state.publisher =  this.state.publisher && this.state.publisher||  this.props.book.publisher;
        this.state.subtitle =  this.state.subtitle && this.state.subtitle|| this.props.book.subtitle;
        this.state.title =  this.state.title && this.state.title|| this.props.book.title;
    }

    handleClose() {
        const { handleUpdateModal } = this.props;
        if (handleUpdateModal)
            handleUpdateModal(false, this.props.book);
        this.state.isOpenModal = false;
    }

    handle = (event: any) => {
        this.setState({ [event.target.name]: event.target.value } as any);
    }


    updateBook() {
        let item = this.props.book;
        item.author = this.state.author;
        item.description = this.state.description;
        item.pages = this.state.pages;
        item.image = this.state.image;
        item.price = this.state.price;
        item.published = this.state.published;
        item.publisher = this.state.publisher;
        item.subtitle = this.state.subtitle;
        item.title = this.state.title;
        const { updateBook } = this.props;
        updateBook(item);
        const { handleUpdateModal } = this.props;
        if (handleUpdateModal)
        handleUpdateModal(false, this.props.book);
        this.state.isOpenModal = false;
    }

    render() {
        if (this.props.isOpenModal && !this.state.isOpenModal) {
            this.handleClickOpen();
        }
        return (
            <div>

                <Dialog open={this.state.isOpenModal} onClose={() => this.handleClose()} aria-labelledby="form-dialog-title">
                    <DialogContent >
                        <DialogContentText style={style}>
                            Create book
                        </DialogContentText>
                        <TextField autoFocus type="text" id="price" value={this.state.price} name="price" label="price" placeholder="price" fullWidth onChange={this.handle} />
                        <br />
                        <TextField type="text" id="title" value={this.state.title} name="title" label="title" placeholder="title" fullWidth onChange={this.handle} />
                        <br />
                        <TextField type="text" id="image" value={this.state.image} name="image" label="image" placeholder="image" fullWidth onChange={this.handle} />
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
                        <Button onClick={() => this.updateBook()} color="primary">
                            Update
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

