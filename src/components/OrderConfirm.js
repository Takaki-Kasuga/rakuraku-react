import React,{useState,useEffect, useCallback} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from '../firebase/firebase';
import { orderInfomation } from '../actions/index'

//テーブル
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//カード
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

//ラジオボタン
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//郵便番号から住所をサジェスト・カレンダー
import { TextField } from '@material-ui/core';

//ボタン
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


//イメージ
import image from '../img/2.jpg'

const OrderConfirm =()=>{
    
    console.log('OrderConfirmが発火')
    const dispatch = useDispatch();
    const orderState = useSelector((state)=>state.orderState);
    const selectedToppingState = useSelector((state)=>state.selectedToppingState)
    const toppingState = useSelector((state) => state.toppingState)
    const history = useHistory();

    const [destinationName, setDestinationName] = useState(''); 
    const [destinationEmail, setDestinationEmail] = useState(''); 
    const [destinationZipcode, setDestinationZipcode] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [destinationTel, setDestinationTel] = useState('');
    const [destinationPreDate, setDestinationPreDate] = useState('');
    const [destinationPreTime, setDestinationPreTime] = useState('')
    const [credit, setCreditCard] = useState('');

    const errorMessages = {
        destinationName:'',
        destinationEmail:'',
        destinationZipcode:'',
        destinationAddress:'',
        destinationTel:'',
        destinationPreDate:'',
        destinationPreTime:'',
    }
    //フォームの値が変わったときに発動させる関数を定義
    const destinationNameChange = useCallback((e)=>{
        setDestinationName(e.target.value);
    },[setDestinationName])
    if(!destinationName){
        errorMessages.destinationName ='名前を入力してください'
    }
    const destinationEmailChange = useCallback((e)=>{
        setDestinationEmail(e.target.value);
    },[setDestinationEmail])
    if(!destinationEmail){
        errorMessages.destinationEmail ='メールアドレスを入力してください'
        //indexOfは文字列から引数が見つからなかったら-1を返す
    }else if(destinationEmail.indexOf('@') === -1){
        errorMessages.destinationEmail='メールアドレスの形式が不正です'
    }
    const destinationZipcodeChange = useCallback((e)=>{
        setDestinationZipcode(e.target.value);
    },[setDestinationZipcode])

    if(!destinationZipcode){
        errorMessages.destinationZipcode ='郵便番号を入力してください'
    }else if(!destinationZipcode.match(/^[0-9]{3}-[0-9]{4}$/)){
        errorMessages.destinationZipcode='郵便番号の形式が不正です'
    }

    const destinationAddressChange = useCallback((e)=>{
        setDestinationAddress(e.target.value);
    },[setDestinationAddress])
    if(!destinationAddress){
        errorMessages.destinationAddress ='住所を入力してください'
    }
    const destinationTelChange = useCallback((e)=>{
        setDestinationTel(e.target.value);
    },[setDestinationTel])
    if(!destinationTel){
        errorMessages.destinationTel ='電話番号を入力してください'
    }else if(!destinationTel.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)){
        errorMessages.destinationTel='電話番号の形式が不正です'
    }
    const destinationPreDateChange = useCallback((e)=>{
        setDestinationPreDate(e.target.value);
    },[setDestinationPreDate])
    if(!destinationPreDate){
        errorMessages.destinationPreDate ='配達希望日を入力してください'
    }

    const destinationPreTimeChange = useCallback((e)=>{
        setDestinationPreTime(e.target.value);
    },[setDestinationPreTime])
    if(!destinationPreTime){
        errorMessages.destinationPreTime ='配達希望時間を入力してください'
    }

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    
    const getState = (state) => state.userIdState.login_user;

    // MaterialUIのスタイル
    const useStyles = makeStyles((theme)=>(
        {
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
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            textField: {
                marginLeft: theme.spacing(1),
                marginRight: theme.spacing(1),
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(3),
                width: 200,
            },
            textSet: {
                'text-align': 'left'
              },
              priceItemCenter: {
                display: 'block',
                'width': '30%',
                'margin': '0 auto',
                'margin-bottom': '30px',
              },
              setLeftText: {
                textAlign: 'left'
              },
            cardMediaStyle: {
                width: '250px',
              },
              toppingStyle: {
                width: '200px',
                textAlign: 'left'
              },
              itemPriceStyle: {
                width: '100px',
                textAlign: 'left'
              },
              error:{
                color:'red',
              }
        })
    );
    const classes = useStyles();

    //郵便番号から住所入力
    useEffect(() => {
        if (destinationZipcode) {
          fetch(`https://api.zipaddress.net/?zipcode=${destinationZipcode}`, {
            mode: 'cors',
          })
            .then((result) => {
              return result.json();
            })
            .then((result) => {
              setDestinationAddress(result.data?.fullAddress || '');
            });
        }
      }, [destinationZipcode]);
      
      const userIdState = useSelector((state) => state.userIdState)
      //firestoreからordersを取得し、storeのstateに保存
      useEffect(()=>{
        if(userIdState.login_user){
              firebase
                .firestore()
                .collection(`users/${userIdState.uid}/orders`)
                .get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        console.log(doc.id)
                        //オブジェクトの中身
                        console.log(doc.data())
                        const fetchData = doc.data()
                        //ordersの一意のid（ごちゃごちゃのやつ）にuniquedIdというプロパティ名を付けてfetchDateにくっつける
                        //uniqueIdはdeleteのときに必要
                        fetchData.uniqueId = doc.id
                        console.log(fetchData)
                        if (fetchData.status === 0){
                            console.log('ステータス0')
                        }
                        dispatch(orderInfomation(fetchData))
                    }
                );
          });
      }},[])
    
    function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
        return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
    }
    //state.orderStateの値（オブジェクト）をrowsに入れる
    const rows = [];
    orderState.forEach((order)=>{
        //注文確認画面なのでstatusが0の商品のみ取得
        if(order.status === 0){
            const fetchData2 = createData(
                { itemPath: order.imagePath,itemName: order.itemName},
                { itemPrice: order.itemPrice, itemCount: order.itemCount },
                order.toppingInfo,
                order.uniqueId,
                order.itemId,
            )
            rows.push(fetchData2)
        }
    })


  

  // 金額関連処理
  let everyToppingTotalPrice = 0
  let totalItemPrice = 0

  // 商品の合計金額の処理
  let totalToppingPrice = 0
  //rowsの中のオブジェクト（row）が0以外なら
  //rowsはordersの中のstatus:0のオブジェクトをつつむ配列
  //ordersのstatus:0のアイテム（注文確認画面に表示されているアイテム）
  //の合計金額を1つずつ取得しforEachで足していく
  if (rows.length !== 0) {
    rows.forEach((totalItem) => {
      totalItemPrice += totalItem.itemPriceAndCount.itemPrice * totalItem.itemPriceAndCount.itemCount
    })
  }
    return (
        <React.Fragment>
            {!rows.length ? <h2>カートに商品がありません</h2> :
            <div>
                <h2>注文確認</h2>
                <Paper className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">商品名</TableCell>
                                <TableCell align="right">商品個数と値段（税抜き）</TableCell>
                                <TableCell align="right">トッピングの値段（税抜き）</TableCell>
                                <TableCell align="right">小計</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">

                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            {row.itemInfo.itemName}
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
                                        className={classes.media}
                                        image={row.itemInfo.itemPath}
                                        title="Contemplative Reptile"
                                        />
                                    </Card>
                                </TableCell>

                                <TableCell align="right" className={classes.itemPriceStyle}>
                                    <p>金額:{Number(row.itemPriceAndCount.itemPrice).toLocaleString()}円</p>
                                    <p>個数：{row.itemPriceAndCount.itemCount}個</p>
                                </TableCell>

                                <TableCell align="right" className={classes.toppingStyle}>
                                    {/* everyToppingTotalPriceの初期化 */}
                                    {!row.toppingItem ? <spna style={{ display: 'none' }}></spna> :
                                    row.toppingItem.map((topping, index) => {
                                        everyToppingTotalPrice = 0
                                        return (
                                        <span key={index} style={{ display: 'none' }}></span>
                                        )
                                    })
                                    }
                                    {!row.toppingItem ? <p>0円</p> :
                                        row.toppingItem.map((topping, index) => {
                                        totalToppingPrice += topping.toppingPrice
                                        everyToppingTotalPrice += topping.toppingPrice
                                        return (
                                        <div key={index}>
                                            <p>
                                            {topping.toppigName}<br />：
                                            {Number(topping.toppingPrice).toLocaleString()}円</p>
                                        </div>
                                        )
                                        })
                                    }
                            </TableCell>

                                <TableCell align="right">
                                    <div>
                                        <p className={classes.textSet}>消費税：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice) * 0.1).toLocaleString()}円</p>
                                        <p className={classes.textSet}>金額：{Number((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice)}円<br/>（税込）</p>
                                        <p className={classes.textSet}>合計金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice) * 1.1).toLocaleString()}円<br />（税込）</p>
                                    </div>
                                </TableCell>

                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className={classes.priceItemCenter}>
                        <p className={classes.setLeftText}>合計金額：{(totalItemPrice + totalToppingPrice).toLocaleString()}円（税抜）</p>
                        <p className={classes.setLeftText}>消費税合計：{((totalItemPrice + totalToppingPrice) * 0.1).toLocaleString()}円</p>
                        <h3 style={{ color: 'red' }} className={classes.setLeftText}>合計金額：{Number(Number((totalItemPrice + totalToppingPrice)) + Number(((totalItemPrice + totalToppingPrice) * 0.1))).toLocaleString()}円（税込）</h3>
                    </div>
                </Paper>
            </div>
            }
            <div>
                <h2>お届け先情報</h2>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="name"
                    label="お名前"
                    style={{width:250}}
                    variant="outlined"
                    placeholder="楽々　楽子"
                    value={destinationName}
                    onChange={ destinationNameChange }
                    />
                    <div className={classes.error}>{errorMessages.destinationName}</div>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="destinationEmail"
                    label="メールアドレス"
                    style={{width:250}}
                    variant="outlined"
                    placeholder="XXX@XXXX"
                    value={destinationEmail}
                    onChange={ destinationEmailChange }
                    />
                    <div className={classes.error}>{errorMessages.destinationEmail}</div>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="destinationZipcode"
                    label="郵便番号"
                    style={{width:250}}
                    variant="outlined"
                    placeholder="XXX-XXXX"
                    value={destinationZipcode}
                    onChange={ destinationZipcodeChange }
                    />
                    <div className={classes.error}>{errorMessages.destinationZipcode}</div>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="destinationAddress"
                    label="住所"
                    style={{width:250}}
                    variant="outlined"
                    value={destinationAddress}
                    onChange={ destinationAddressChange }
                    />
                    <div className={classes.error}>{errorMessages.destinationAddress}</div>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="destinationTel"
                    label="電話番号"
                    style={{width:250}}
                    variant="outlined"
                    placeholder="XXX-XXXX-XXXX"
                    value={destinationTel}
                    onChange={ destinationTelChange }
                    />
                    <div className={classes.error}>{errorMessages.destinationTel}</div>
                </div>
                <div>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="配達希望日"
                            style={{width:250}}
                            type="date"
                            // defaultValue={new Date()}
                            className={classes.textField}
                            onChange={ destinationPreDateChange }
                            value={ destinationPreDate }
                            InputLabelProps={{
                            shrink: true,
                            }}
                        /><br/>
                        <div className={classes.error}>{errorMessages.destinationPreDate}</div>
                     </form>
                </div>
                <div style={{padding: 10}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">配達希望時間</FormLabel>
                        <RadioGroup row aria-label="destinationPreTime" name="" onChange={ destinationPreTimeChange }>
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
                        <div className={classes.error}>{errorMessages.setDestinationPreTime}</div>
                    </FormControl>
                </div>    
                <div style={{padding: 10}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">お支払い方法</FormLabel>
                        <RadioGroup
                            aria-label="paymentMethod"
                            // defaultValue="credit"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="daibiki" control={<Radio />} label="代金引換" />
                            <FormControlLabel value="credit" control={<Radio />} label="クレジットカード" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="credit"
                    label="クレジットカード番号"
                    variant="outlined"
                    placeholder="XXXX-XXXX-XXXX"
                    value={credit}
                    onChange={(e) => {
                        setCreditCard(e.target.value);
                    }}
                    />
                </div>
                <div> 
                    <Grid container alignItems="center" justify="center">
                        <Grid>
                            <Button variant="outlined" color="primary" onClick={() => history.push('/ordercomplete')}>この内容で注文する</Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </React.Fragment>
    )
}

export default OrderConfirm;