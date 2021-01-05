import React from "react";
import { connect } from "react-redux";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

const Footer = props => {
  return (
    <footer>
      <Breadcrumbs
        style={{
          backgroundColor: "white"
        }}
        className="breadcrumbs"
      >
        <img style={{ marginTop: 7 }} src="/img/logo_uq_01.gif" alt="logo" />
        <Link color="inherit" href="/">
          店舗検索
        </Link>
        <Link color="inherit" href="/">
          お問い合わせ
        </Link>
        <Link color="inherit" href="/">
          企業情報
        </Link>
        <Link color="inherit" href="/">
          採用情報
        </Link>
        <Link color="inherit" href="/">
          プライバシーポリシー
        </Link>
        <Link color="inherit" href="/">
          サイトマップ
        </Link>
        <Link color="inherit" href="/">
          サイトマ
        </Link>
        <Link color="inherit" href="/">
          サイト
        </Link>
      </Breadcrumbs>
      <div className="footer-copyright">
        <div className="container">© 2014 Copyright Uniqlo</div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    numberItem: state.orders.numberItem
  };
};

export default connect(mapStateToProps)(Footer);

/*
<span>店舗検索</span>
          <span>お問い合わせ</span>
          <span>企業情報</span>
          <span>採用情報</span>
          <span>プライバシーポリシー</span>
          <span>サイトマップ</span>
  */
