import React from "react";
import { Button } from "@material-ui/core";

export const OrderComplete = () => {
    return (
      <React.Fragment>
        <div>
          <h1>決済が完了しました。</h1>
          <p>この度はご注文ありがとうございます。</p>
          <p>ご注文内容は「注文履歴」からご確認ください。</p>
          <a href="/">
            <Button variant="contained" color="primary">
              トップ画面を表示する
            </Button>
          </a>
        </div>
      </React.Fragment>
    );
}
