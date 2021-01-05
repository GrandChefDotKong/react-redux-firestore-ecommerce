import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const OrderSummary = props => {
  return (
    <TableRow key={props.order.name}>
      <TableCell component="th" scope="row">
        <img src={"/img/small/" + props.order.picture} alt="cloth" />
      </TableCell>
      <TableCell align="right">{props.order.name}</TableCell>
      <TableCell align="right">{props.order.size}</TableCell>
      <TableCell align="right">{props.order.price}</TableCell>
      <TableCell align="right">{props.order.number}</TableCell>
      <TableCell align="right">
        {props.order.price * props.order.number}
      </TableCell>
    </TableRow>
  );
};

export default OrderSummary;
