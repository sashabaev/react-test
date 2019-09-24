import React from "react";
import { HomeState } from "../../redux/home/types";
import { Product } from "../../types";

export interface HomeProps {
  error: string;
  books: Product[];
  doInit: (book: Product[]) => void;
  updateCount: (count: number) => void;
  updateStateCart: (book: Product[]) => void;
  updateStateHome: (book: Product[]) => void;
}

export class HomeComponent extends React.Component<HomeProps, HomeState> {
  state: HomeState = {
    error: "",
    enviroment: "",
    books: []
  };

  init = () => {
    const { doInit } = this.props;
    doInit(this.props.books);
  };

  addToCart(item: Product){
    let countBook = 0;    
    item.isBooked = !item.isBooked;
    item.bookCount +=1;
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

  removeFromCart(item: Product){
    let countBook = 0;    
    item.isBooked = !item.isBooked;
    item.bookCount -= 1;
    for(let item of this.props.books){
      countBook += item.bookCount;
    }    
    this.updateState( countBook );
  }

  render() {
    return (
      <div>       
        <h2>Products</h2>
        <div className="row">   
          {    
              this.props.books && this.props.books.map((item, ix) => { 
                
               if(item.bookCount && item.bookCount > 0){
                return <div className="col-md-4"  key={ix}>     
                <h4>{item.title}</h4>
                <div >
                <img src={item.image} className="img-responsive"/>
              </div>
              <p>{item.description}</p>
              <b className="title">{item.price} ₴</b>
              <button type="button" className="btn btn-danger" onClick={() => this.removeFromCart(item)}>-</button>
              <button className="btn btn-success" onClick={() => this.addToCart(item)}>+</button>
              <b> {item.bookCount}</b>               
                </div>
              }
              if(!item.bookCount || item.bookCount === 0){
                return <div className="col-md-4"  key={ix}>     
                <h4>{item.title}</h4>
                <div className="magazine-image">
                <img src={item.image} className="img-responsive"/>
              </div>
              <p>{item.description}</p>
              <b className="title">{item.price} ₴</b>                
              <button className="btn btn-success" onClick={() => this.addToCart(item)}>+</button>
              <b> {item.bookCount}</b>
                </div>
              }
            }
            )
            }
      </div>
      </div>
    )}
  async componentDidMount() {
    console.log("init");
    this.init();
  }
}
