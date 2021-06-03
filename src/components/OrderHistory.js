import React, { useState, useEffect } from "react";
//ボタン
import { Button } from "@material-ui/core";
//テーブル
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// import { connect } from "react-redux";
// import { cancel } from "../actions";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import firebase from "../firebase/firebase";
import { setOrdered, resetOrdered, changeOrderedStatus, items, orderForCartInfomation } from '../actions/index'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom'




const OrderHistory = () => {
  const history = useHistory();
  const userIdState = useSelector((state) => state.userIdState);
  const orderForCartItemArray = useSelector((state) => state.orderForCartState) //商品情報取得
  const orderedItemsArray = useSelector((state) => state.setOrderedItems) //注文情報取得
  const dispatch = useDispatch();
  const orderItemsArray = useSelector((state) => state.setOrderItems) //カート情報取得

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
      textAlign: 'left'
    },
    itemPriceStyle: {
      textAlign: 'left'
    },
  }));

  const style = {
    width: "100%",
    display: "flex",
    "justify-content": "center",
    "margin-top": "100px",
    "margin-bottom": "100px"
  }

  const classes = useStyles();

  // 金額関連処理
  let everyToppingTotalPrice = 0
  let totalItemPrice = 0

  const parentRows = [];
  let rows = [];

  // 商品の合計金額の処理
  let totalToppingPrice = 0
  if (rows.length !== 0) {
    rows.forEach((totalItem) => {
      totalItemPrice += totalItem.itemPriceAndCount.itemPrice * totalItem.itemPriceAndCount.itemCount
    })
  }

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
            dispatch(resetOrdered());
            firebase
              .firestore()
              .collection(`users/${userIdState.uid}/orders`)
              .get()
              .then((snapshot) => {
                snapshot.forEach((doc) => {
                  if (Number(doc.data().status) !== 0) {
                    const orderedItemsId = doc.id;
                    const orderedItems = doc.data();
                    // const orderedItems = doc.data().orderItems;
                    dispatch(setOrdered(orderedItemsId, orderedItems));
                  }
                });
              });
          }
        })
      })
  }, []);

  function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId, destinationPreDate, destinationPreTime) {
    return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId, destinationPreDate, destinationPreTime };
  }

  orderedItemsArray.forEach((order) => {
    order.orderedItems.orderItems.forEach((order2) => {
      const filterObject = orderForCartItemArray.find(element => element.id === order2.itemId)
      const fetchData = createData(
        { itemPath: filterObject.imagePath, itemName: filterObject.name },
        { itemPrice: order2.itemPrice, itemCount: order2.itemCount },
        order2.toppingInfo,
        order2.uniqueId,
        order2.itemId,
        order.orderedItems.destinationPreDate,
        order.orderedItems.destinationPreTime
      )
      rows.push(fetchData)
    })
    parentRows.push(rows);
    rows = [];
  })

  const changeToDetail = path => history.push(path)

  const cancel = (index, statusJudge) => {
    if (statusJudge === 1 || statusJudge === 2) {
      firebase.firestore().collection(`users/${userIdState.uid}/orders`).doc(orderedItemsArray[index].orderedItemsId).get()
        .then(async (doc) => {
          const order = doc.data();
          order.status = 9;
          firebase.firestore().collection(`users/${userIdState.uid}/orders`).doc(orderedItemsArray[index].orderedItemsId).update(order)
            .then(async () => {
              await dispatch(changeOrderedStatus(index));
            });
        });
    }
  }

  const StatusJudge = (props) => {
    const statusJudge = Number(useSelector((state) => state.setOrderedItems[props.index].orderedItems.status))

    if (statusJudge === 9) {
      return (
        <p>キャンセル済</p>
      )
    } else if (statusJudge === 3) {
      return (
        <p>発送済み</p>
      )
    } else if (statusJudge === 1 || statusJudge === 2) {
      return (
        <Button onClick={() => cancel(props.index, statusJudge)}>キャンセル</Button>
      )
    } else {
      return (
        <p>エラーが発生しました</p>
      )
    }
  }

  const DestinationTime = (props) => {
    if (props.destinationPreTime === 1) {
      return (
        <p>10時</p>
      )
    } else if (props.destinationPreTime === 2) {
      return (
        <p>11時</p>
      )
    } else if (props.destinationPreTime === 3) {
      return (
        <p>12時</p>
      )
    } else if (props.destinationPreTime === 4) {
      return (
        <p>13時</p>
      )
    } else if (props.destinationPreTime === 5) {
      return (
        <p>14時</p>
      )
    } else if (props.destinationPreTime === 6) {
      return (
        <p>15時</p>
      )
    } else if (props.destinationPreTime === 7) {
      return (
        <p>16時</p>
      )
    } else if (props.destinationPreTime === 8) {
      return (
        <p>17時</p>
      )
    } else if (props.destinationPreTime === 9) {
      return (
        <p>18時</p>
      )
    }
  }

  return (
    <>
      <div>
        {!parentRows.length ? <h2 style={{ 'margin-top': '100px', textAlign: 'center' }}>注文した商品はありません</h2> :
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table" >

              {parentRows.map((childRows, index) => (
                <div style={{ "margin-bottom": "50px" }} key={index}>
                  <TableHead>
                    <TableRow>
                      <TableCell>商品名</TableCell>
                      <TableCell>商品価格</TableCell>
                      <TableCell>トッピング価格</TableCell>
                      <TableCell>小計</TableCell>
                      <TableCell>配達指定日</TableCell>
                    </TableRow>
                  </TableHead>
                  {childRows.map((row, index) => (
                    <TableBody key={index}>
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
                        <TableCell>
                          <p>{row.destinationPreDate}</p>
                          <DestinationTime destinationPreTime={row.destinationPreTime} />
                        </TableCell>
                        <TableCell>
                          <Button color="primary" onClick={() => { changeToDetail(`/detail/${row.itemId}`) }}>この商品をもう一度購入する</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                  <StatusJudge index={index} />
                </div>
              ))}
            </Table>
          </Paper>
        }
        <div style={style}>
          <Button variant="contained" color="primary" onClick={() => history.push("/")}>
            メニュー一覧に戻る
          </Button>
        </div>
      </div>
    </>
  )
};


export default OrderHistory;