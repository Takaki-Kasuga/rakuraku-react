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
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


import firebase from '../firebase/firebase'
import { deleteOrderInfomation, deleteOrderInfomationIdNum, changeRoutingStatus } from '../actions/index'

// デリートアイコン
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

// 注文に進むアイコン
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';


export const CartList = () => {
  const dispatch = useDispatch()
  const orderState = useSelector((state) => state.orderState)
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
  }));

  function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
    return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
  }

  // トッピングアイテムを入れる配列
  const rows = [];

  orderState.forEach((order) => {
    console.log(order.status)
    // statusが0（購入前）の商品を取ってくる
    if (order.status === 0) {
      const fetchData = createData(
        { itemPath: order.imagePath, itemName: order.itemName },
        { itemPrice: order.itemPrice, itemCount: order.itemCount },
        order.toppingInfo,
        order.uniqueId,
        order.itemId,
      )
      // selectedToppingId.push(order.toppingInfo)
      rows.push(fetchData)
    }
  })


  // カートリスト削除機能
  const userIdState = useSelector((state) => state.userIdState)
  const deleteItem = (uniqueId, itemId) => {
    if (window.confirm('本当に削除しますか？')) {
      if (userIdState.login_user) {
        firebase
          .firestore()
          .collection(`users/${userIdState.uid}/orders`)
          .doc(uniqueId)
          .delete()
          .then(() => {
            dispatch(deleteOrderInfomation({ uniqueId: uniqueId }))
          });
      } else {
        dispatch(deleteOrderInfomationIdNum({ itemId: itemId }))
      }
    }
  }

  const confirmOrder = () => {
    if (userIdState.login_user) {
      handleLink('/orderconfirm')
    } else {
      dispatch(changeRoutingStatus())
      handleLink('/login')
    }
  }

  const classes = useStyles();


  // 金額関連処理
  let everyToppingTotalPrice = 0
  let totalItemPrice = 0

  // 商品の合計金額の処理
  let totalToppingPrice = 0
  if (rows.length !== 0) {
    rows.forEach((totalItem) => {
      totalItemPrice += totalItem.itemPriceAndCount.itemPrice * totalItem.itemPriceAndCount.itemCount
    })
  }

  return (
    <>
      {!rows.length ? <h2>カートに商品がありません</h2> :
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
                <TableRow key={index}>

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
                    {!row.toppingItem ? <spna style={{ display: 'none' }}></spna> :
                      row.toppingItem.map((topping, index) => {
                        everyToppingTotalPrice = 0
                        return (
                          <span key={index} style={{ display: 'none' }}></span>
                        )
                      })
                    }
                    { }
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
                      <p className={classes.textSet}>金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice)).toLocaleString()}円<br />（税抜き）</p>
                      <p style={{ color: 'red' }} className={classes.textSet}>合計金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount) + everyToppingTotalPrice) * 1.1).toLocaleString()}円<br />（税込）</p>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={classes.delete} onClick={() => {
                      deleteItem(row.uniqueId, row.itemId)
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
            <p className={classes.setLeftText}>合計金額：{(totalItemPrice + totalToppingPrice).toLocaleString()}円（税抜き）</p>
            <p className={classes.setLeftText}>消費税合計：{((totalItemPrice + totalToppingPrice) * 0.1).toLocaleString()}円</p>
            <h3 style={{ color: 'red' }} className={classes.setLeftText}>合計金額：{Number(Number((totalItemPrice + totalToppingPrice)) + Number(((totalItemPrice + totalToppingPrice) * 0.1))).toLocaleString()}円（税込）</h3>
          </div>
          <Fab variant="extended" aria-label="like" className={classes.fab} onClick={() => { confirmOrder() }} className={classes.priceItemCenter}>
            <NavigationIcon className={classes.extendedIcon}
            />
              注文に進む
              </Fab>
        </Paper>
      }

    </>
  )
}