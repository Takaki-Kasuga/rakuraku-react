import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
  },
}));
export const RegisterEmail = () => {
  const classes = useStyles();
  const history = useHistory()
  const handleLink = path => history.push(path)

  const errors = {
    nameError: " ",
    emailError: " ",
    passwordError: " ",
    confirmPasswordError: " "
  };

  const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [errorMessage, setErrorMessage] = useState(errors),
    [isDisabled, setIsDisabled] = useState(true);

  const dispatch = useDispatch();
  const getRoutingJudge = useSelector((state) => state.routingJudge.routingJudge);

  const register = () => {
    localStorage.setItem('routingJudge', Number(getRoutingJudge));
    dispatch(signUp(username, email, password, confirmPassword));
  }


  const isDisabledCheck = () => {
    if (errorMessage.nameError === "" && errorMessage.emailError === "" && errorMessage.passwordError === "" && errorMessage.confirmPasswordError === "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  const clear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    errorMessage.nameError = "名前を入力してください"
    errorMessage.emailError = "メールアドレスを入力してください"
    errorMessage.passwordError = "パスワードを入力してください"
    errorMessage.confirmPasswordError = "確認用パスワードを入力してください"
    isDisabledCheck();
  }

  const inputName = (e) => {
    const new_value = e.target.value;
    setUsername(new_value)
    if (new_value === "") {
      errorMessage.nameError = "名前を入力してください"
      isDisabledCheck();
    } else {
      errorMessage.nameError = "";
      isDisabledCheck();
    }
  };

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

  const inputConfirmPassword = (e) => {
    const new_value = e.target.value;
    setConfirmPassword(new_value);
    if (new_value === "") {
      errorMessage.confirmPasswordError = "確認用パスワードを入力してください"
      isDisabledCheck();
    } else if (new_value.length < 6) {
      errorMessage.confirmPasswordError = "6文字未満です"
      isDisabledCheck();
    } else if (new_value !== password) {
      errorMessage.confirmPasswordError = "パスワードを一致させてください"
      isDisabledCheck();
    } else {
      errorMessage.confirmPasswordError = "";
      isDisabledCheck();
    }
  };


  return (
    <React.Fragment>
      <h2 align="center">新規登録</h2>
      <p align="center">登録を持って<span style={{ fontWeight: 'bold', cursor: 'pointer' }} onClick={() => { handleLink('/termofuse') }}>利用規約</span>に同意したものとみなします。</p>
      <form style={{ display: 'block', width: '650px', margin: '0 auto' }}>
        <div style={{ display: 'block', marginBottom: '20px' }}>
          <label>名前:</label>
          <TextField
            fullWidth={true}
            value={username}
            onChange={inputName}
            type={"text"}
          />
          <div>
            <span>{errorMessage.nameError}</span>
          </div>
        </div>
        <div style={{ display: 'block', marginBottom: '20px' }}>
          <label>メールアドレス:</label>
          <TextField
            fullWidth={true}
            value={email}
            type={"email"}
            onChange={inputEmail}
          />
          <div>
            <span>{errorMessage.emailError}</span>
          </div>
        </div>
        <div style={{ display: 'block', marginBottom: '20px' }}>
          <label>パスワード(6文字以上):</label>
          <TextField
            fullWidth={true}
            className={classes.textField}
            value={password}
            type={"password"}
            onChange={inputPassword}
            style={{ width: '100%' }}
          />
          <div>
            <span>{errorMessage.passwordError}</span>
          </div>
        </div>
        <div style={{ display: 'block', marginBottom: '20px' }}>
          <label>確認用パスワード:</label>
          <TextField
            fullWidth={true}
            value={confirmPassword}
            type={"password"}
            onChange={inputConfirmPassword}
          />
          <div>
            <span>{errorMessage.confirmPasswordError}</span>
          </div>
        </div>
        <div align="center" style={{ display: 'block', marginBottom: '20px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={register}
            disabled={isDisabled}
          >
            登録
          </Button>
          <br />
          <br />
          <div align="center">
            <Button variant="contained" color="primary" onClick={clear}>
              クリア
            </Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}