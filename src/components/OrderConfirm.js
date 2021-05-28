import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import image from '../img/1.jpg'
const OrderConfirm =()=>{
    return (
        <React.Fragment>
            <div>
                <h1>注文内容確認</h1>
                <ul>
                    <li>
                        <p>商品名item.name</p>
                        <img src={image}></img>
                        <p>商品サイズ：価格 item.price</p>
                        <p>商品個数 item.count</p>
                        <p>トッピング1名前 topping.name</p>
                        <p>トッピング1のサイズ：価格 topping.price 円</p>
                        <p>トッピング2の名前 topping.name</p>
                        <p>トッピング2のサイズ：価格 topping.price 円</p>
                        <p>消費税：smallTotalTax 円</p>
                        <p>小計：smallTotalPrice（税込み）</p>
                    </li>
                </ul>
                <p>消費税：totalTax</p>
                <p>ご注文合計金額：totalPice</p>
            </div>
            <div>
                <h2>お届け先情報</h2>
                <div>
                    <p>お名前 destinationName</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>メールアドレス destinationZipcode</p>
                    <input type="email"></input>
                </div>
                <div>
                    <p>郵便番号 destinationZipcode</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>住所 destinationAddress</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>電話番号 destinationTel</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>配達希望日 destinationPreDate</p>
                    <input type="date"></input>
                </div>
                <div>
                    <p>配達希望時間 destinationPreTime</p>
                    <p>ラジオボタン入れる</p>
                    {/* <label> */}
                        {/* <input type="radio" name="desitinationPreTime" value="10" checked>10時</input> */}
                        {/* <input type="radio" name="desitinationPreTime" value="11">11時</input>
                        <input type="radio" name="desitinationPreTime" value="12">12時</input>
                        <input type="radio" name="desitinationPreTime" value="13">13時</input>
                        <input type="radio" name="desitinationPreTime" value="14">14時</input>
                        <input type="radio" name="desitinationPreTime" value="15">15時</input>
                        <input type="radio" name="desitinationPreTime" value="16">16時</input>
                        <input type="radio" name="desitinationPreTime" value="17">17時</input>
                        <input type="radio" name="desitinationPreTime" value="18">18時</input> */}
                    {/* </label> */}
                </div>
                <div>
                    <p>支払い方法 destination</p>
                    <p>ラジオボタン</p>
                    <p>クレジットカート番号 creditcardNo</p>
                    <input type="text"></input>
                </div>
                <button>この内容で注文する</button>
            </div>
        </React.Fragment>
    )
}

export default OrderConfirm;