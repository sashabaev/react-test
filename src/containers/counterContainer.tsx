import { RootState } from "../redux/rootReducer";
import { connect } from "react-redux";
import { CounterComponent } from "../components/counter/counterComponent";
import { doInit } from "../redux/counter/actions";
const mapStateToProps = (state: RootState) => ({
    error: state.error,
    count: state.count.count
  });
  
  export default connect(
    mapStateToProps,
    { doInit }
  )(CounterComponent);