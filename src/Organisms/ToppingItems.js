import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// セレクトボックス
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  // セレクトボックス
  formControl: {
    margin: theme.spacing(1),
    width: '300px',
  },
  flex: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
  }
}));


export const ToppingItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const toppingState = useSelector((state) => state.toppingState)
  console.log(toppingState)

  const [hawaiianSolt, setHawaiianSolt] = useState(0)
  const setHawaiianSoltMethod = (event) => {
    event.preventDefault();
    setHawaiianSolt(event.target.value);
  };
  console.log(hawaiianSolt)

  // ハワイアンマヨネーズ
  const [hawaiianMayonnaise, setHawaiianMayonnaise] = useState(0)
  const setHawaiianMayonnaiseMethod = (event) => {
    event.preventDefault();
    setHawaiianMayonnaise(event.target.value);
  };
  console.log(hawaiianMayonnaise)

  // ハワイアントマト
  const [hawaiianTomato, setHawaiianTomato] = useState(0)
  const setHawaiianTomatoMethod = (event) => {
    event.preventDefault();
    setHawaiianTomato(event.target.value);
  };
  console.log(hawaiianTomato)

  // ブルーチーズ
  const [blueCheese, setBlueCheese] = useState(0)
  const setBlueCheeseMethod = (event) => {
    event.preventDefault();
    setBlueCheese(event.target.value);
  };
  console.log(blueCheese)

  // ハワイアンチョコレート
  const [hawaiianChocolate, setHawaiianChocolate] = useState(0)
  const setHawaiianChocolateMethod = (event) => {
    event.preventDefault();
    setHawaiianChocolate(event.target.value);
  };
  console.log(hawaiianChocolate)

  // アンチョビ
  const [anchovy, setAnchovy] = useState(0)
  const setAnchovyMethod = (event) => {
    event.preventDefault();
    setAnchovy(event.target.value);
  };
  console.log(anchovy)

  // えび
  const [shrimp, setShrimp] = useState(0)
  const setShrimpMethod = (event) => {
    event.preventDefault();
    setShrimp(event.target.value);
  };
  console.log(shrimp)

  // ガーリックライス
  const [garlicRice, setGarlicRice] = useState(0)
  const setGarlicRiceMethod = (event) => {
    event.preventDefault();
    setGarlicRice(event.target.value);
  };
  console.log(hawaiianChocolate)

  // トロピカルフルーツ
  const [tropicalFruits, setTropicalFruits] = useState(0)
  const setTropicalFruitsMethod = (event) => {
    event.preventDefault();
    setTropicalFruits(event.target.value);
  };
  console.log(tropicalFruits)

  // ハワイ産蜂蜜
  const [hawaiianHoney, setHawaiianHoney] = useState(0)
  const setHawaiianHoneyMethod = (event) => {
    event.preventDefault();
    setHawaiianHoney(event.target.value);
  };
  console.log(tropicalFruits)

  // ココナッツ
  const [coconut, setCoconut] = useState(0)
  const setCoconutMethod = (event) => {
    event.preventDefault();
    setCoconut(event.target.value);
  };
  console.log(coconut)

  // マンゴー
  const [mango, setMango] = useState(0)
  const setMangoMethod = (event) => {
    event.preventDefault();
    setMango(event.target.value);
  };
  console.log(mango)

  // パイナップル
  const [pineapple, setPineapple] = useState(0)
  const setPineappleMethod = (event) => {
    event.preventDefault();
    setPineapple(event.target.value);
  };
  console.log(pineapple)

  // もち
  const [mochi, setMochi] = useState(0)
  const setMochiMethod = (event) => {
    event.preventDefault();
    setMochi(event.target.value);
  };
  console.log(mochi)

  // コーヒー
  const [coffee, setCoffee] = useState(0)
  const setCoffeeMethod = (event) => {
    event.preventDefault();
    setCoffee(event.target.value);
  };
  console.log(coffee)

  // スプライト
  const [sprite, setSprite] = useState(0)
  const setSpriteMethod = (event) => {
    event.preventDefault();
    setSprite(event.target.value);
  };
  console.log(sprite)

  // ジンジャーエール
  const [gingerAle, setGingerAle] = useState(0)
  const setGingerAleMethod = (event) => {
    event.preventDefault();
    setGingerAle(event.target.value);
  };
  console.log(gingerAle)

  // コーラ
  const [cola, setCola] = useState(0)
  const setColaMethod = (event) => {
    event.preventDefault();
    setCola(event.target.value);
  };
  console.log(gingerAle)



  return (
    <>
      <div className={classes.flex}>
        {/* ハワイアンソルト */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[0].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hawaiianSolt}
            onChange={setHawaiianSoltMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[0].Msize}>M：{toppingState[0].Msize}円  </MenuItem>
            <MenuItem value={toppingState[0].Lsize}>L：{toppingState[0].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ハワイヤンマヨネーズ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[1].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hawaiianMayonnaise}
            onChange={setHawaiianMayonnaiseMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[1].Msize}>M：{toppingState[1].Msize}円  </MenuItem>
            <MenuItem value={toppingState[1].Lsize}>L：{toppingState[1].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ハワイアントマト */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[2].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hawaiianTomato}
            onChange={setHawaiianTomatoMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[2].Msize}>M：{toppingState[2].Msize}円  </MenuItem>
            <MenuItem value={toppingState[2].Lsize}>L：{toppingState[2].Lsize}円 </MenuItem>
          </Select>
        </FormControl>


        {/* ブルーチーズ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[3].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={blueCheese}
            onChange={setBlueCheeseMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[3].Msize}>M：{toppingState[3].Msize}円  </MenuItem>
            <MenuItem value={toppingState[3].Lsize}>L：{toppingState[3].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ハワイアンチョコレート */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[4].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hawaiianChocolate}
            onChange={setHawaiianChocolateMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[4].Msize}>M：{toppingState[4].Msize}円  </MenuItem>
            <MenuItem value={toppingState[4].Lsize}>L：{toppingState[4].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* アンチョビ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[5].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={anchovy}
            onChange={setAnchovy}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[5].Msize}>M：{toppingState[5].Msize}円  </MenuItem>
            <MenuItem value={toppingState[5].Lsize}>L：{toppingState[5].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* えび */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[6].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={shrimp}
            onChange={setShrimpMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[6].Msize}>M：{toppingState[6].Msize}円  </MenuItem>
            <MenuItem value={toppingState[6].Lsize}>L：{toppingState[6].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ガーリックスライス */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[7].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={garlicRice}
            onChange={setGarlicRiceMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[7].Msize}>M：{toppingState[7].Msize}円  </MenuItem>
            <MenuItem value={toppingState[7].Lsize}>L：{toppingState[7].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* トロピカルフルーツ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[8].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tropicalFruits}
            onChange={setTropicalFruitsMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[8].Msize}>M：{toppingState[8].Msize}円  </MenuItem>
            <MenuItem value={toppingState[8].Lsize}>L：{toppingState[8].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ハワイ蜂蜜 */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[9].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={hawaiianHoney}
            onChange={setHawaiianHoneyMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[9].Msize}>M：{toppingState[9].Msize}円  </MenuItem>
            <MenuItem value={toppingState[9].Lsize}>L：{toppingState[9].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ココナッツ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[10].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coconut}
            onChange={setCoconut}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[10].Msize}>M：{toppingState[10].Msize}円  </MenuItem>
            <MenuItem value={toppingState[10].Lsize}>L：{toppingState[10].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* マンゴー */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[11].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mango}
            onChange={setMangoMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[11].Msize}>M：{toppingState[11].Msize}円  </MenuItem>
            <MenuItem value={toppingState[11].Lsize}>L：{toppingState[11].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* パイナップル */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[12].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pineapple}
            onChange={setPineapple}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[12].Msize}>M：{toppingState[12].Msize}円  </MenuItem>
            <MenuItem value={toppingState[12].Lsize}>L：{toppingState[12].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* もち */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[13].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mochi}
            onChange={setMochiMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[13].Msize}>M：{toppingState[13].Msize}円  </MenuItem>
            <MenuItem value={toppingState[13].Lsize}>L：{toppingState[13].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* コーヒー */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[14].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coffee}
            onChange={setCoffee}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[14].Msize}>M：{toppingState[14].Msize}円  </MenuItem>
            <MenuItem value={toppingState[14].Lsize}>L：{toppingState[14].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* スプライト */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[15].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sprite}
            onChange={setSpriteMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[15].Msize}>M：{toppingState[15].Msize}円  </MenuItem>
            <MenuItem value={toppingState[15].Lsize}>L：{toppingState[15].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* ジンジャーエール */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[16].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gingerAle}
            onChange={setGingerAleMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[16].Msize}>M：{toppingState[16].Msize}円  </MenuItem>
            <MenuItem value={toppingState[16].Lsize}>L：{toppingState[16].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* コーラ */}
        <FormControl className={classes.formControl}>
          <span>{toppingState[17].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cola}
            onChange={setColaMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[17].Msize}>M：{toppingState[17].Msize}円  </MenuItem>
            <MenuItem value={toppingState[17].Lsize}>L：{toppingState[17].Lsize}円 </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}