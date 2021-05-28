import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import firebase from '../firebase/firebase';
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../actions/index.js";


export const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(firebase.auth().currentUser.displayName);
        setUserEmail(firebase.auth().currentUser.email);
      } else {
        console.log('userはログインしていません');
        setUserName('');
        setUserEmail('');
      }
    })
  }, []);

  return (
    <React.Fragment>
      <h2>メールアドレスでログインする</h2>
      <p> ログイン中ユーザー: {userName}</p>
      <p> ユーザーのEmail: {userEmail}</p>
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
        <Button variant="contained" color="primary" onClick={() => { dispatch(loginWithGoogle()) }}>Googleでログイン</Button>
      </div>

    </React.Fragment >
  )
}