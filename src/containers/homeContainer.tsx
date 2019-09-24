import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { doInit, updateStateCart, updateCount,updateStateHome } from "../redux/home/actions";
import { HomeComponent } from "../components/home/homeComponent";

const mapStateToProps = (state: RootState) => ({
  error: state.error,
  books: state.home.books,
  enviroment: state.home.enviroment
});

export default connect(
  mapStateToProps,
  { doInit, updateStateCart, updateCount, updateStateHome }
)(HomeComponent);