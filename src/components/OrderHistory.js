import React from "react";
//ボタン
import { Button } from "@material-ui/core";
//使えるか分からないけどテーブル
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


export const OrderHistory = () => {
  return (
    <React.Fragment>
      <table border="1">
        <tr>
          <th>商品画像</th>
          <th>商品名</th>
          <th>商品価格</th>
          <th>トッピング名</th>
          <th>トッピング価格</th>
          <th>小計</th>
          <th>小計の消費税</th>
          <th>商品個数</th>
          <th>配達指定日</th>
        </tr>
        <tr>
          <td>商品画像が入る</td>
          <td>商品名が入る</td>
          <td>商品価格が入る</td>
          <td>トッピング名が入る</td>
          <td>トッピング価格が入る</td>
          <td>小計が入る</td>
          <td>小計の消費税が入る</td>
          <td>商品個数が入る</td>
          <td>配達指定日</td>
        </tr>
      </table>
      <button>キャンセル</button>
      <a href="/detail/:id">
        <button>この商品をもう一度注文</button>
      </a>
      <a href="/">
        <Button variant="contained" color="primary">
          メニューの一覧に戻る
        </Button>
      </a>
    </React.Fragment>
  );
};
