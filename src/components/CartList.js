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



export const CartList = () => {

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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 159, 6.0, 24, 4.0),
    createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 237, 9.0, 37, 4.3),
    createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 262, 16.0, 24, 6.0),
    createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 305, 3.7, 67, 4.3),
    createData('https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037', 356, 16.0, 49, 3.9),
  ];

  const classes = useStyles();


  return (
    <>
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
              <TableRow key={row.calories}>

                <TableCell component="th" scope="row">

                  <Card className={classes.card}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        ハワイアンパラダイス
                        </Typography>
                    </CardContent>
                    <CardMedia
                      className={classes.media}
                      image={row.name}
                      title="Contemplative Reptile"
                    />

                  </Card>
                  {/* <img src={row.name}></img> */}
                </TableCell>
                <TableCell align="right">
                  <p>M:〜〜</p>
                  <p>個数:〜個</p>
                </TableCell>
                <TableCell align="right">
                  <p>ハワイアンソルトM：200円</p>
                  <p>ハワイアンソルトL：300円</p>
                </TableCell>
                <TableCell align="right">
                  <p>消費税：</p>
                  <p>金額：〜（税込）</p>
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
        <p>合計金額：（税込）</p>
      </Paper>
    </>
  )
}