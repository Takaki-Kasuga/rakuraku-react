import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// ボタン
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { useEffect } from 'react'
import { createDispatchHook, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


import firebase from '../firebase/firebase'
import { deleteOrderInfomation, deleteOrderInfomationIdNum, changeRoutingStatus, setOrderItems, deleteOrderItems, orderForCartInfomation, toppings, items } from '../actions/index'

// デリートアイコン
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

// 注文に進むアイコン
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import { gridNumberComparer } from '@material-ui/data-grid';


export const CartList = () => {
  const dispatch = useDispatch()
  const orderState = useSelector((state) => state.orderState)
  const orderForCartItemArray = useSelector((state) => state.orderForCartState) //商品情報取得
  const orderItemsArray = useSelector((state) => state.setOrderItems) //カート情報取得
  const toppingState = useSelector((state) => state.toppingState)
  const history = useHistory()
  const handleLink = path => history.push(path)
  // データリスト（テーブル）
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    // カード
    card: {
      maxWidth: '600px',
    },
    media: {
      height: 200,
      'background-size': 'cover',
    },
    delete: {
      cursor: 'pointer',
      display: 'inline-block'
    },
    button: {
      margin: theme.spacing(1),
    },
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    textSet: {
      'text-align': 'left'
    },
    priceItemCenter: {
      display: 'block',
      'width': '50%',
      'margin': '0 auto',
      'margin-bottom': '30px',
    },
    setLeftText: {
      textAlign: 'left'
    },
    cardMediaStyle: {
      width: '220px',
    },
    toppingStyle: {
      // width: '180px',
      textAlign: 'left'
    },
    itemPriceStyle: {
      // width: '100px',
      textAlign: 'left'
    },
  }));

  function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
    return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
  }

  // トッピングアイテムを入れる配列
  const rows = [];

  // カートリスト削除機能
  const orderUniqueIdState = useSelector((state) => state.orderUniqueIdState)
  const userIdState = useSelector((state) => state.userIdState)
  const deleteOrder = (index) => {
    if (window.confirm('本当に削除しますか？')) {
      // ログインしているユーザーの処理（Firebaseの値の削除）
      if (userIdState.login_user) {
        dispatch(deleteOrderItems(orderItemsArray[index].uniqueItemId))
        firebase
          .firestore()
          .collection(`users/${userIdState.uid}/orders`)
          .doc(orderUniqueIdState)
          .get()
          .then((snapshot) => {
            if (Number(snapshot.data().status) === 0 && snapshot.data().orderItems.length > 0) {
              dispatch(deleteOrderInfomation(orderItemsArray[index].uniqueItemId))
              const newDeleteDataArray = []
              const orderItems = snapshot.data().orderItems
              orderItems.forEach((orderItem) => {
                if (orderItemsArray[index].uniqueItemId !== orderItem.uniqueItemId) {
                  newDeleteDataArray.push(orderItem)
                }
              })
              if (newDeleteDataArray.length === 0) {
                firebase
                  .firestore()
                  .collection(`users/${userIdState.uid}/orders`)
                  .doc(orderUniqueIdState)
                  .delete()
                  .then(() => {
                  })
              } else {
                firebase
                  .firestore()
                  .collection(`users/${userIdState.uid}/orders`)
                  .doc(orderUniqueIdState)
                  .update({
                    orderItems: newDeleteDataArray,
                  })
                  .then(() => {
                  })
              }
            }
          });
      } else {
        dispatch(deleteOrderInfomationIdNum(rows[index]))
      }
    }
  }

  const addOrder = () => {
    if (userIdState.login_user) {
      handleLink('/orderconfirm')
    } else {
      dispatch(changeRoutingStatus())
      handleLink('/login')
    }
  }

  const classes = useStyles();

  useEffect(() => {
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
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            firebase
              .firestore()
              .collection(`users/${userIdState.uid}/orders`)
              .get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                  if (Number(doc.data().status) === 0 && doc.data().orderItems.length > 0) {
                    // Firestoreから取得した「カートに入った状態のorderItems」をstoreのstateに保存(ただし、orderItemが空ではない時)
                    const orderItems = doc.data().orderItems;
                    dispatch(setOrderItems(orderItems));
                  }
                })
              });
          }
        })
      });
  }, []);

  // firebaseの取得を終えた段階で発火（rowsに追加）
  orderItemsArray.forEach((order) => {
    // statusが0（購入前）の商品を取ってくる
    const filterObject = orderForCartItemArray.find(element => element.id === order.itemId)
    const fetchData = createData(
      { itemPath: filterObject.imagePath, itemName: filterObject.name },
      { itemPrice: order.itemPrice, itemCount: order.itemCount },
      order.toppingInfo,
      order.uniqueId,
      order.itemId,
    )
    // selectedToppingId.push(order.toppingInfo)
    rows.push(fetchData)
  })

  // 金額関連処理
  let everyToppingTotalPrice = 0
  let totalToppingPrice = 0


  // 商品の合計金額の処理
  // let totalItemPrice = 0
  // if (rows.length !== 0) {
  //   rows.forEach((totalItem) => {
  //     totalItemPrice += totalItem.itemPriceAndCount.itemPrice * totalItem.itemPriceAndCount.itemCount
  //   })
  // }
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





  return (
    <>
      {!rows.length ? <h2 style={{ 'margin-top': '100px', textAlign: 'center' }}>カートに商品がありません</h2> :
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">商品名</TableCell>
                <TableCell align="left">商品個数と値段（税抜き）</TableCell>
                <TableCell align="left">トッピングの値段（税抜き）</TableCell>
                <TableCell align="left">金額</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} style={{ alignItems: 'flex-start' }}>

                  <TableCell className={classes.cardMediaStyle} component="th" scope="row">

                    <Card className={classes.card}>
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p" style={{ textAlign: 'center' }}>
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
                    <p>個数:{row.itemPriceAndCount.itemCount}個</p>

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
                          everyToppingTotalPrice += topping.toppingPriceM
                          totalToppingPrice += topping.toppingPriceM
                        } else if (topping.toppingPriceL) {
                          everyToppingTotalPrice += topping.toppingPriceL
                          totalToppingPrice += topping.toppingPriceL
                        }
                        return (
                          <div key={index}>
                            <p>
                              {topping.toppingPriceM === 200 ? topping.toppigName + 'M' : topping.toppigName + 'L'}
                              <br />：
                            {topping.toppingPriceM ? Number(topping.toppingPriceM).toLocaleString() : Number(topping.toppingPriceL).toLocaleString()}
                            円</p>
                          </div>
                        )
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
                  <TableCell align="right" style={{ width: '120px' }}>
                    <div className={classes.delete} onClick={() => {
                      deleteOrder(index)
                    }}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                        </Button>
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
          <Fab variant="extended" aria-label="like" className={classes.fab} onClick={() => { addOrder() }} className={classes.priceItemCenter}>
            <NavigationIcon className={classes.extendedIcon}
            />
              注文に進む
              </Fab>
        </Paper>
      }

    </>
  )
}