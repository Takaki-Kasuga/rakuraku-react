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
import { cancel } from "../actions";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import firebase from "../firebase/firebase";
import { setOrdered, resetOrdered } from '../actions/index'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom'

import {
  Link
} from 'react-router-dom';


const OrderHistory = () => {

  const history = useHistory();
  const userIdState = useSelector((state) => state.userIdState);
  const orderForCartItemArray = useSelector((state) => state.orderForCartState) //商品情報取得
  const orderedItemsArray = useSelector((state) => state.setOrderedItems) //注文情報取得
  const dispatch = useDispatch();

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
    console.log('orderHistoryの中身')
    console.log(orderForCartItemArray);
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
                console.log(orderedItemsId)
                console.log(orderedItems);
                // const orderedItems = doc.data().orderItems;
                dispatch(setOrdered(orderedItemsId, orderedItems));
                console.log(orderedItemsArray)
              }
            });
          });
      }
    })
  }, []);

  function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
    return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
  }

  orderedItemsArray.forEach((order) => {
    console.log(order)
    console.log(order.orderedItems.orderItems);
    order.orderedItems.orderItems.forEach((order2) => {
      const filterObject = orderForCartItemArray.find(element => element.id === order2.itemId)
      console.log(filterObject);
      const fetchData = createData(
        { itemPath: filterObject.imagePath, itemName: filterObject.name },
        { itemPrice: order2.itemPrice, itemCount: order2.itemCount },
        order2.toppingInfo,
        order2.uniqueId,
        order2.itemId,
      )
      rows.push(fetchData)
    })
    parentRows.push(rows);
    console.log(rows);
    rows = [];
    console.log(parentRows);
  })

  // orderedItemsArray.forEach((order) => {
  //   const filterObject = orderForCartItemArray.find(element => element.id === order.itemId)
  //   console.log(filterObject);
  //   const fetchData = createData(
  //     { itemPath: filterObject.imagePath, itemName: filterObject.name },
  //     { itemPrice: order.itemPrice, itemCount: order.itemCount },
  //     order.toppingInfo,
  //     order.uniqueId,
  //     order.itemId,
  //   )
  //   rows.push(fetchData)
  // })

  const changeToDetail = path => history.push(path)

  const cancel = () => {
    console.log('キャンセルしました')
  }

  return (
    <>
      <div>
        {!parentRows.length ? <h2>注文した商品はありません</h2> :
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>商品名</TableCell>
                  <TableCell>商品価格</TableCell>
                  <TableCell>トッピング価格</TableCell>
                  <TableCell>小計</TableCell>
                  <TableCell>配達指定日</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {parentRows.map((childRows, index) => (
                  <div style={{ "margin-bottom": "40px" }}>
                    {childRows.map((row) => (
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
                            <p className={classes.textSet}>消費税：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice) * 0.1).toLocaleString()}円</p>
                            <p className={classes.textSet}>金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice)).toLocaleString()}円<br />（税抜き）</p>
                            <p style={{ color: 'red' }} className={classes.textSet}>合計金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice) * 1.1).toLocaleString()}円<br />（税込）</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p>ここに配達日を入れる(まだ未実装)</p>
                        </TableCell>
                        <TableCell>
                          <Button color="primary" onClick={() => { changeToDetail(`/detail/${row.itemId}`) }}>この商品をもう一度購入する</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <Button onClick={cancel}>キャンセル</Button>
                  </div>
                ))}
              </TableBody>
            </Table>
          </Paper>
        }
      </div>
    </>
  )
};


export default OrderHistory;