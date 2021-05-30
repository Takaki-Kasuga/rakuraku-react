import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, signIn } from "../actions/index.js";


export const Login = () => {
  const dispatch = useDispatch();
  const getRoutingJudge = useSelector((state) => state.routingJudge.routingJudge) //routingJudgeの確認用

  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const login = () => {
    dispatch(signIn(email, password))
  }

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
          <TextField value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>
            パスワード:
          </label>
          <TextField value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button variant="contained" color="primary" onClick={login}>ログイン</Button>
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