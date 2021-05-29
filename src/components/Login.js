import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle } from "../actions/index.js";


export const Login = () => {
  const dispatch = useDispatch();

  const getState = (state) => state;
  const stateContent = useSelector(getState);
  console.log('stateの中身です');
  console.log(stateContent);

  const googleLogin = () => {
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
          <TextField />
        </div>
        <div>
          <label>
            パスワード:
          </label>
          <TextField />
        </div>
        <Button variant="contained" color="primary">ログイン</Button>
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