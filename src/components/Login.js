import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import {
  Link
} from 'react-router-dom';
import firebase from '../firebase/firebase';
import { useDispatch, useSelector } from "react-redux";
import { loginWithGoogle, setUserInfo } from "../actions/index.js";


export const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const getState = (state) => state;
  const stateContent = useSelector(getState);
  console.log('stateの中身です');
  console.log(stateContent);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserName(firebase.auth().currentUser.displayName);
        setUserEmail(firebase.auth().currentUser.email);
        const user_name = firebase.auth().currentUser.displayName;
        const user_email = firebase.auth().currentUser.email;
        const user_id = firebase.auth().currentUser.uid;
        dispatch(setUserInfo(user_id, user_name, user_email));
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