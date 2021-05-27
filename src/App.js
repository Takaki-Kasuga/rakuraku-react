import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './Head.js';
import Home from './Home.js';
import CartList from './CartList.js';
import Detail from './Detail.js';
import { ResettingEmail } from './components/ResettingEmail.js';
import { Login } from './components/Login.js';
import OrderComplete from 'OrderComplete.js';
import OrderConfirm from 'OrderConfirm.js';
import OrderHistory from 'OrderHistory.js';
import { RegisterEmail } from './components/RegisterEmail.js';
import TermOfUse from 'TermOfUse.js';
import UserAccount from 'UserAccount.js';

function App() {
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

