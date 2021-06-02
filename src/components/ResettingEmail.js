import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import firebase from '../firebase/firebase';
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
  },
}));

export const ResettingEmail = () => {
  const classes = useStyles();
  const history = useHistory();

  const errors = {
    emailError: " ",
  };

  const [email, setEmail] = useState(''),
    [errorMessage, setErrorMessage] = useState(errors),
    [resetMessage, setResetMessage] = useState(''),
    [isDisabled, setIsDisabled] = useState(true);

  const isDisabledCheck = () => {
    if (errorMessage.emailError === "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const inputEmail = (e) => {
    const new_value = e.target.value;
    setEmail(new_value)
    if (new_value === "") {
      errorMessage.emailError = "メールアドレスを入力してください"
      isDisabledCheck();
    } else if (new_value.indexOf("@") == -1) {
      errorMessage.emailError = "メールアドレスの形式が不正です"
      isDisabledCheck();
    } else {
      errorMessage.emailError = "";
      isDisabledCheck();
    }
  };

  const goHome = async () => {
    let promise = new Promise(resolve => {
      window.setTimeout(() => resolve('/'), 3000);
    });

    let result = await promise;
    history.push(result);
  }

  const passwordResetting = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(result => {
        setResetMessage("再設定メールをお送り致しました。約3秒後にトップページに自動遷移致します。遷移しない場合は以下のボタンをクリックしてください。");
        goHome();
      }).catch(error => {
        setResetMessage("メール送信に失敗しました。正しいメールアドレスをご入力ください。");
      })
  }

  return (
    <React.Fragment>
      <div style={{ display: 'block', width: '650px', margin: '0 auto' }}>
        <h2 align="center">パスワード再設定</h2>
        <p align="center">
          パスワードの再設定メールを送信するメールアドレスを入力してください。
      </p>

        <form>
          <div style={{ display: 'block', marginBottom: '20px' }}>
            <label>Email:</label>
            <TextField
              className={classes.textField}
              style={{ margin: 8 }}
              value={email}
              type={"email"}
              onChange={inputEmail}
              style={{ width: '100%', }}
            />
            <div>
              <span>{errorMessage.emailError}</span>
            </div>
          </div>
          <div align="center" style={{ display: 'block', marginBottom: '20px', }}>
            <Button
              variant="contained"
              color="primary"
              disabled={isDisabled}
              onClick={passwordResetting}
            >
              再設定メールを送る
          </Button>
          </div>
          <div>
            <span>{resetMessage}</span>
          </div>
          <div align="center" style={{ display: 'block', marginBottom: '20px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/")}
            >
              トップページへ
          </Button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}