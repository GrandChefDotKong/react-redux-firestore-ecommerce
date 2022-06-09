import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, TableHead, Container } from '@material-ui/core';
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { deleteOrder, updateQuantity } from "../../store/actions/ordersActions";

const Recap = props => {
  return (
    <div>
      <h3>ご注文内容の確認</h3>
      <ul style={{ listStyleType: "disk" }}>
        <li>
          ギフトサービスをご希望の場合でも、代金引換払いを
          承る事ができますが、お届け先に十分、ご注意ください。
        </li>
        <li>
          ＜お届け先を選択＞の画面から、60分間は商品が確保されます。
          ※トップページや、商品ページなど、注文手順以外のページに進むと、確保中の商品は開放されます。
        </li>
        <li>このページでご入力いただいた情報は、TLSで保護され送信されます。</li>
      </ul>
      <Container maxWidth="lg">
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead style={{ backgroundColor: "#FFE7E7" }}>
              <TableRow>
                <TableCell>商品画像</TableCell>
                <TableCell align="right">商品名</TableCell>
                <TableCell align="right">サイズ</TableCell>
                <TableCell align="right">税抜単価</TableCell>
                <TableCell align="right">数量</TableCell>
                <TableCell align="right">税抜価格</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.cartContent.map(product => (
                <TableRow key={product.name}>
                  <TableCell component="th" scope="row">
                    <img src={"/img/small/" + product.picture} alt="cloth" />
                  </TableCell>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">{product.size}</TableCell>
                  <TableCell align="right">{product.color}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right">{product.number}</TableCell>
                  <TableCell align="right">
                    {product.price * product.number}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead style={{ backgroundColor: "#FFE7E7" }}>
              <TableRow>
                <TableCell>商品画像</TableCell>
                <TableCell align="right">商品名</TableCell>
                <TableCell align="right">サイズ</TableCell>
                <TableCell align="right">税抜単価</TableCell>
                <TableCell align="right">数量</TableCell>
                <TableCell align="right">税抜価格</TableCell>
              </TableRow>
            </TableHead>
            <TableRow>
              <TableCell>お届け</TableCell>
              <TableCell>{props.delivery}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>お支払い方法</TableCell>
              <TableCell>{props.payment}</TableCell>
            </TableRow>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    total: state.orders.total,
    cartContent: state.orders.cartContent,
    delivery: state.orders.delivery,
    payment: state.orders.payment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteOrder: id => dispatch(deleteOrder(id)),
    updateQuantity: (id, number) => dispatch(updateQuantity(id, number))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "products" }])
)(Recap);
