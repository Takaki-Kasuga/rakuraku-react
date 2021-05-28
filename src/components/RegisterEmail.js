import React from 'react';
import { Button, TextField } from '@material-ui/core';

export const RegisterEmail = () => {
  return (
    <React.Fragment>
      <h2>新規登録</h2>
      <p>登録を持って利用規約に同意したものとみなします。</p>
      <form>
        <div>
          <label>
            名前:
          </label>
          <TextField />
        </div>
        <div>
          <label>
            メールアドレス:
          </label>
          <TextField />
        </div>
        <div>
          <label>
            パスワード(6文字以上):
          </label>
          <TextField />
        </div>
        <div>
          <label>
            確認用パスワード:
          </label>
          <TextField />
        </div>
        <div>
          <Button variant="contained" color="primary">登録</Button>
          <Button variant="contained" color="primary">クリア</Button>
        </div>
      </form>
    </React.Fragment>
  )
}