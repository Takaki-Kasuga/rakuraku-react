
import firebase from '../firebase/firebase'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { items, toppings, seachItems, orderForCartInfomation } from '../actions/index'
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

// ローディング
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';


// ローディング
function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


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
  full: {
    width: '100%',
  }
}));


export const Home = () => {
  const dispatch = useDispatch()
  const itemState = useSelector((state) => state.itemState)
  const toppingState = useSelector((state) => state.toppingState)
  const [judgeScreenStatus, setJudgeScreenStatus] = useState(false);
  // ローディング
  const [progress, setProgress] = React.useState(10);
  // グリッドスタイル
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  // ローディング
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 300);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

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
        dispatch(orderForCartInfomation(itemArray))
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
        dispatch(toppings(toppingArray[0].array))
      });
  }, [])

  // 文字検索（該当の商品を取得）
  const [searchValue, setSearchValue] = useState(null);
  const setSearchValueMethod = (event) => {
    setSearchValue(event.target.value)
  }
  const searchItem = (searchValue) => {
    // 何か１つでも文字が入力されている時
    if (searchValue) {
      firebase
        .firestore()
        .collection(`items/`)
        .get()
        .then((snapshot) => {
          const itemArray = []
          snapshot.forEach((doc) => {
            itemArray.push(doc.data())
          })
          dispatch(seachItems([searchValue, itemArray]))
        });
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

  const allItem = () => {
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

  const changeToStatus = () => {
    setJudgeScreenStatus(true)
  }

  const userIdState = useSelector((state) => state.userIdState)
  const test = () => {
    firebase
      .firestore()
      .collection(`users/${userIdState.uid}/orders`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  return (
    <>

      <CssBaseline />
      <Container maxWidth="lg" style={{ 'margin-top': '50px' }}>
        <Grid container justify="center" spacing={spacing}>
          {itemState.length === 0 && !judgeScreenStatus ?
            <div className={classes.full} style={{ textAlign: 'center' }}>
              <h2>Loading....</h2>
            </div>
            : itemState.length === 0 && judgeScreenStatus ?
              <div>
                <div>
                  <div className={classes.searchbox}>
                    <TextField
                      onKeyPress={e => {
                        if (e.key == 'Enter') {
                          e.preventDefault()
                          searchItem(searchValue)
                          changeToStatus()
                        }
                      }
                      }
                      className={classes.textField}
                      id="filled-full-width"
                      label="Label"
                      placeholder="Search Items"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      value={searchValue}
                      onChange={setSearchValueMethod}
                    />
                    <Button variant="contained" color="primary"

                      onClick={() => {
                        searchItem(searchValue);
                        changeToStatus();
                      }}>
                      検索
        </Button>

                  </div>
                  <h1>該当する商品がありません</h1>
                  <Button variant="contained" onClick={() => {
                    allItem();
                  }}>一覧を表示する。</Button>
                </div>
              </div>
              :
              <div>
                <div className={classes.searchbox}>
                  <TextField
                    onKeyPress={e => {
                      if (e.key == 'Enter') {
                        e.preventDefault()
                        searchItem(searchValue)
                        changeToStatus()
                      }
                    }
                    }
                    className={classes.textField}
                    id="filled-full-width"
                    label="Label"
                    placeholder="Search Items"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    value={searchValue}
                    onChange={setSearchValueMethod}
                  />
                  <Button variant="contained" color="primary"
                    onClick={() => {
                      searchItem(searchValue);
                      changeToStatus();
                    }}>
                    検索
        </Button>

                </div>
                <Grid item className={classes.flex}>
                  {itemState.map((item) => {
                    return (
                      <Card onClick={() => { changeToDetail(`/detail/${item.id}`) }} key={item.id} className={classes.root} >
                        <CardHeader
                          avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                              Rks
                          </Avatar>
                          }
                          title={item.name}
                        />
                        <CardMedia
                          className={classes.media}
                          image={item.imagePath}
                          title={item.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Mサイズ：{(item.price.Msize).toLocaleString()}円（税抜き）
                            </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Lサイズ：{(item.price.Lsize).toLocaleString()}円（税抜き）
                            </Typography>
                        </CardContent>
                      </Card>
                    )
                  })}
                </Grid>
              </div>
          }
        </Grid>
      </Container>
    </>
  )
}