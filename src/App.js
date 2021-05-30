import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import { useState, useEffect } from 'react'
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
import { orderInfomation, setUserInfo, deleteUserInfo, deleteAllOrder } from './actions/index'
import { ReorderRounded } from "@material-ui/icons";

const getState = (state) => state.userIdState.login_user;

function App() {
  const userIdState = useSelector((state) => state.userIdState)
  const getRoutingJudge = useSelector((state) => state.routingJudge.routingJudge)
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

  const stateContent = useSelector(getState);
  const [loginUser, setLoginUser] = useState(false);

  useEffect(() => {
    setLoginUser(stateContent);
  }, [stateContent])

  const LoginBranch = () => {
    if (loginUser === true && getRoutingJudge === 1) {
      // dispatch(deleteAllOrder())
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <Redirect to="/orderconfirm" />
          </Route>
          <Route path='/login' exact>
            <Redirect to="/orderconfirm" />
          </Route>
          <Route path='/useraccount' exact>
            <UserAccount />
          </Route>
        </React.Fragment>
      )
    } else if (loginUser === true && getRoutingJudge === 0) {
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <Redirect to="/" />
          </Route>
          <Route path='/login' exact>
            <Redirect to="/" />
          </Route>
          <Route path='/useraccount' exact>
            <UserAccount />
          </Route>
        </React.Fragment>
      )
    } else if (loginUser === false) {
      return (
        <React.Fragment>
          <Route path='/registeremail' exact>
            <RegisterEmail />
          </Route>
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/useraccount' exact>
            <Redirect to="/" />
          </Route>
        </React.Fragment>
      )
    }
  }

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
          <Route path='/resettingemail' exact component={ResettingEmail} />
          <Route path='/termofuse' exact component={TermOfUse} />
          <Route path='/ordercomplete' exact component={OrderComplete} />
          <Route path='/orderhistory' exact component={OrderHistory} />
          <Route path='/orderconfirm' exact component={OrderConfirm} />
          <Route path='/cartlist' exact component={CartList} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/" component={Home} />
          <LoginBranch />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

