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
                    {/* <FormControl component="fieldset">
                        <FormLabel component="legend">配達希望時間</FormLabel>
                        <RadioGroup
                            aria-label="destinationPreTime"
                            defaultValue="18"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="10" control={<Radio />} label="10時" />
                            <FormControlLabel value="11" control={<Radio />} label="11時" />
                            <FormControlLabel value="12" control={<Radio />} label="12時" />
                            <FormControlLabel value="13" control={<Radio />} label="13時" />
                            <FormControlLabel value="14" control={<Radio />} label="14時" />
                            <FormControlLabel value="15" control={<Radio />} label="15時" />
                            <FormControlLabel value="16" control={<Radio />} label="16時" />
                            <FormControlLabel value="17" control={<Radio />} label="17時" />
                            <FormControlLabel value="18" control={<Radio />} label="18時" />
                        </RadioGroup>
                    </FormControl> */}
                    <FormControl component="fieldset">
                        <FormLabel component="legend">labelPlacement</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
                            <FormControlLabel
                            value="top"
                            control={<Radio />}
                            label="Top"
                            labelPlacement="top"
                            />
                            <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start"
                            />
                            <FormControlLabel
                            value="bottom"
                            control={<Radio />}
                            label="Bottom"
                            labelPlacement="bottom"
                            />
                            <FormControlLabel value="end" control={<Radio />} label="End" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">お支払い方法 paymentMethod</FormLabel>
                        <RadioGroup
                            aria-label="paymentMethod"
                            // defaultValue="credit"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="daibiki" control={<Radio />} label="代金引換" />
                            <FormControlLabel value="credit" control={<Radio />} label="クレジットカード" />
                        </RadioGroup>
                    </FormControl>
                    <p>クレジットカート番号 creditcardNo</p>
                    <input type="text"></input>
                </div>
                <button>この内容で注文する</button>
            </div>
        </React.Fragment>
    )
}

export default OrderConfirm;