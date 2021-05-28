
import firebase from '../firebase/firebase'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { items } from '../actions/index'
// マテリアルUI
// コンテイナー
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// グリッド
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

// グリッドスタイル
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const dupList = [
  { key: 'a', data: 'Satou' },
  { key: 'a', data: 'Suzuki' },
  { key: 'b', data: 'Takahashi' },
  { key: 'a', data: 'Tanaka' },
  { key: 'c', data: 'Watanabe' },
  { key: 'c', data: 'Itou' },
];

var cleanList = dupList.filter(function (x, i, self) {
  return (self.findIndex(function (y) {
    return (x.key === y.key)
  }) === i);
});

console.log(cleanList);

export const Home = () => {
  const dispatch = useDispatch()
  const itemState = useSelector((state) => state.itemState)
  // const [items, setItems] = useState([])

  // グリッドスタイル
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };


  useEffect(() => {
    // dispatch(items(null))
    const itemArray = []
    firebase
      .firestore()
      .collection(`items/`)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // dispatch(items(doc.data()))
          // setItems(doc.data())
          // console.log(items)
          itemArray.push(doc.data())
        })
      });
    dispatch(items(itemArray))
  }, [])

  // console.log(items)


  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={spacing}>
                {[0, 1, 2].map((value) => (
                  <Grid key={value} item>
                    <Paper className={classes.paper} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          {/* <h1>Home</h1> */}
        </Typography>
      </Container>
    </>
  )
}