import React, { useState, useCallback } from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link,
  useHistory
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, signIn } from "../actions/index.js";


export const Login = () => {
  const dispatch = useDispatch();
  const getRoutingJudge = useSelector((state) => state.routingJudge.routingJudge)

  const errors = {
    emailError: " ",
    passwordError: " ",
  };

  const [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [errorMessage, setErrorMessage] = useState(errors),
    [isDisabled, setIsDisabled] = useState(true);

  const isDisabledCheck = () => {
    if (errorMessage.emailError === "" && errorMessage.passwordError === "") {
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

  const inputPassword = (e) => {
    const new_value = e.target.value;
    setPassword(new_value);
    if (new_value === "") {
      errorMessage.passwordError = "パスワードを入力してください"
      isDisabledCheck();
    } else if (new_value.length < 6) {
      errorMessage.passwordError = "6文字未満です"
      isDisabledCheck();
    } else {
      errorMessage.passwordError = "";
      isDisabledCheck();
    }
  };

  const login = () => {
    localStorage.setItem('routingJudge', Number(getRoutingJudge));
    dispatch(signIn(email, password))
  }

  const googleLogin = () => {
    localStorage.setItem('routingJudge', Number(getRoutingJudge));
    dispatch(loginWithGoogle());
  }

  return (
    <React.Fragment>
      <h2>メールアドレスでログインする</h2>
      <form>
        <div>
          <label>
            メールアドレス:
          </label>
          <TextField value={email} type={"email"} onChange={inputEmail} />
          <div><span>{errorMessage.emailError}</span></div>
        </div>
        <div>
          <label>
            パスワード:
          </label>
          <TextField value={password} type={"password"} onChange={inputPassword} />
          <div><span>{errorMessage.passwordError}</span></div>
        </div>
        <Button variant="contained" color="primary" onClick={login} disabled={isDisabled}>ログイン</Button>
      </form>

      <div>
        <Link to='/registeremail'>新規ユーザー登録はこちら</Link>
      </div>

      <div>
        <Link to='/resettingemail'>パスワード再設定はこちら</Link>
      </div>

      <div>
        <h3>Googleでログインする</h3>
        <Button variant="contained" color="primary" onClick={googleLogin}>Googleでログイン</Button>
      </div>

    </React.Fragment >
  )
}