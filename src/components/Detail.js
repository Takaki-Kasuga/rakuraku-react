import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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

// ローディング
import LinearProgress from '@material-ui/core/LinearProgress';

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
    width: '300px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  // ローディイング
  loading: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  flex: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
  }
}));

export const Detail = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const itemState = useSelector((state) => state.itemState)
  const toppingState = useSelector((state) => state.toppingState)
  const [selectedItem, setSelectedItem] = useState('')
  const [toppingList, setToppingList] = useState('')

  // パラメーター受け取り
  const { id } = useParams()
  console.log(id)


  // パラメーターで受け取ったidと合致するオブジェクトを返す
  useEffect(() => {
    const selectedItem = itemState.filter((item) => {
      console.log(item)
      // 文字列のNOを受け取っているためNumberで囲む
      return item.id === Number(id)
    })
    setSelectedItem(selectedItem[0])
    console.log(toppingState)
  }, [])







  // ラジオボタン
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  // セレクトボックス
  const [itemCount, setItemCount] = useState(1);
  console.log(itemCount)

  const selectItemCount = (event) => {
    event.preventDefault();
    console.log(event)
    setItemCount(event.target.value);
  };

  // セレクトボックス（トッピング）
  const [topping, setTopping] = useState(0);

  const selectTopping = (event) => {
    event.preventDefault();
    setTopping(event.target.value);
  };
  return (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
      </FormControl>
      <h1>商品詳細</h1>
      {console.log(toppingState)}
      <div className={classes.root}>
        {!selectedItem ? <div className={classes.loading}>
          <LinearProgress variant="query" />
          <LinearProgress variant="query" color="secondary" />
        </div> :
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.media}
                    image={selectedItem.imagePath}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {selectedItem.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {selectedItem.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <h2> {selectedItem.name}</h2>
                <p>{selectedItem.description}</p>

                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend">Size</FormLabel>
                  <RadioGroup aria-label="size" name="size1" value={value} onChange={handleChange}>
                    <FormControlLabel value={selectedItem.price.Msize} control={<Radio color="primary" />} label={`Mサイズ：${Number(selectedItem.price.Msize).toLocaleString()}円`} />
                    <FormControlLabel value={selectedItem.price.Lsize} control={<Radio color="primary" />} label={`Lサイズ：${Number(selectedItem.price.Lsize).toLocaleString()}円`}
                    />
                  </RadioGroup>
                </FormControl>

                <h3>数量</h3>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">数量</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={itemCount}
                    onChange={selectItemCount}
                  >
                    <MenuItem value="1"></MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>
                    <MenuItem value="6">6</MenuItem>
                    <MenuItem value="7">7</MenuItem>
                    <MenuItem value="8">8</MenuItem>
                    <MenuItem value="9">9</MenuItem>
                    <MenuItem value="10">10</MenuItem>
                  </Select>
                </FormControl>
                <h3>トッピング</h3>
                <div className={classes.flex}>
                  {toppingState.map((topping) => {
                    return (
                      <FormControl key={topping.id} className={classes.formControl}>
                        <span>{topping.name}</span>
                        <InputLabel id="demo-simple-select-label">{topping.id}</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={topping}
                          onChange={selectTopping}
                        >
                          <MenuItem value='0'>なし</MenuItem>
                          <MenuItem value={topping.Msize}>M：{topping.Msize}円  </MenuItem>
                          <MenuItem value={topping.Lsize}>L：{topping.Lsize}円 </MenuItem>
                        </Select>
                      </FormControl>
                    )
                  })}
                </div>

                <p>合計金額：{(Number(value) * Number(itemCount)).toLocaleString()}円</p>
                <Button variant="contained">カートに入れる</Button>
              </Paper>
            </Grid>
          </Grid>
        }

      </div>
    </>
  )
}