import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Grid } from '@material-ui/core';
import { connect } from "react-redux";
import { updatePayment } from "../../store/actions/ordersActions";

const Payment = (props) => {
  const [value, setValue] = React.useState(props.payment);

  const handleChange = (event) => {
    setValue(event.target.value);
    props.updatePayment(event.target.value);
  };
  return (
    <div>
      <Grid container direction="row" alignContent="center">
        <Grid item xs={6}>
          <h3>お支払い方法を選択</h3>
        </Grid>
        <Grid item xs={6}>
          <ul>
            <li style={{ listStyleType: "square" }}>
              ギフトサービスをご希望の場合でも、代金引換払いを
              承る事ができますが、お届け先に十分、ご注意ください。
            </li>
            <li style={{ listStyleType: "square" }}>
              クレジットカード情報を登録されている場合
              一部の提携クレジットカードは、［カード会社］の項目が、ご登録時にプルダウンで選択されたカード会社名と異なる場合があります。
            </li>
            <li style={{ listStyleType: "square" }}>
              ご注文内容をご確認いただき、ページ右下の「注文する」ボタンをクリックしてください。これにてご注文手続きが完了します。
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
                      value="クレジット"
                      control={<Radio />}
                      label="クレジット"
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
                      value="後払い"
                      control={<Radio />}
                      label="
                      後払い
                    （コンビニエンスストア/郵便局/銀行支払い"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      このお支払方法の詳細
                      <br />
                      商品の到着を確認してから、「コンビニエンスストア」「郵便局」「銀行」で後払いできる安心・簡単な決済方法です。
                      <br />
                      請求書は、商品とは別に郵送されますので、発行から14日以内にお支払いをお願いします。
                      ご注意 後払い手数料：0円
                      <br />
                      （株）ネットプロテクションズの提供するNP後払いサービスが適用され、
                      <br />
                      同サービス範囲内で個人情報を提供し代金債権を譲渡します。
                      ご利用限度額は累計残高で、54,000円（税込み）迄です。
                      <br />
                      ※NP後払いサービス加盟店の利用総額にて判断されます。
                      <br />
                      詳細は下記をクリックしてご確認ください。
                      <br />
                      URL：http://np-atobarai.jp/about/
                      <br />
                      ※ユニクロ店舗受取り、またはコンビニ受取りは、一定の条件を満たしたお客様のみ利用することができます。
                      <br />
                      ※利用条件についてはこちら
                      <br />
                      ※請求書は、会員登録住所(こちら)へ送付されます。
                      <br />
                      ※ご注文者は成人であるか、（または、）ご注文者が未成年の場合には法定代理人によるご注文の同意を得ています。
                      <br />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <FormControlLabel
                      value="代金引換"
                      control={<Radio />}
                      label="代金引換"
                    />
                  </TableCell>
                  <TableCell>
                    <div>
                      代引き手数料は無料です。商品代金は、配達時にお支払いいただきます。
                      <br />
                      ［ギフトサービス（ラッピングしてお届け）］をご利用の場合は、
                      <br />
                      クレジットカード払いをご利用ください。
                      <br />
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
    payment: state.orders.payment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePayment: (payment) => dispatch(updatePayment(payment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
