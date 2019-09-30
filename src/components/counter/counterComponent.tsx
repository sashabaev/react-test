import React from "react";
import { Book } from "../../types";
import { CartState } from "../../redux/cart/types";
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import { Box, IconButton, Badge } from "@material-ui/core";
import { EditorFormatAlignCenter } from "material-ui/svg-icons";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { RootState } from "../../redux/rootReducer";
import { connect } from "react-redux";
import { doInit } from "../../redux/counter/actions";
import { CounterState } from "../../redux/counter/types";
import { Link, Redirect } from "react-router-dom";

export interface CounterProps {
  error: string;
  count: 0,
  doInit: () => void;
  router: ""
}

export class CounterComponent extends React.Component<any,any>{
  state: CounterState = {
    error: "",
    count: 0
  };

  init = () => {
    //const { doInit } = this.props;
    doInit();
  };
  viewAbout() {
    this.props.history.push('/cart')
 }
  render() {
    const StyledBadge1 = withStyles((theme: Theme) =>
    createStyles({
      badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }),
      )(Badge);
          return (  
            <Box m={1}>
               <Link to="/cart">
               <IconButton aria-label="cart">
              <StyledBadge1 badgeContent={this.props.count} color="primary">
                <ShoppingCartIcon />
              </StyledBadge1>
            </IconButton></Link>   
            
          </Box>
          )
    }  
}
