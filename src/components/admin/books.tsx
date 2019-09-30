import React from "react";
import { Book } from "../../types";
import { BookState } from "../../redux/admin/book/types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddBook from "../../containers/modals/addBookModalContainer";
import UpdateBook from "../../containers/modals/updateBookModalContainer";
import { Button, TableFooter, TablePagination, IconButton } from "@material-ui/core";
import { ConfirmModalProps } from "../modals/confirmModal";
import ConfirmModal from "../../containers/modals/confirmModalContainer";
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

export interface BookProps {
  error: string;
  isOpenModal: boolean;
  books: Book[];
  doInitBooks: (limit: number, page: number) => void;
  updateBook: (book: Book) => void;
  doConfirm: (value: string, action: string) => void;
  handleModal: (val: boolean) => void;
  createBook: (book: Book) => void;
  book: Book;
  updateState: (modalIsOpen: boolean, value: string, action: string) => void;
  handleUpdateModal: (val: boolean, book: Book) => void;
}

const style = {
  width: "120%",
  "margin": "0 0 0 -10%"
};

const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    table: {
      minWidth: 500,
    },
    tableWrapper: {
      overflowX: 'auto',
    },
  }),
);

let that: any;
let page: number = 1;

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

  init = (limit: number, newPage: number) => {
    that = this;
    page = newPage + 1;
    const { doInitBooks } = this.props;
    doInitBooks(limit, newPage);
  };

  addNewBook(item: Book) {
    const { createBook } = this.props;
    createBook(item);
  }

  updateBook(item: Book) {
    const { updateBook } = this.props;
    updateBook(item);
  }

  openModalUpdate(item: Book) {
    const { handleUpdateModal } = this.props;
    handleUpdateModal(true, item);
  }

  handleClose() {
    this.state.isOpenModal = false;
    this.setState(this.state);
  }
  handleChangePage(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) {
    debugger
    that.init(10, newPage)
    //setPage(newPage);
  }

  handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    debugger
    that.init(10, 1)
    // setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);
  }
  handleClickOpen(id: string) {
    this.state.value = id;
    this.state.isOpenModal = true;
    const { doConfirm } = this.confirmProps;
    const { action } = this.confirmProps;
    const { value } = this.confirmProps;
    const { updateState } = this.props;
    updateState(true, id, "@@book/DATA_REMOVE");
    this.confirmProps.isOpenModal = this.state.isOpenModal;
    this.confirmProps.value = id;
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
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={this.props.books.length}
                  rowsPerPage={1}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </div>
    );
  }

  async componentDidMount() {
    console.log("init");
    this.init(10, 0);
  }
}
