import React from "react";
import { Button } from "@material-ui/core";

export const OrderComplete = () => {
    return (
      <React.Fragment>
        <h1 align="center">決済が完了しました。</h1>
        <p align="center">この度はご注文ありがとうございます。</p>
        <p align="center">ご注文内容は「注文履歴」からご確認ください。</p>
        <div align="center">
          <a href="/" style={{ textDecoration: "none" }}>
            <Button id="button" variant="contained" color="primary">
              トップ画面を表示する
            </Button>
          </a>
        </div>
      </React.Fragment>
    );
}
