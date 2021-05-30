
import firebase from '../firebase/firebase'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { items, toppings, seachItems } from '../actions/index'
// マテリアルUI
// コンテイナー
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// グリッド
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// カードスタイル
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// テキストフィールド
import TextField from '@material-ui/core/TextField';

// 検索ボタン
import Button from '@material-ui/core/Button';

// グリッドスタイル
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    cursor: 'pointer',
    width: '300px',
    'margin': '20px',
  },
  searchbox: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'text-align': 'center',
    'justify-content': 'center',
    width: '80%',
    margin: '0 auto'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    display: 'inline-block',
    width: '300px',
    'text-align': 'center',
  },
  paper: {
    height: 'auto',
    width: '100%',
  },
  width: {
    'max-width': '300px'
  },
  flex: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export const Home = () => {
  const dispatch = useDispatch()
  const itemState = useSelector((state) => state.itemState)
  const toppingState = useSelector((state) => state.toppingState)

  // グリッドスタイル
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  // カードリスト
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const history = useHistory()
  const changeToDetail = path => history.push(path)

  // アイテムリスト取得
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
      });
  }, [])

  // トッピングリスト取得
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
        console.log(toppingArray[0].array)
        console.log(toppingArray[0].array.length)
        dispatch(toppings(toppingArray[0].array))
      });
  }, [])

  // 文字検索（該当の商品を取得）
  const [searchValue, setSearchValue] = useState(null);
  const setSearchValueMethod = (event) => {
    console.log(searchValue)
    console.log(event)
    setSearchValue(event.target.value)
  }
  const filteringItems = (searchValue) => {
    console.log(searchValue)
    // alert(searchValue)
    if (searchValue) {
      dispatch(seachItems(searchValue))
    } else {
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
        });
    }

  }

  console.log(itemState)
  console.log(itemState.length)


  return (
    <>
      <div className={classes.searchbox}>
        {searchValue}
        <TextField
          className={classes.textField}
          id="filled-full-width"
          label="Label"
          placeholder="Search Items"
          fullWidth
          // style={{ margin: '0 auto' }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={searchValue}
          onChange={setSearchValueMethod}
        />
        <Button variant="contained" color="primary" onClick={() => {
          filteringItems(searchValue)
        }}>
          検索
        </Button>
      </div>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}> */}
        <Grid container justify="center" spacing={spacing}>
          {!itemState.length ? <h1>Loding..</h1> :
            <Grid item className={classes.flex}>
              {itemState.map((item) => {
                return (
                  <Card onClick={() => { changeToDetail(`/detail/${item.id}`) }} key={item.id} className={classes.root} >
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          Me
                          </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                    />
                    <CardMedia
                      className={classes.media}
                      image={item.imagePath}
                      title="Paella dish"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lサイズ：{(item.price.Lsize).toLocaleString()}円（税抜き）
                            </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Mサイズ：{(item.price.Msize).toLocaleString()}円（税抜き）
                            </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                )
              })}
            </Grid>
          }
        </Grid>
        {/* </Grid>
          </Grid>
        </Typography> */}
      </Container>
    </>
  )
}


{/* <Grid item className={classes.flex}>
  <Card className={classes.root} >
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          Me
                          </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image='https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037'
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        デスクリプション
                        </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
                          </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image='https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037'
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        デスクリプション
                        </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  <Card className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
                          </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image='https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037'
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        デスクリプション
                        </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  <Paper className={classes.paper} />
</Grid> */}

