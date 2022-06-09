import React from "react";
import { connect } from "react-redux";
import { updateDelivery } from "../../store/actions/ordersActions";

import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid } from '@material-ui/core';

const Delivery = (props) => {
  const [value, setValue] = React.useState(props.delivery);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.updateDelivery(event.target.value);
  };
  return (
    <div>
      <Grid container direction="row" alignContent="center">
        <Grid item xs={6}>
          <h3>1 .お届けを選択</h3>
        </Grid>
        <Grid item xs={6}>
          <ul class="delivery-list">
            <li style={{ listStyleType: "square" }}>
              このページから注文完了までの60分間は商品が確保されます。
              ※トップページや、商品ページなど、注文手順以外のページに進むと、確保中の商品は開放されます。
            </li>
            <li style={{ listStyleType: "square" }}>
              このページでご入力いただいた情報は、TLSで保護され送信されます。
            </li>
            <li style={{ listStyleType: "square" }}>
              「市区郡町村」欄に町名以下を入力されますと、ご注文が正常に完了されない場合がございますので、町名以下につきましては、「番地」欄にご入力ください。
            </li>
            <li style={{ listStyleType: "square" }}>
              プライバシーポリシーを一部変更しました（2016年7月14日）
            </li>
            <li style={{ listStyleType: "square" }}>
              指定住所に誤りがある場合、お届けできない可能性がございます。
            </li>
          </ul>
        </Grid>
      </Grid>
      <FormControl component="fieldset">
        <FormLabel component="legend">受け取りを指定する</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <FormControlLabel
                      value="指定住所受け取り"
                      control={<Radio />}
                      label="指定住所受け取り"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      ご自宅またはご指定のお届け先にお届け致します。
                      ページ下の「お届け先」で住所をご指定ください。
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FormControlLabel
                      value="コンビニ"
                      control={<Radio />}
                      label="コンビニ店頭受け取り"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      ご自宅またはご指定のお届け先にお届け致します。
                      ページ下の「お届け先」で住所をご指定ください。
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FormControlLabel
                      value="ユニクロ店頭受け取り"
                      control={<Radio />}
                      label="ユニクロ店頭受け取り"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      お近くのUNIQLO店舗でお受取りいただけます。
                      <br />
                      【ユニクロ店舗受取りについて】
                      <br />
                      お支払い方法[代金引換払い]はご利用いただけません。
                      <br />
                      ユニクロ店舗受取りは合計金額が5,000円(税抜)未満の場合でも送料無料でご利用いただけます。
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </RadioGroup>
      </FormControl>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.orders.total,
    cartContent: state.orders.cartContent,
    delivery: state.orders.delivery
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDelivery: (delivery) => dispatch(updateDelivery(delivery))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
