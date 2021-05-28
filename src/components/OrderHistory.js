import React from "react";
import { Button } from "@material-ui/core";

export const OrderHistory = () => {
    return (
      <React.Fragment>
        <div>
                <h1>注文履歴</h1>
                <li>
                    <img src=""></img>
                    <p>商品名</p>
                    <p>商品価格(税抜き)</p>
                    <p>トッピング名</p>
                    <p>トッピング価格</p>
                    <p>小計</p>
                    <p>小計の消費税</p>
                    <p>商品個数</p>
                    <p>配達指定日</p>
                    <button>もう一度注文する</button>
                    <button>キャンセル</button>
                    <button>発送済み</button>
                    <button>キャンセル済み</button>
                </li>
          <Button variant="contained" color="primary">メニューの一覧に戻る</Button>
        </div>
      </React.Fragment>
    );
};
