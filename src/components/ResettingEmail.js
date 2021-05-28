import React from 'react';
import { Button, TextField } from '@material-ui/core';

export const ResettingEmail = () => {
  return (
    <React.Fragment>
      <h2>パスワード再設定</h2>
      <p>パスワードの再設定メールを送信するメールアドレスを入力してください。</p>

      <form>
        <div>
          <label>
            Email:
          </label>
          <TextField />
        </div>
        <Button variant="contained" color="primary">再設定メールを送る</Button>
      </form>
    </React.Fragment>
  )
}