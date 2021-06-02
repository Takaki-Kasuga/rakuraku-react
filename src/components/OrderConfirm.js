import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from '../firebase/firebase';
import { orderInfomation, setOrderItems, orderForCartInfomation, items, toppings, deleteAllOrder, updateOrderItems, orderUniqueId, deleteUniqueId, deleteAllOrderItems } from '../actions/index'

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

//セレクト
import { Select, MenuItem } from '@material-ui/core';

//ボタン
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const OrderConfirm = () => {
    const dispatch = useDispatch();
    const orderState = useSelector((state) => state.orderState);
    const toppingState = useSelector((state) => state.toppingState)
    const orderForCartItemArray = useSelector((state) => state.orderForCartState) //商品情報取得
    const orderItemsArray = useSelector((state) => state.setOrderItems) //カート情報取得。注文確定後空にする。
    const history = useHistory();
    const handleLink = path => history.push(path);

    const errors = {
        errorName: ' ',
        errorEmail: ' ',
        errorZipcode: ' ',
        errorAddress: ' ',
        errorTel: ' ',
        errorPreTime: ' ',
        errorPayMethod: ' ',
        errorCreditCardNum: ''
    }

    const [destinationName, setDestinationName] = useState('');
    const [destinationEmail, setDestinationEmail] = useState('');
    const [destinationZipcode, setDestinationZipcode] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [destinationTel, setDestinationTel] = useState('');
    const [destinationPreDate, setDestinationPreDate] = useState('');
    const [destinationPreTime, setDestinationPreTime] = useState('');
    const [destinationPayMethod, setDestinationPayMethod] = useState('');
    const [creditCardNum, setCreditCardNum] = useState('');
    const [errorMessages, setErrorMessages] = useState(errors);
    const [isDisabled, setIsDisabled] = useState(true);
    const [creditPay, setCreditPay] = useState(false);

    const [nameJudge, setNameJudge] = useState(true);
    const [emailJudge, setEmailJudge] = useState(true);
    const [zipCodeJudge, setZipCodeJudge] = useState(true);
    const [addressJudge, setAddressJudge] = useState(true);
    const [telJudge, setTelJudge] = useState(true);
    const [dateJudge, setDateJudge] = useState(true);
    const [timeJudge, setTimeJudge] = useState(true);
    const [payMethodsJudge, setPayMethodsJudge] = useState(true);
    const [creditJudge, setCreditJudge] = useState(true);


    const clear = () => {
        setDestinationName('');
        setDestinationEmail('');
        setDestinationZipcode('');
        setDestinationAddress('');
        setDestinationTel('');
        setDestinationPreDate('');
        setDestinationPreTime('');
        setDestinationPayMethod('');
        setDestinationPayMethod('');
        setCreditPay(false);
        errorMessages.errorName = '名前を入力してください';
        errorMessages.errorEmail = 'メールアドレスを入力してください';
        errorMessages.errorZipcode = '郵便番号を入力してください';
        errorMessages.errorAddress = '住所を入力してください';
        errorMessages.errorTel = '電話番号を入力してください';
        errorMessages.destinationPreDate = '配達希望日を入力してください'
    }

    // //フォームの値が変わったときに発動させる関数を定義
    //名前
    const destinationNameChange = (e) => {
        setDestinationName(e.target.value);
        const new_value = e.target.value;
        if (!new_value) {
            errorMessages.errorName = '名前を入力してください'
            setNameJudge(true);
        } else {
            errorMessages.errorName = ''
            setNameJudge(false);
        }
    }

    //メールアドレス
    const destinationEmailChange = (e) => {
        setDestinationEmail(e.target.value);
        const new_value = e.target.value;
        if (!new_value) {
            errorMessages.errorEmail = 'メールアドレスを入力してください'
            //     //indexOfは文字列から引数が見つからなかったら-1を返す
            setEmailJudge(true);
        } else if (new_value.indexOf('@') === -1) {
            errorMessages.errorEmail = 'メールアドレスの形式が不正です'
            setEmailJudge(true);
        } else {
            errorMessages.errorEmail = '';
            setEmailJudge(false);
        }
    }



    //郵便番号
    const destinationZipcodeChange = (e) => {
        setDestinationZipcode(e.target.value);
        const new_value = e.target.value;
        if (!new_value) {
            errorMessages.errorZipcode = '郵便番号を入力してください'
            setZipCodeJudge(true)
        } else if (!new_value.match(/^[0-9]{3}-[0-9]{4}$/)) {
            errorMessages.errorZipcode = '郵便番号の形式が不正です'
            setZipCodeJudge(true)
        } else {
            errorMessages.errorZipcode = ''
            setZipCodeJudge(false)
            setAddressJudge(false)
        }
    }

    //住所
    const destinationAddressChange = (e) => {
        setDestinationAddress(e.target.value);
        const new_value = e.target.value;
        if (!new_value) {
            errorMessages.errorAddress = '住所を入力してください'
            setAddressJudge(true)
        } else {
            errorMessages.errorAddress = ''
            setAddressJudge(false)
        }
    }

    //電話番号
    const destinationTelChange = (e) => {
        setDestinationTel(e.target.value);
        const new_value = e.target.value;
        if (!new_value) {
            errorMessages.errorTel = '電話番号を入力してください'
        } else if (!new_value.match(/^0\d{1,4}-\d{1,4}-\d{3,4}$/)) {
            errorMessages.errorTel = '電話番号の形式が不正です'
            setTelJudge(true)
        } else {
            errorMessages.errorTel = ''
            setTelJudge(false)
        }
    }

    //配達希望日
    const destinationPreDateChange = (e) => {
        setDestinationPreDate(e.target.value);
        setDateJudge(false)
    }

    const DateTime = () => {
        let datedate = new Date(destinationPreDate);
        let plusHour = destinationPreTime * 60 * 60 * 1000; //des〜が1なら＋1時間のミリ秒＝10時のミリ秒

        let makeDateTime = datedate.getTime() + plusHour
        let dateTime = new Date(makeDateTime)

        let date = new Date();//今日

        if (!(destinationPreDate && destinationPreTime)) {
            errorMessages.errorPreTime = '配達日時を入力して下さい'
        } else if (dateTime < date) {
            errorMessages.errorPreTime = '指定日時を既に過ぎています'
        } else if (dateTime - date < 3 * 60 * 60 * 1000) {
            errorMessages.errorPreTime = '今から3時間以上後の日時をご入力ください'
        } else {
            errorMessages.errorPreTime = ''
        }
    }

    if (!destinationPreDate) {
        errorMessages.destinationPreDate = '配達希望日を入力してください'
        // setDateJudge(true)
    } else {
        errorMessages.destinationPreDate = ''
        DateTime();
    }

    //配達希望時間
    if (!destinationPreTime) {
        errorMessages.errorPreTime = '配達日時を入力して下さい'
    } else {
        errorMessages.errorPreTime = ''
        DateTime();
    }

    const destinationPreTimeChange = (e) => {
        setDestinationPreTime(e.target.value);
        setTimeJudge(false);
    }

    //支払い方法

    const destinationPayMethodChange = (e) => {
        const new_value = Number(e.target.value)
        setDestinationPayMethod(new_value);
        if (new_value === 1) {
            errorMessages.errorCreditCardNum = ''
            setPayMethodsJudge(false)
        } else if (new_value === 2) {
            errorMessages.errorCreditCardNum = 'カード番号を入力してください'
            setPayMethodsJudge(true)
        }
    }

    //クレカ番号
    const creditCardNumChange = (e) => {
        setCreditCardNum(e.target.value);
        const new_value = e.target.value;
        console.log(typeof new_value)
        if (!new_value) {//クレカはもともと値入っている
            console.log('カード番号について！')
            errorMessages.errorCreditCardNum = 'カード番号を入力してください'
            setCreditJudge(true)
        } else if (!(new_value.match(/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/))) {
            errorMessages.errorCreditCardNum = 'クレジット番号を正しく入力してください'
            setCreditJudge(true)
        } else {
            errorMessages.errorCreditCardNum = ''
            setCreditJudge(false)
            setPayMethodsJudge(false)
        }
    }

    const getState = (state) => state.userIdState.login_user;

    // MaterialUIのスタイル
    const useStyles = makeStyles((theme) => (
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
            error: {
                color: 'red',
            },
            title: {
                textAlign: 'center',
            },
            form: {
                textAlign: 'center',
                // width: 300
            },
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
    const location = useLocation();

    useEffect(() => {
        firebase
            .firestore()
            .collection(`topping/`)
            .get()
            .then((snapshot) => {
                const toppingArray = []
                snapshot.forEach((doc) => {
                    toppingArray.push(doc.data())
                })
                dispatch(toppings(toppingArray[0].array))
                firebase
                    .firestore()
                    .collection(`items/`)
                    .get()
                    .then((snapshot) => {
                        const itemArray = []
                        snapshot.forEach((doc) => {
                            itemArray.push(doc.data())
                        })
                        dispatch(items(itemArray))
                        dispatch(orderForCartInfomation(itemArray))
                    });
                if (userIdState.login_user) {
                    firebase
                        .firestore()
                        .collection(`users/${userIdState.uid}/orders`)
                        .get()
                        .then((snapshot) => {
                            snapshot.forEach((doc) => {
                                //オブジェクトの中身
                                const fetchData = doc.data()
                                //ordersの一意のid（ごちゃごちゃのやつ）にuniquedIdというプロパティ名を付けてfetchDateにくっつける
                                //uniqueIdはdeleteのときに必要
                                fetchData.uniqueId = doc.id
                                if (fetchData.status === 0) {
                                    let { orderItems } = fetchData
                                    dispatch(orderInfomation(orderItems))
                                    dispatch(setOrderItems(orderItems))
                                }
                            }
                            );
                        });
                }
            });
    }, [])

    //firestoreからordersを取得し、storeのstateに保存
    useEffect(() => {
        firebase
            .firestore()
            .collection(`cache/`)
            .get()
            .then((snapshot) => {
                let id = null
                let data = null
                snapshot.forEach((doc) => {
                    id = doc.id
                    data = doc.data()
                })
                if (userIdState.login_user) {
                    firebase
                        .firestore()
                        .collection(`users/${userIdState.uid}/orders`)
                        .add(data)
                        .then((snapshot) => {
                            // addすることに成功したら。
                            firebase
                                .firestore()
                                .collection(`users/${userIdState.uid}/orders`)
                                .get()
                                .then((snapshot) => {
                                    snapshot.forEach((doc) => {
                                        //オブジェクトの中身
                                        const fetchData = doc.data()
                                        //ordersの一意のid（ごちゃごちゃのやつ）にuniquedIdというプロパティ名を付けてfetchDateにくっつける
                                        //uniqueIdはdeleteのときに必要
                                        fetchData.uniqueId = doc.id
                                        if (fetchData.status === 0) {
                                            const { orderItems } = fetchData
                                            dispatch(orderInfomation(orderItems))
                                            dispatch(setOrderItems(orderItems))
                                        }
                                        if (doc.data().status === 0) {
                                            dispatch(updateOrderItems(doc.data().orderItems))
                                            dispatch(orderUniqueId(doc.id))
                                        }
                                    }
                                    );
                                });
                        });
                }
                firebase
                    .firestore()
                    .collection(`cache/`)
                    .doc(id)
                    .delete()
                    .then((snapshot) => {
                        console.log(`cache/データの削除を完成させました。`)
                    });
            })
            .catch(() => {
                console.log('キャッシュデータが存在しません')
            });
    }, [])




    function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
        return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
    }
    //state.orderStateの値（オブジェクト）をrowsに入れる
    const rows = [];
    orderItemsArray.forEach((order) => {
        const filterObject = orderForCartItemArray.find(element => element.id === order.itemId)
        //注文確認画面なのでstatusが0の商品のみ取得

        const fetchData2 = createData(
            { itemPath: filterObject.imagePath, itemName: filterObject.name },
            { itemPrice: order.itemPrice, itemCount: order.itemCount },
            order.toppingInfo,
            order.uniqueId,
            order.itemId,
        )
        rows.push(fetchData2)
    })

    const orderUniqueIdState = useSelector((state) => state.orderUniqueIdState)
    const addDestination = () => {
        firebase
            .firestore()
            .collection(`users/${userIdState.uid}/orders/`)
            .doc(orderUniqueIdState)
            .update({
                destinationName: destinationName,
                destinationEmail: destinationEmail,
                destinationZipcode: destinationZipcode,
                destinationAddress: destinationAddress,
                destinationTel: destinationTel,
                destinationPreDate: destinationPreDate,
                destinationPreTime: destinationPreTime,
                destinationPayMethod: destinationPayMethod,
                creditcardNo: creditCardNum,
                status: destinationPayMethod,
            })
            .then(() => {
                console.log('成功しました。')
                dispatch(deleteAllOrderItems())
                firebase
                    .firestore()
                    .collection(`users/${userIdState.uid}/orders`)
                    .get()
                    .then((snapshot) => {
                        console.log('orederの情報を取ってくる。')
                        snapshot.forEach((doc) => {
                            console.log(doc.id)
                            console.log(doc.data())
                            const fetchData = doc.data()
                            fetchData.uniqueId = doc.id
                            console.log(fetchData)
                            dispatch(orderInfomation(fetchData))
                            // ステータスが0のオーダー情報のみ取得して各stateに商品オブジェクトと一意のオーダーIDを追加
                            if (doc.data().status === 0) {
                                console.log('status0が存在することはありません')
                                console.log('値を更新')
                                dispatch(updateOrderItems(doc.data().orderItems))
                                dispatch(orderUniqueId(doc.id))
                            } else {
                                dispatch(deleteUniqueId())
                            }
                        }
                        );
                    });
            })
            .catch((error) => {
                console.log('失敗しました。')
                console.log(error)
            })
    }
    const addUserInfo = () => {
        firebase
            .firestore()
            .collection(`users/${userIdState.uid}/userInfo/`)
            .add({
                destinationName: destinationName,
                destinationEmail: destinationEmail,
                destinationZipcode: destinationZipcode,
                destinationAddress: destinationAddress,
                destinationTel: destinationTel,
                destinationPreDate: destinationPreDate,
                destinationPreTime: destinationPreTime,
                destinationPayMethod: Number(destinationPayMethod),
                creditcardNo: creditCardNum,
            })
            .then(() => {
                console.log('userInfo登録成功')
            })
            .catch((error) => {
                console.log('userInfo登録失敗')
                console.log(error)
            })
    }

    const orderFinish = () => {
        addDestination();
        addUserInfo();
        handleLink('/ordercomplete')
        dispatch(deleteAllOrder())//カートの中身を0にする。
    }

    // 金額関連処理
    let everyToppingTotalPrice = 0
    let totalItemPrice = 0

    // 商品の合計金額の処理
    let totalToppingPrice = 0

    let totalPrice = 0
    if (rows.length !== 0) {
        rows.forEach((totalItem) => {
            let toppingPrice = 0
            if (totalItem.toppingItem.length !== 0) {
                totalItem.toppingItem.forEach((toppingItem) => {
                    if (toppingItem.toppingPriceL) {
                        toppingPrice += toppingItem.toppingPriceL
                    } else if (toppingItem.toppingPriceM) {
                        toppingPrice += toppingItem.toppingPriceM
                    }
                })
            }
            totalPrice += ((totalItem.itemPriceAndCount.itemPrice + toppingPrice) * totalItem.itemPriceAndCount.itemCount)
        })
    }


    const OrderButtons = (props) => {
        if (props.destinationPayMethod === 2) {
            setCreditPay(true);
            console.log('destinationPayMethod  === 2')
            return (
                <React.Fragment>
                    <Button variant="outlined" color="primary" style={{ marginRight: '30px' }}
                        onClick={orderFinish} disabled={props.nameJudge === true || props.emailJudge === true || props.zipCodeJudge === true || props.addressJudge === true || props.telJudge === true || errorMessages.errorPreTime !== "" || props.payMethodsJudge === true || props.creditJudge === true}>
                        この内容で注文する
                    </Button>
                </React.Fragment>
            )
        } else if (props.destinationPayMethod === 1) {
            console.log('destinationPayMethod  ===1')
            return (
                <Button variant="outlined" color="primary" style={{ marginRight: '30px' }}
                    onClick={orderFinish} disabled={props.nameJudge === true || props.emailJudge === true || props.zipCodeJudge === true || props.addressJudge === true || props.telJudge === true || errorMessages.errorPreTime !== "" || props.payMethodsJudge === true}>

                    この内容で注文する</Button>
            )
        } else {
            console.log('destinationPayMethod  === 処理が通る')
            return (
                <Button variant="outlined" color="primary" style={{ marginRight: '30px' }}
                    disabled={true}>

                    この内容で注文する</Button>
            )
        }
    }

    const CreditCard = (props) => {
        const destinationPayMethod = props.destinationPayMethod;
        if (!destinationPayMethod) {
            errorMessages.errorPayMethod = 'お支払い方法を選択してください'
            return <div className={classes.error}>{errorMessages.errorPayMethod}</div>
        } else if (destinationPayMethod === 2) {
            errorMessages.errorPayMethod = ''
            return (
                <div style={{ padding: 10 }}>
                    <div style={{ color: 'red' }}>{errorMessages.errorCreditCardNum}</div>
                </div>
            )
        } else if (destinationPayMethod === 1) {
            errorMessages.errorPayMethod = ''
            return <div className={classes.error}>{errorMessages.errorPayMethod}</div>
        }
    }


    return (
        <React.Fragment>
            {!rows.length ? <h2>カートに商品がありません</h2> :
                <div>
                    <div>
                        <h2 className={classes.title}>注文内容確認</h2>
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
                                    {rows.map((row, index) => (
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
                                                {!row.toppingItem ? <span style={{ display: 'none' }}></span> :
                                                    row.toppingItem.map((topping, index) => {
                                                        everyToppingTotalPrice = 0
                                                        return (
                                                            <span key={index} style={{ display: 'none' }}></span>
                                                        )
                                                    })
                                                }
                                                {!row.toppingItem.length ? <p>0円</p> :
                                                    row.toppingItem.map((topping, index) => {
                                                        if (topping.toppingPriceM) {
                                                            totalToppingPrice += topping.toppingPriceM
                                                            everyToppingTotalPrice += topping.toppingPriceM
                                                            return (
                                                                <div key={index}>
                                                                    <p>
                                                                        {topping.toppigName}<br />：
                                                                {Number(topping.toppingPriceM).toLocaleString()}円</p>
                                                                </div>
                                                            )
                                                        } else if (topping.toppingPriceL) {
                                                            totalToppingPrice += topping.toppingPriceL
                                                            everyToppingTotalPrice += topping.toppingPriceL
                                                            return (
                                                                <div key={index}>
                                                                    <p>
                                                                        {topping.toppigName}<br />：
                                                                {Number(topping.toppingPriceL).toLocaleString()}円</p>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                }
                                            </TableCell>

                                            <TableCell align="right">
                                                <div>
                                                    <p className={classes.textSet}>消費税：{Number(((row.itemPriceAndCount.itemPrice + everyToppingTotalPrice) * row.itemPriceAndCount.itemCount) * 0.1).toLocaleString()}円</p>
                                                    <p className={classes.textSet}>金額：{Number(((row.itemPriceAndCount.itemPrice + everyToppingTotalPrice) * row.itemPriceAndCount.itemCount)).toLocaleString()}円<br />（税抜き）</p>
                                                    <p style={{ color: 'red' }} className={classes.textSet}>合計金額：{Number(((row.itemPriceAndCount.itemPrice + everyToppingTotalPrice) * row.itemPriceAndCount.itemCount) * 1.1).toLocaleString()}円<br />（税込）</p>
                                                </div>
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className={classes.priceItemCenter}>
                                <p className={classes.setLeftText}>消費税合計：{(Number(totalPrice) * 0.1).toLocaleString()}円</p>
                                <p className={classes.setLeftText}>合計金額：{Number(totalPrice).toLocaleString()}円（税抜き）</p>
                                <h3 style={{ color: 'red', textAlign: 'center' }} className={classes.setLeftText}>合計金額：{(Number(totalPrice) * 1.1).toLocaleString()}円（税込）</h3>
                            </div>
                        </Paper>
                    </div>

                    {/* 三項演算子falseの終わり}はReact.Fragmentの直前に変更する */}
                    <div class={classes.form}>
                        <h2>お届け先情報</h2>
                        <div style={{ padding: 10 }}>
                            <TextField
                                id="name"
                                label="お名前"
                                style={{ width: 300 }}
                                variant="outlined"
                                placeholder="楽々　楽子"
                                value={destinationName}
                                onChange={destinationNameChange}
                            />
                            <div className={classes.error}>{errorMessages.errorName}</div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <TextField
                                id="destinationEmail"
                                label="メールアドレス"
                                style={{ width: 300 }}
                                variant="outlined"
                                placeholder="XXX@XXXX"
                                value={destinationEmail}
                                onChange={destinationEmailChange}
                            />
                            <div className={classes.error}>{errorMessages.errorEmail}</div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <TextField
                                id="destinationZipcode"
                                label="郵便番号"
                                style={{ width: 300 }}
                                variant="outlined"
                                placeholder="XXX-XXXX"
                                value={destinationZipcode}
                                onChange={destinationZipcodeChange}
                            />
                            <div className={classes.error}>{errorMessages.errorZipcode}</div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <TextField
                                id="destinationAddress"
                                label="住所"
                                style={{ width: 300 }}
                                variant="outlined"
                                value={destinationAddress}
                                onChange={destinationAddressChange}
                            />
                            <div className={classes.error}>{errorMessages.errorAddress}</div>
                        </div>
                        <div style={{ padding: 10 }}>
                            <TextField
                                id="destinationTel"
                                label="電話番号"
                                style={{ width: 300 }}
                                variant="outlined"
                                placeholder="XXX-XXXX-XXXX"
                                value={destinationTel}
                                onChange={destinationTelChange}
                            />
                            <div className={classes.error}>{errorMessages.errorTel}</div>
                        </div>
                        <div>
                            <form className={classes.form} noValidate>
                                <TextField
                                    id="date"
                                    label="配達希望日"
                                    style={{ width: 300 }}
                                    type="date"
                                    // defaultValue={new Date()}
                                    className={classes.textField}
                                    onChange={destinationPreDateChange}
                                    value={destinationPreDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                /><br />
                                <div className={classes.error}>{errorMessages.errorPreDate}</div>
                            </form>
                        </div>


                        <FormControl>
                            <FormLabel component="legend">配達希望時間</FormLabel>
                            <Select
                                style={{ width: 300 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={destinationPreTime}
                                onChange={destinationPreTimeChange}
                            >
                                <MenuItem value={1}>10時</MenuItem>
                                <MenuItem value={2}>11時</MenuItem>
                                <MenuItem value={3}>12時</MenuItem>
                                <MenuItem value={4}>13時</MenuItem>
                                <MenuItem value={5}>14時</MenuItem>
                                <MenuItem value={6}>15時</MenuItem>
                                <MenuItem value={7}>16時</MenuItem>
                                <MenuItem value={8}>17時</MenuItem>
                                <MenuItem value={9}>18時</MenuItem>
                            </Select>
                        </FormControl>
                        <div className={classes.error}>{errorMessages.errorPreTime}</div>

                        <div style={{ padding: 10 }}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">お支払い方法</FormLabel>
                                <RadioGroup
                                    SelectedItem
                                    row
                                    aria-label="payMethod"
                                    // defaultValue="credit"
                                    name="destinationPayMethod"
                                    value={String(destinationPayMethod)}
                                    onChange={destinationPayMethodChange}
                                    style={{ padding: 10 }}
                                >
                                    <FormControlLabel value="1" control={<Radio />} label="代金引換" />
                                    <FormControlLabel value="2" control={<Radio />} label="クレジットカード" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <CreditCard destinationPayMethod={destinationPayMethod} />
                        <div>
                            <Grid container alignItems="center" justify="center" style={{ margin: 10 }}>
                                <Grid>
                                    {creditPay ?
                                        <div>
                                            <TextField
                                                id="credit"
                                                label="クレジットカード番号"
                                                variant="outlined"
                                                placeholder="XXXX-XXXX-XXXX"
                                                value={creditCardNum}
                                                onChange={creditCardNumChange}
                                            />
                                        </div>
                                        :
                                        <div></div>
                                    }

                                    <div style={{ marginTop: '50px', marginBottom: '50px' }}>
                                        <OrderButtons destinationPayMethod={destinationPayMethod} nameJudge={nameJudge} emailJudge={emailJudge} zipCodeJudge={zipCodeJudge} addressJudge={addressJudge} telJudge={telJudge} dateJudge={dateJudge} timeJudge={timeJudge} payMethodsJudge={payMethodsJudge} creditJudge={creditJudge} />
                                        <Button style={{ marginLeft: '10px' }} variant="outlined" color="inherit" onClick={clear}>クリア</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            }
        </React.Fragment >
    )
}

export default OrderConfirm;