import React from "react";
//ボタン
import { Button } from "@material-ui/core";
//テーブル
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { connect } from "react-redux";
import { cancel } from "../actions";




 const OrderHistory = (props) => {
  console.log(props.orderHistoryName);
  return (
    <React.Fragment>
      <h1 align="center">注文履歴</h1>
      <table>
        <TableHead>
          <TableRow>
            <TableCell>商品画像</TableCell>
            <TableCell>商品名</TableCell>
            <TableCell>商品価格</TableCell>
            <TableCell>トッピング名</TableCell>
            <TableCell>トッピング価格</TableCell>
            <TableCell>小計</TableCell>
            <TableCell>小計の消費税</TableCell>
            <TableCell>商品個数</TableCell>
            <TableCell>配達指定日</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableCell>{props.orderHistoryImagePath}</TableCell>
          <TableCell>{props.orderHistoryName}</TableCell>
          <TableCell>{props.orderHistoryPrice}</TableCell>
          <TableCell>{props.orderHistoryTopping}</TableCell>
          <TableCell>{props.orderHistoryToppingPrice}</TableCell>
          <TableCell>{props.orderHistorySmallTotalPrice}</TableCell>
          <TableCell>{props.orderHistorySmallTotalTax}</TableCell>
          <TableCell>{props.orderHistoryItemCount}</TableCell>
          <TableCell>{props.orderHistoryDestinationTime}</TableCell>
        </TableBody>
      </table>
      <a href="/detail/:id">
        <button>この商品をもう一度注文</button>
      </a>
      <button onClick={props.cancel}>キャンセル</button>
      <div align="center">
        <a href="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            メニューの一覧に戻る
          </Button>
        </a>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  orderHistoryImagePath: state.orderHistory.orderHistoryImagePath,
  orderHistoryName: state.orderHistory.orderHistoryName,
  orderHistoryPrice: state.orderHistory.orderHistoryPrice,
  orderHistoryTopping: state.orderHistory.orderHistoryTopping,
  orderHistoryToppingPrice: state.orderHistory.orderHistoryToppingPrice,
  orderHistorySmallTotalPrice: state.orderHistory.orderHistorySmallTotalPrice,
  orderHistorySmallTotalTax: state.orderHistory.orderHistorySmallTotalTax,
  orderHistoryItemCount: state.orderHistory.orderHistoryItemCount,
  orderHistoryDestinationTime: state.orderHistory.orderHistoryDestinationTime,
});
//キャンセルボタン
const mapDispatchToProps = (dispatch) => ({
  cancel: () => dispatch(cancel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
