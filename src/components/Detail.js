import React from 'react';
import { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// カード
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// ラジオボタン
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// セレクトボックス
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  // カード
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 500,
  },
  // セレクトボックス
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const Detail = () => {
  const classes = useStyles();

  // ラジオボタン
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // セレクトボックス（トッピング）
  const [itemCount, setItemCount] = React.useState('');

  const selectItemCount = (event) => {
    setItemCount(event.target.value);
  };

  // セレクトボックス（トッピング）
  const [topping, setTopping] = React.useState('');

  const selectTopping = (event) => {
    setTopping(event.target.value);
  };
  return (
    <>
      <h1>商品詳細</h1>
      <div className={classes.root}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image='https://firebasestorage.googleapis.com/v0/b/rakuraku-react.appspot.com/o/8.jpg?alt=media&token=5482ca98-4d73-493c-8a3e-e3bc5b7c7037'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
          </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
          </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h2>Hawaiianパラダイス</h2>
              <p>ハワイで取れる名産物でかつオーガニックな食料がふんだんに使われたローカルフーズです。健康志向の方に大人気の商品です。</p>
              <FormControl component="fieldset">
                <FormLabel component="legend">Size</FormLabel>
                <RadioGroup aria-label="topping" name="topping" value={value} onChange={handleChange}>
                  <FormControlLabel value="Msize" control={<Radio />} label="価格M:
                  " />
                  <FormControlLabel value="Lsize" control={<Radio />} label="価格L:
                  " />
                </RadioGroup>
              </FormControl>
              <h3>数量</h3>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">数量</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={itemCount}
                  onChange={setItemCount}
                >
                  <MenuItem value='1'>1</MenuItem>
                  <MenuItem value='2'>2</MenuItem>
                  <MenuItem value='3'>3</MenuItem>
                  <MenuItem value='4'>4</MenuItem>
                  <MenuItem value='5'>5</MenuItem>
                  <MenuItem value='6'>6</MenuItem>
                  <MenuItem value='7'>7</MenuItem>
                  <MenuItem value='8'>8</MenuItem>
                  <MenuItem value='9'>9</MenuItem>
                  <MenuItem value='10'>10</MenuItem>
                </Select>
              </FormControl>
              <h3>トッピング</h3>
              <FormControl className={classes.formControl}>
                <span>ハワイアンソルト</span>
                <InputLabel id="demo-simple-select-label">トッピング</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={topping}
                  onChange={selectTopping}
                >
                  <MenuItem value=''>なし</MenuItem>
                  <MenuItem value='l'>M</MenuItem>
                  <MenuItem value='m'>L</MenuItem>
                </Select>
              </FormControl>
              <p>合計金額：</p>
              <Button variant="contained">カートに入れる</Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}