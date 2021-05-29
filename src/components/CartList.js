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



export const CartList = () => {
  console.log('CartListが発火')
  const orderState = useSelector((state) => state.orderState)
  const toppingState = useSelector((state) => state.toppingState)
  console.log(orderState)

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
      maxWidth: '600px',
    },
    media: {
      height: 200,
      backgroundSize: 'contain'
    },
  });

  function createData(itemInfo, itemPriceAndCount, toppingItem, carbs, protein) {
    return { itemInfo, itemPriceAndCount, toppingItem, carbs, protein };
  }

  // トッピングアイテムを入れる配列
  const rows = [];
  console.log('fetchDataにおけるuseEffectが発火')

  // const selectedToppingId = []

  orderState.forEach((order) => {
    const fetchData = createData(
      { itemPath: order.imagePath, itemName: order.itemName },
      { itemPrice: order.itemPrice, itemCount: order.itemCount },
      order.toppingInfo,
      3,
      4,
    )
    // selectedToppingId.push(order.toppingInfo)
    rows.push(fetchData)
  })



  console.log(rows)
  console.log(rows.length)
  console.log('rowsの発火')
  console.log(createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 159, 6.0, 24, 4.0))

  const classes = useStyles();

  let totalToppingPrice = 0
  console.log(totalToppingPrice)


  return (
    <>
      {!rows.length ? <h1>Loading..</h1> :
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
                  <TableCell align="right"><Button variant="outlined" color="secondary">
                    削除
                </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <h4>合計金額</h4>
          <p>消費税合計：</p>
          <p>合計金額：税込）</p>
        </Paper>
      }

    </>
  )
}