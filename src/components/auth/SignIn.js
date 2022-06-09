import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;

    if (this.props.auth.uid) return <Redirect to="/" />;

    return (
      <div className="container">
        <Grid container direction="row" alignContent="center">
          <Grid item xs={6}>
            <h4 className="grey-text text-darken-3">ログイン</h4>
          </Grid>
          <Grid item xs={6}>
            <p>
              安心してご利用いただくために、定期的なパスワードの
              変更をおすすめします。
              <br />
              昨今、悪意のある第三者が不正ログインを試みる事例が 増えています。
              <br />
              同じパスワードを長期間使用することや、複数のサイトで
              <br />
              同じパスワードを使用することは、思わぬ被害にあう
              <br />
              可能性がありますので、定期的なパスワードの 変更をおすすめします。
              <br />
              変更はログイン後、会員情報の変更画面からお願いします。 <br />
              <br />
            </p>
          </Grid>
        </Grid>
        <h5>ユニクロ・ジーユーオンラインストア会員の方はこちら</h5>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">メールアドレス</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">パスワード</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">ログイン</button>
            <div className="text-red center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
          <br />
          <br />
        </form>

        <div>
          新規ご登録の方はこちら
          <br />
          <br />
        </div>
        <NavLink to="/signup">
          <button className="btn pink lighten-1 z-depth-0">会員登録</button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
