import React from 'react';

//テーブル
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//ラジオボタン
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//ボタン
import Button from '@material-ui/core/Button';

//カード
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

//イメージ
import image from '../img/2.jpg'

const OrderConfirm =()=>{
    // データリスト（テーブル）
    const useStyles = makeStyles({
        root: {
        width: '100%',
        overflowX: 'auto',
        },
        table: {
        minWidth: 650,
        },
        // カード
        card: {
        maxWidth: '200px',
        },
        media: {
        height: 200,
        backgroundSize: 'contain'
        },
    });

    function createData(id,itemName,image, itemCount, itemPrice, toppingName,toppingPrice,smallTax, smallCount) {
        return { id,itemName,image, itemCount, itemPrice, toppingName,toppingPrice, smallTax,smallCount };
    }

  const rows = [
    createData(0,'ハワイアン・パラダイス',image,5,'M:350円','トッピング１',200,200,2200),
    createData(1,'https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 159, 6.0, 24, 4.0),
    createData(2,'https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 237, 9.0, 37, 4.3),
  ];

  const classes = useStyles();


    return (
        <React.Fragment>
            <div>
                <h1>注文確認</h1>
            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/* <tableCell>id</tableCell> */}
                        <TableCell align="center">商品名</TableCell>
                        <TableCell align="right">商品個数と値段（税抜き）</TableCell>
                        <TableCell align="right">トッピングの値段（税抜き）</TableCell>
                        <TableCell align="right">金額</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    {row.itemName}
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                className={classes.media}
                                image={row.image}
                                title="Contemplative Reptile"
                                />
                            </Card>
                        {/* <img src={row.name}></img> */}
                        </TableCell>
                        <TableCell align="right">
                            <p>M:{row.itemPrice}円</p>
                            <p>個数{row.itemCount}個</p>
                        </TableCell>
                        <TableCell align="right">
                            <p>{row.toppingName}：{row.toppingPrice}円</p>
                            <p>{row.toppingName}：{row.toppingPrice}円</p>
                        </TableCell>
                        <TableCell align="right">
                            <p>消費税：{row.smallTax}円</p>
                            <p>金額：{row.smallCount}円（税込）</p>
                        </TableCell>
                            {/* <TableCell align="right"><Button variant="outlined" color="secondary">
                            削除
                            </Button>
                            </TableCell> */}
                    </TableRow>
                    ))}
                </TableBody>
                </Table>

                <h4>合計金額</h4>
                <p>消費税合計：</p>
                <p>合計金額：（税込）</p>
            </Paper>
            </div>

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
                    <FormControl component="fieldset">
                        <FormLabel component="legend">配達希望時間 destinationPreTime</FormLabel>
                        <RadioGroup row aria-label="destinationPreTime" name="" defaultValue="18">
                            <FormControlLabel value="10" control={<Radio />} label="10時" labelPlacement="end"/>
                            <FormControlLabel value="11" control={<Radio />} label="11時" labelPlacement="end"/>
                            <FormControlLabel value="12" control={<Radio />} label="12時" labelPlacement="end"/>
                            <FormControlLabel value="13" control={<Radio />} label="13時" labelPlacement="end"/>
                            <FormControlLabel value="14" control={<Radio />} label="14時" labelPlacement="end"/>
                            <FormControlLabel value="15" control={<Radio />} label="15時" labelPlacement="end"/>
                            <FormControlLabel value="16" control={<Radio />} label="16時" labelPlacement="end"/>
                            <FormControlLabel value="17" control={<Radio />} label="17時" labelPlacement="end"/>
                            <FormControlLabel value="18" control={<Radio />} label="18時" labelPlacement="end"/>
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