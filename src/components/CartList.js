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
import { deleteOrderInfomation, deleteOrderInfomationIdNum } from '../actions/index'

// デリートアイコン
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

// 注文に進むアイコン
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';




export const CartList = () => {
  console.log('CartListが発火')
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
      backgroundSize: 'contain'
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
  }));

  function createData(itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId) {
    return { itemInfo, itemPriceAndCount, toppingItem, uniqueId, itemId };
  }

  // トッピングアイテムを入れる配列
  const rows = [];
  console.log('fetchDataにおけるuseEffectが発火')


  orderState.forEach((order) => {
    const fetchData = createData(
      { itemPath: order.imagePath, itemName: order.itemName },
      { itemPrice: order.itemPrice, itemCount: order.itemCount },
      order.toppingInfo,
      order.uniqueId,
      order.itemId,
    )
    // selectedToppingId.push(order.toppingInfo)
    rows.push(fetchData)
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
            console.log('firebae上では削除が完了しました。')
            dispatch(deleteOrderInfomation({ uniqueId: uniqueId }))
          });
      } else {
        console.log('ログインしていない時の処理')
        console.log(itemId)
        dispatch(deleteOrderInfomationIdNum({ itemId: itemId }))
      }
    }
  }


  console.log(rows)
  console.log(rows.length)
  console.log('rowsの発火')

  const classes = useStyles();

  let totalToppingPrice = 0
  console.log(totalToppingPrice)

  // const prePurchase = () => {
  //   if (userIdState.uid) {
  //     handleLink('/orderconfirm')
  //   } else {
  //     handleLink('/login')
  //   }
  // }

  return (
    <>
      {!rows.length ? <h2>カートに商品がありません</h2> :
        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>商品名</TableCell>
                <TableCell align="right">商品個数と値段（税抜き）</TableCell>
                <TableCell align="right">トッピングの値段（税抜き）</TableCell>
                <TableCell align="right">金額</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.itemInfo}>

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
                  <TableCell align="right">
                    <p>金額:{Number(row.itemPriceAndCount.itemPrice).toLocaleString()}円</p>
                    <p>個数:{row.itemPriceAndCount.itemCount}個</p>
                  </TableCell>
                  <TableCell align="right">
                    {!row.toppingItem ? <p>0円</p> :
                      row.toppingItem.map((topping) => {
                        return (
                          <div>
                            <p>
                              {topping.toppigName}：
                            {Number(topping.toppingPrice).toLocaleString()}円</p>
                          </div>
                        )
                      })
                    }
                  </TableCell>
                  <TableCell align="right">
                    <p>消費税：円</p>
                    <p>金額：{Number(((row.itemPriceAndCount.itemPrice * row.itemPriceAndCount.itemCount)) * 1.1).toLocaleString()}（税込）</p>
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

          <div>
            <h4>合計金額</h4>
            <p>消費税合計：</p>
            <p>合計金額：税込）</p>
          </div>
          <Fab variant="extended" aria-label="like" className={classes.fab} >
            <NavigationIcon className={classes.extendedIcon} />
        注文に進む
      </Fab>

        </Paper>
      }

    </>
  )
}