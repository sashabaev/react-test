import React from "react";
import { LoginState, LoginResult, LoginRequest } from "../../redux/login/types";
import { doLogin } from "../../redux/login/actions";
//import { doLoginSuccess } from "@redux/login/actions";
//import { loginReducer } from "@redux/login/reducer";

export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
}


export class LoginComponent extends React.Component {
  state: any = {
    email: "",
    password: "",
    error: "",
    isLoading: false
  };

  handle = (event: any) =>
    this.setState({ [event.target.name]: event.target.value } as any);

  login = () => {
    //const { doLogin } = this.props;
    doLogin({ email: this.state.email, password: this.state.password });
  };

  render() {
    return (
      <div className="container">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label className="sr-only">Email address</label>
          <input type="email" value={this.state.email} name="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handle} />
          <label className="sr-only">Password</label>
          <br />
          <input type="password" id="inputPassword" value={this.state.password} name="password" className="form-control" placeholder="Password" onChange={this.handle} />
          <label className="sr-only">Email or password incorrect</label>
          <a className="btn btn-lg btn-primary btn-block" onClick={() => this.login()}>Sign in</a>
          <br />
          <a className="btn btn-lg btn-primary btn-block" href="#">Google</a>
        </form>
      </div>);
  }
}