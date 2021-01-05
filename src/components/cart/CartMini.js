import React, { Component } from "react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";
import { deleteOrder, updateQuantity } from "../../store/actions/ordersActions";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { NavLink } from "react-router-dom";

class CartMini extends Component {
  handleChangeSelect = event => {
    this.props.updateQuantity(
      parseInt(event.target.name, 10),
      event.target.value
    );
  };

  render() {
    console.log(this.props.cartContent.length);
    return (
      <div className="container">
        <Grid container direction="row" alignContent="center">
          <Grid item xs={6}>
            <h4 className="grey-text text-darken-3">ショッピングカート</h4>
          </Grid>
          <Grid item xs={6}>
            <p>
              商品確保時間はログイン後、＜注文手続きへ＞をクリックしてから60分間です。
            </p>
          </Grid>
        </Grid>
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead style={{ backgroundColor: "#FFE7E7" }}>
                <TableRow>
                  <TableCell>商品画像</TableCell>
                  <TableCell align="right">商品名</TableCell>
                  <TableCell align="right">サイズ</TableCell>
                  <TableCell align="right">カラー</TableCell>
                  <TableCell align="right">税抜単価</TableCell>
                  <TableCell align="right">数量</TableCell>
                  <TableCell align="right">税抜価格</TableCell>
                  <TableCell align="right">取消</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.cartContent.map(product => (
                  <TableRow key={product.name}>
                    <TableCell component="th" scope="row">
                      <img src={"/img/small/" + product.picture} alt="cloth" />
                    </TableCell>
                    <TableCell align="right">{product.name}</TableCell>
                    <TableCell align="right">{product.size}</TableCell>
                    <TableCell align="right">{product.color}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">
                      <Select
                        labelId="simple-select-label"
                        name={product.id.toString()}
                        value={product.number}
                        onChange={this.handleChangeSelect}
                      >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="right">
                      {product.price * product.number}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => {
                          this.props.deleteOrder(product.id);
                        }}
                        color="secondary"
                      >
                        取消
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead style={{ backgroundColor: "#FFE7E7" }}>
                <TableRow>
                  <TableCell>商品画像</TableCell>
                  <TableCell align="right">商品名</TableCell>
                  <TableCell align="right">サイズ</TableCell>
                  <TableCell align="right">カラー</TableCell>
                  <TableCell align="right">税抜単価</TableCell>
                  <TableCell align="right">数量</TableCell>
                  <TableCell align="right">税抜価格</TableCell>
                  <TableCell align="right">取消</TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          <Grid container direction="row" spacing={3}>
            <Grid item xs={6}>
              <div>
                <ul style={{ listStyleType: "disk" }}>
                  <li>
                    ユニクロオンラインストアではじめて購入される方や、
                    ユニクロ店舗受取りを選択して購入される方は、
                    合計金額が5,000円(税抜)未満の場合でも送料は無料になります。
                    「ユニクロ注文手続きへ」を押して、次のページで適用されます。
                  </li>
                  <br />
                  <li>
                    1回の注文の商品代金合計が5,000円（税抜）以上で
                    送料450円(税抜)は無料です。
                    ※商品合計金額には、補正料、ギフト料は含みません。
                    ※送料は注文毎に判定されます。同日に複数回ご注文の場合も、
                    　おまとめはできません。
                  </li>
                  <br />
                  <li>
                    配送について　詳しくはこちら
                    最短2日から5日前後でのお届けとなります。
                    ※注文時間帯、お直しサービスの有無、受取り方法等により
                    　異なります。 ※お取り寄せ商品を含むご注文は、
                    　追加でお届けに日数を要する場合がございます。
                  </li>
                  <br />
                  <li>
                    期間限定価格とまとめ買い対象を併記している商品は、
                    カート内ではお得な方の価格が表示されます。
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6}>
              <ul>
                <li>
                  商品合計 :{" "}
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY"
                  }).format(this.props.total)}
                </li>
                <br />
                <li>送料 : ￥0</li>
                <br />
                <li>
                  消費税 :{" "}
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY"
                  }).format((this.props.total * 10) / 100)}
                </li>
                <br />
                <li>
                  合計(税込) :{" "}
                  {new Intl.NumberFormat("ja-JP", {
                    style: "currency",
                    currency: "JPY"
                  }).format(this.props.total + (this.props.total * 10) / 100)}
                </li>
                <br />
                <br />
                <li>
                  <Button
                    disabled={this.props.cartContent.length > 0 ? false : true}
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      this.props.history.replace("/test");
                    }}
                  >
                    ユニクロ注文手続きへ
                  </Button>
                </li>
                <br />
                <li>
                  <NavLink to="/">
                    <Button variant="contained">
                      ユニクロお買いものを続ける
                    </Button>
                  </NavLink>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total: state.orders.total,
    cartContent: state.orders.cartContent
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
  firestoreConnect([
    {
      collection: "products"
    }
  ])
)(CartMini);
