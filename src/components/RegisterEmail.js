import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { signUp } from "../actions/index.js";

export const RegisterEmail = () => {
  const [username, setUsername] = useState(''),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const register = () => {
    dispatch(signUp(username, email, password, confirmPassword));
  }

  const clear = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }


  return (
    <React.Fragment>
      <h2>新規登録</h2>
      <p>登録を持って利用規約に同意したものとみなします。</p>
      <form>
        <div>
          <label>
            名前:
          </label>
          <TextField fullWidth={true} value={username} onChange={(e) => setUsername(e.target.value)} type={"text"} />
        </div>
        <div>
          <label>
            メールアドレス:
          </label>
          <TextField fullWidth={true} value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} />
        </div>
        <div>
          <label>
            パスワード(6文字以上):
          </label>
          <TextField fullWidth={true} value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} />
        </div>
        <div>
          <label>
            確認用パスワード:
          </label>
          <TextField fullWidth={true} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={"password"} />
        </div>
        <div>
          <Button variant="contained" color="primary" onClick={register}>登録</Button>
          <Button variant="contained" color="primary" onClick={clear}>クリア</Button>
        </div>
      </form>
    </React.Fragment>
  )
}