import React from "react";
import { Button } from "@material-ui/core";

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
            <button>発送済み</button>
            <button>キャンセル済み</button>
            <button>この商品をもう一度注文</button>
        <a href="/">
          <Button variant="contained" color="primary">
            メニューの一覧に戻る
          </Button>
        </a>
      </React.Fragment>
    );
};
