import React, { Component } from "react";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

class SignUp extends Component {
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
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <Grid container direction="row" alignContent="center">
          <Grid item xs={6}>
            <h3>新規会員登録</h3>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li style={{ listStyleType: "square" }}>
                ★ユニクロ公式オンラインストアをはじめてご利用のお客様は送料無料！詳しくは
                こちら
              </li>
              <li style={{ listStyleType: "square" }}>
                このページでご入力いただいた情報は、TLSで保護され送信
                されます。[TLSについて]
              </li>
              <li style={{ listStyleType: "square" }}>
                ご入力いただいたメールアドレスに、確認メールをお送りします。
                <br />
                受信設定をされている場合は、事前に＜noreply@mail.fastretailing.com＞からのメールが受け取れるように設定をお願いします。
              </li>
            </ul>
          </Grid>
        </Grid>
        <h5>メール受信設定の事前確認のお願い</h5>
        <p>
          ご登録手続きの前に「 noreply@mail.fastretailing.com
          」からのメールを必ず受信可能に設定してください。
          <br />
          ご入力いただいたメールアドレスに、確認メールを送付致します。迷惑メール設定などをされている場合は、確認メール送付前に設定の解除をお願い致します。
          <br />
          確認メールを受け取れない場合、登録手続きは完了しませんので、ご注意ください。
          <br />
        </p>
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">会員情報</h5>
          <div className="input-field">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">名</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">姓</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">ご住所</label>
            <input type="text" id="address" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">会員登録</button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
