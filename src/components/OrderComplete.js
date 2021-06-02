import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const OrderComplete = () => {
   const history = useHistory();
    return (
      <React.Fragment>
        <h1 align="center">決済が完了しました。</h1>
        <p align="center">この度はご注文ありがとうございます。</p>
        <p align="center">ご注文内容は「注文履歴」からご確認ください。</p>
        <div align="center">
            <Button id="button" variant="contained" color="primary" onClick={() => history.push('/')}>
              トップ画面を表示する
            </Button>
        </div>
      </React.Fragment>
    );
}
