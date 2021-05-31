import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import firebase from '../firebase/firebase';

export const ResettingEmail = () => {
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
      console.log('空です')
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

  const passwordResetting = () => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(result => {
        setResetMessage("再設定メールをお送り致しました。約3秒後にトップページに自動遷移致します。遷移しない場合は以下のボタンをクリックしてください。");
      }).catch(error => {
        setResetMessage("メール送信に失敗しました。正しいメールアドレスをご入力ください。");
      })
  }

  return (
    <React.Fragment>
      <h2>パスワード再設定</h2>
      <p>パスワードの再設定メールを送信するメールアドレスを入力してください。</p>

      <form>
        <div>
          <label>
            Email:
          </label>
          <TextField fullWidth={true} value={email} type={"email"} onChange={inputEmail} />
          <div><span>{errorMessage.emailError}</span></div>
        </div>
        <Button variant="contained" color="primary" disabled={isDisabled} onClick={passwordResetting}>再設定メールを送る</Button>
        <div><span>{resetMessage}</span></div>
        <Button variant="contained" color="primary" onClick={() => console.log('トップページに戻る処理入れる')}>トップページへ</Button>
      </form>
    </React.Fragment>
  )
}