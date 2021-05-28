import React from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';

export const Login = () => {
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
        <Button variant="contained" color="primary">Googleでログイン</Button>
      </div>

      <div>
        <h3>Googleで新規登録はこちら</h3>
        <Button variant="contained" color="primary">Googleで新規登録</Button>
      </div>

    </React.Fragment>
  )
}