import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export const ResettingEmail = () => {
  const errors = {
    emailError: " ",
  };

  const [email, setEmail] = useState(''),
    [errorMessage, setErrorMessage] = useState(errors),
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
        <Button variant="contained" color="primary" disabled={isDisabled} >再設定メールを送る</Button>
      </form>
    </React.Fragment>
  )
}