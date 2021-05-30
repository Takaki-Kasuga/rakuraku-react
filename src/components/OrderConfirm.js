import React,{useState,useEffect} from 'react';
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
    const userIdState = useSelector((state) => state.userIdState)
    console.log('OrderConfirmが発火')
    const dispatch = useDispatch();

    const [name, setName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [tel, setTel] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [credit, setCreditCard] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const history = useHistory();
    const getState = (state) => state.userIdState.login_user;
    const getState2 = (state)=>state;
    const stateContent = useSelector(getState2);

    console.log(stateContent.orderState)
    console.log(stateContent.orderState[0])

    useEffect(() => {
        if (zipCode) {
          fetch(`https://api.zipaddress.net/?zipcode=${zipCode}`, {
            mode: 'cors',
          })
            .then((result) => {
              return result.json();
            })
            .then((result) => {
              setAddress(result.data?.fullAddress || '');
            });
        }
      }, [zipCode]);
      
    useEffect(()=>{
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
                    dispatch(orderInfomation(fetchData))
                }
            );
          });
    },)

    // データリスト（テーブル）
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
        })
    );

    function createData(itemId,itemName,itemPath,itemPrice,itemCount,toppingId,toppingName,toppingPrice,smallTotalCount, smallTotalTax) {
        return { itemId,itemName,itemPath,itemPrice,itemCount,toppingId,toppingName,toppingPrice,smallTotalCount, smallTotalTax };
    }
    //state.orderArrayの中身を以下に入れたい。
    const orderArray = stateContent.orderState
    console.log(orderArray)
  const order = {
      itemId:stateContent.orderState.itemId,
      itemName:'あいう',
      itemPath:image,
      itemPrice:1500,
      itemCount:3,
      toppingId:0,
      toppingName:'コーラ',
      toppingPrice:200,
      smallTotalCount:2000,
      //this.itemPrice*this.itemCount+this.toppingPrice,
      smallTotalTax:200
      //this.smallTotalCount*0.1
  }
    let smallTotal = order.itemPrice*order.itemCount+order.toppingPrice;
    let smallTotalTax = smallTotal*0.1;
    let totalPrice = smallTotal;//実際にはsmallTotalをmapする
    let totalTax = totalPrice*0.1

  const rows = [
    createData(0,'ハワイアン・パラダイス',image,350,5,0,'トッピング１',200,200,2200),
    createData(
        order.itemId,order.itemName,order.itemPath,order.itemPrice,order.itemCount,order.toppingId,order.toppingName,order.toppingPrice,order.smallTotalCount,order.smallTotalTax
        ),
    createData(
        order.itemId,order.itemName,order.itemPath,order.itemPrice,order.itemCount,order.toppingId,order.toppingName,order.toppingPrice,order.smallTotalCount,order.smallTotalTax
        ),
  ];

  const classes = useStyles();
    return (
        <React.Fragment>
            <div>
                <h2>注文確認</h2>
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
                                    image={row.itemPath}
                                    title="Contemplative Reptile"
                                    />
                                </Card>
                            {/* <img src={row.name}></img> */}
                            </TableCell>
                            <TableCell align="right">
                                <p>M:{row.itemPrice}円</p>
                                <p>個数：{row.itemCount}個</p>
                            </TableCell>
                            <TableCell align="right">
                                <p>{row.toppingName}：{row.toppingPrice}円</p>
                                <p>{row.toppingName}：{row.toppingPrice}円</p>
                            </TableCell>
                            <TableCell align="right">
                                <p>消費税：{smallTotalTax}円</p>
                                <p>金額：{smallTotal}円<br/>（税込）</p>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>

                    <h4>ご注文合計金額</h4>
                    <p>消費税（10%）：{totalPrice}円</p>
                    <p>合計金額：{totalTax}円（税込）</p>
                </Paper>
            </div>
            <div>
                <h2>お届け先情報</h2>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="name"
                    label="お名前"
                    variant="outlined"
                    placeholder="楽々　楽子"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="email"
                    label="メールアドレス"
                    variant="outlined"
                    placeholder="XXX@XXXX"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="zipcode"
                    label="郵便番号"
                    variant="outlined"
                    placeholder="XXX-XXXX"
                    value={zipCode}
                    onChange={(e) => {
                        setZipCode(e.target.value);
                    }}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="address"
                    label="住所"
                    variant="outlined"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    />
                </div>
                <div style={{ padding: 10 }}>
                    <TextField
                    id="tel"
                    label="電話番号"
                    variant="outlined"
                    placeholder="XXX-XXXX-XXXX"
                    value={tel}
                    onChange={(e) => {
                        setTel(e.target.value);
                    }}
                    />
                </div>
                <div>
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            label="配達希望日"
                            type="date"
                            defaultValue={new Date()}
                            className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                     </form>
                </div>
                <div style={{padding: 10}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">配達希望時間</FormLabel>
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