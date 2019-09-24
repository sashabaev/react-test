import React from 'react';
import { Product } from '../../types';
import { CartState } from '../../redux/cart/types';

export interface CartProps {
  error: string;
  books: Product[];  
  doInit: () => void;
  updateCount: (count: number) => void;
  updateStateCart: (book: Product[]) => void;
  updateStateHome: (book: Product[]) => void;
}

export class CartComponent extends React.Component<CartProps, CartState> {
  state: CartState = {
    error: "",
    count: 0,
    books: [] 
  };

  handleRemove = (item: Product)=>{
    let countBook = 0;    
    item.bookCount = 0;
    for(let item of this.props.books){
      countBook += item.bookCount;
    }
    this.updateState( countBook );
  }
  //to add the quantity
  handleAddQuantity = (item: Product)=>{
    let countBook = 0;    
    item.isBooked = !item.isBooked;
    item.bookCount += 1;
    for(let item of this.props.books){
      countBook += item.bookCount;
    }
    this.updateState( countBook );
  }

  updateState(countBook: number ){
    const { updateCount } = this.props;
    const { updateStateCart } = this.props;
    const { updateStateHome } = this.props;
    updateCount(countBook);
    updateStateCart(this.props.books);
    updateStateHome(this.props.books);
  }
  //to substruct from the quantity
  handleSubtractQuantity = (item: Product)=>{
    let countBook = 0;    
    item.isBooked = !item.isBooked;
    item.bookCount -= 1;
    for(let item of this.props.books){
      countBook += item.bookCount;
    }   
    this.updateState(countBook);
  }

  init = () => {
    const { doInit } = this.props;
    doInit();
  };

  render(){          
      return(
         <div>
           
           {  this.props.books && this.props.books.map((item, ix) => {            
                      if(item.bookCount>0){
                      return( <li className="collection-item avatar" key={ix}>
                      <div className="item-img"> 
                          <img width="300" src={item.image} alt={item.image} className=""/>
                      </div>
                  
                      <div className="item-desc">
                          <span className="title">{item.title}</span>
                          <p>{item.description}</p>
                          <p><b>Price: {item.price}$</b></p> 
                          <p>
                            <b>Quantity: {item.bookCount}</b> 
                          </p>
                          <div className="add-remove">
                          <button type="button" className="btn btn-danger" onClick={() => this.handleSubtractQuantity(item)}>-</button>
                          <button className="btn btn-success" onClick={() => this.handleAddQuantity(item)}>+</button>
                          </div>
                          <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item)}}>Remove</button>
                      </div>
                  </li>
           
            )
          }
                      })
              }
               </div>)
  }

  async componentDidMount() { 
    this.init();
  }
}
