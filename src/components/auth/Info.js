import React, { Component } from "react";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Info extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //this.props.signUp(this.state);
  };
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">お客様情報の変更</h5>
          <div className="input-field">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={auth.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              value="****"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">名</label>
            <input
              type="text"
              id="firstName"
              value={profile.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">姓</label>
            <input
              type="text"
              id="lastName"
              value={profile.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="text">ご住所</label>
            <input
              type="text"
              id="address"
              value={profile.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">変更</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
