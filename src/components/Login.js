import React from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import firebase from '../firebase/firebase';


export const Login = () => {
  const handleLogin = () => {
    console.log('やあ');
    // props.loginWithGoogle();
  };

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
        <Button variant="contained" color="primary" onClick={handleLogin}>ログイン</Button>
      </form>

      <div>
        <Link to='/registeremail'>新規ユーザー登録はこちら</Link>
      </div>

      <div>
        <Link to='/resettingemail'>パスワード再設定はこちら</Link>
      </div>

      <div>
        <h3>Googleでログインする</h3>
        <Button variant="contained" color="primary">Googleでログイン</Button>
      </div>

    </React.Fragment>
  )
}