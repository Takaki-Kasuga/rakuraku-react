import { MicNone } from '@material-ui/icons';
import React from 'react';
import logo from '../img/header_logo.png'

const Header =()=>{
    return (
        <React.Fragment>
            <div>
                <a href="/"><img src={logo}/></a>
                <ul>
                    <li><a href="/useraccount">アカウント</a></li>
                    <li><a href="/login">ログイン</a></li>
                    <li><a href="cartlist">ショッピングカート</a></li>
                    <li><a href="orderhistory">注文履歴</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;