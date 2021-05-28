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

// カードタブ
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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

// コンポーネント
import { ToppingItems } from '../Organisms/ToppingItems'

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

export const Detail = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const itemState = useSelector((state) => state.itemState)
  const toppingState = useSelector((state) => state.toppingState)
  const [selectedItem, setSelectedItem] = useState('')
  const [toppingList, setToppingList] = useState('')
  const [expanded, setExpanded] = React.useState(false);
  // パラメーター受け取り
  const { id } = useParams()
  console.log(id)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


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
                <Card className={classes.card}>
                  <div onClick={handleExpandClick} style={{ cursor: "pointer" }}>
                    <span>トッピング詳細</span>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </div>

                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <CardActions disableSpacing>

                      </CardActions>
                      <ToppingItems></ToppingItems>
                    </CardContent>
                  </Collapse>
                </Card>



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