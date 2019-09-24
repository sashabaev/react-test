import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { doInit, updateCount, updateStateCart, updateStateHome } from "../redux/cart/actions";
import { CartComponent } from "../components/cart/cartComponent";

const mapStateToProps = (state: RootState) => ({
    error: state.error,
    books: state.cart.books,
    count: state.cart.count
  });
  
  export default connect(
    mapStateToProps,
    { doInit, updateCount, updateStateCart,  updateStateHome }
  )(CartComponent);