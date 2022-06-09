import React, { Component } from "react";
import OrderSummary from "./OrderSummary";
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper, Container } from '@material-ui/core';

class OrderList extends Component {
  render() {
    let order = this.props.order;

    const date = order.date.toDate().toDateString();
    return (
      <div>
        <h3>{date}</h3>
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
                {order &&
                  Object.values(order).map(item => {
                    if (item.name) {
                      return <OrderSummary order={item} />;
                    }
                    return null;
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  }
}

export default OrderList;
