import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import firebase from './firebase/firebase'
import Header from './components/Header.js';
import { Home } from './components/Home';
import { CartList } from './components/CartList';
import { Detail } from './components/Detail';
import { ResettingEmail } from './components/ResettingEmail.js';
import { Login } from './components/Login.js';
import { OrderComplete } from './components/OrderComplete.js';
import OrderConfirm from './components/OrderConfirm.js';
import { OrderHistory } from './components/OrderHistory.js';
import { RegisterEmail } from './components/RegisterEmail.js';
import { TermOfUse } from './components/TermOfUse.js';
import UserAccount from './components/UserAccount.js';
import { orderInfomation, setUserInfo, deleteUserInfo } from './actions/index'


function App() {
  const userIdState = useSelector((state) => state.userIdState)
  const dispatch = useDispatch()

  // 画面描画時にオーダーの情報値を取ってる
  useEffect(() => {
    console.log('App.jsのonAuthStateChangedが発火')
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const user_name = firebase.auth().currentUser.displayName;
        const user_email = firebase.auth().currentUser.email;
        const user_id = firebase.auth().currentUser.uid;
        dispatch(setUserInfo(user_id, user_name, user_email));

        firebase
          .firestore()
          .collection(`users/${userIdState.uid}/orders`)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              console.log(doc.id)
              console.log(doc.data())
              const fetchData = doc.data()
              fetchData.uniqueId = doc.id
              console.log(fetchData)
              dispatch(orderInfomation(fetchData))
            }
            );
          });
      } else {
        console.log('ログイン情報を保持していません')
        dispatch(deleteUserInfo());
      }
    })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Link to='/termofuse'>利用規約</Link><br />
        <Link to='/resettingemail'>パスワード再設定</Link><br />
        <Link to='/registeremail'>ユーザー登録</Link><br />
        <Link to='/login'>ログイン</Link><br />
        <Link to='/useraccount'>アカウント</Link><br />
        <Link to='/ordercomplete'>完了</Link><br />
        <Link to='/orderhistory'>注文履歴</Link><br />
        <Link to='/orderconfirm'>注文確認</Link><br />
        <Link to='/cartlist'>ショッピングカート</Link><br />
        <Link to='/detail/100'>詳細画面</Link><br />
        <Link to='/'>トップページ</Link><br />

        <Switch>
          <Route path='/termofuse' exact component={TermOfUse} />
          <Route path='/resettingemail' exact component={ResettingEmail} />
          <Route path='/registeremail' exact component={RegisterEmail} />
          <Route path='/login' exact component={Login} />
          <Route path='/useraccount' exact component={UserAccount} />
          <Route path='/ordercomplete' exact component={OrderComplete} />
          <Route path='/orderhistory' exact component={OrderHistory} />
          <Route path='/orderconfirm' exact component={OrderConfirm} />
          <Route path='/cartlist' exact component={CartList} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

