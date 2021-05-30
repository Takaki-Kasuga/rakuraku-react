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

// アクションズをインポート
import { selectedToppings } from '../actions/index'

const useStyles = makeStyles((theme) => ({
  // セレクトボックス
  formControl: {
    margin: theme.spacing(1),
    'width': '150px',
  },
  flex: {
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'center',
  },
  textPSize: {
    'font-size': '12px',
  }
}));


export const ToppingItems = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const toppingState = useSelector((state) => state.toppingState)
  const selectedToppingState = useSelector((state) => state.selectedToppingState)
  console.log(toppingState)


  const [hawaiianSolt, setHawaiianSolt] = useState(0)
  const setHawaiianSoltMethod = (event) => {
    event.preventDefault();
    setHawaiianSolt(event.target.value);
  };

  useEffect(() => {
    const hawaiianSoltObject = {
      id: 1,
      toppingPrice: hawaiianSolt,
      toppigName: "ハワイアンソルト"
    }
    dispatch(selectedToppings(hawaiianSoltObject))
    console.log(selectedToppingState)
  }, [hawaiianSolt])



  // ハワイアンマヨネーズ
  const [hawaiianMayonnaise, setHawaiianMayonnaise] = useState(0)
  const setHawaiianMayonnaiseMethod = (event) => {
    event.preventDefault();
    setHawaiianMayonnaise(event.target.value);
  };

  useEffect(() => {
    const hawaiianMayonnaiseObject = {
      id: 2,
      toppingPrice: hawaiianMayonnaise,
      toppigName: "ハワイアンマヨネーズ"
    }
    dispatch(selectedToppings(hawaiianMayonnaiseObject))
    console.log(hawaiianMayonnaise)
  }, [hawaiianMayonnaise])

  // ハワイアントマト
  const [hawaiianTomato, setHawaiianTomato] = useState(0)
  const setHawaiianTomatoMethod = (event) => {
    event.preventDefault();
    setHawaiianTomato(event.target.value);
  };

  useEffect(() => {
    const hawaiianTomatoObject = {
      id: 3,
      toppingPrice: hawaiianTomato,
      toppigName: "ハワイアントマト"
    }
    dispatch(selectedToppings(hawaiianTomatoObject))
    console.log(hawaiianTomato)
  }, [hawaiianTomato])

  // ブルーチーズ
  const [blueCheese, setBlueCheese] = useState(0)
  const setBlueCheeseMethod = (event) => {
    event.preventDefault();
    setBlueCheese(event.target.value);
  };

  useEffect(() => {
    const blueCheeseObject = {
      id: 4,
      toppingPrice: blueCheese,
      toppigName: "ブルーチーズ"
    }
    dispatch(selectedToppings(blueCheeseObject))
    console.log(blueCheese)
  }, [blueCheese])

  // ハワイアンチョコレート
  const [hawaiianChocolate, setHawaiianChocolate] = useState(0)
  const setHawaiianChocolateMethod = (event) => {
    event.preventDefault();
    setHawaiianChocolate(event.target.value);
  };

  useEffect(() => {
    const hawaiianChocolateObject = {
      id: 5,
      toppingPrice: hawaiianChocolate,
      toppigName: "ハワイアンチョコレート"
    }
    dispatch(selectedToppings(hawaiianChocolateObject))
    console.log(hawaiianChocolate)
  }, [hawaiianChocolate])


  // アンチョビ
  const [anchovy, setAnchovy] = useState(0)
  const setAnchovyMethod = (event) => {
    event.preventDefault();
    setAnchovy(event.target.value);
  };

  useEffect(() => {
    const anchovyObject = {
      id: 6,
      toppingPrice: anchovy,
      toppigName: "アンチョビ"
    }
    dispatch(selectedToppings(anchovyObject))
    console.log(anchovy)
  }, [anchovy])

  // えび
  const [shrimp, setShrimp] = useState(0)
  const setShrimpMethod = (event) => {
    event.preventDefault();
    setShrimp(event.target.value);
  };

  useEffect(() => {
    const shrimpObject = {
      id: 7,
      toppingPrice: shrimp,
      toppigName: "エビ"
    }
    dispatch(selectedToppings(shrimpObject))
    console.log(shrimp)
  }, [shrimp])

  // ガーリックライス
  const [garlicRice, setGarlicRice] = useState(0)
  const setGarlicRiceMethod = (event) => {
    event.preventDefault();
    setGarlicRice(event.target.value);
  };

  useEffect(() => {
    const garlicRiceObject = {
      id: 8,
      toppingPrice: garlicRice,
      toppigName: "ガーリックスライス"
    }
    dispatch(selectedToppings(garlicRiceObject))
    console.log(garlicRice)
  }, [garlicRice])

  // トロピカルフルーツ
  const [tropicalFruits, setTropicalFruits] = useState(0)
  const setTropicalFruitsMethod = (event) => {
    event.preventDefault();
    setTropicalFruits(event.target.value);
  };

  useEffect(() => {
    const tropicalFruitsObject = {
      id: 9,
      toppingPrice: tropicalFruits,
      toppigName: "トロピカルフルーツ"
    }
    dispatch(selectedToppings(tropicalFruitsObject))
    console.log(tropicalFruits)
  }, [tropicalFruits])

  // ハワイ産蜂蜜
  const [hawaiianHoney, setHawaiianHoney] = useState(0)
  const setHawaiianHoneyMethod = (event) => {
    event.preventDefault();
    setHawaiianHoney(event.target.value);
  };

  useEffect(() => {
    const hawaiianHoneyObject = {
      id: 10,
      toppingPrice: hawaiianHoney,
      toppigName: "ハワイ産はちみつ"
    }
    dispatch(selectedToppings(hawaiianHoneyObject))
    console.log(hawaiianHoney)
  }, [hawaiianHoney])

  // ココナッツ
  const [coconut, setCoconut] = useState(0)
  const setCoconutMethod = (event) => {
    event.preventDefault();
    setCoconut(event.target.value);
  };

  useEffect(() => {
    const coconutObject = {
      id: 11,
      toppingPrice: coconut,
      toppigName: "ココナッツ"
    }
    dispatch(selectedToppings(coconutObject))
    console.log(coconut)
  }, [coconut])

  // マンゴー
  const [mango, setMango] = useState(0)
  const setMangoMethod = (event) => {
    event.preventDefault();
    setMango(event.target.value);
  };

  useEffect(() => {
    const mangoObject = {
      id: 12,
      toppingPrice: mango,
      toppigName: "マンゴー"
    }
    dispatch(selectedToppings(mangoObject))
    console.log(mango)
  }, [mango])

  // パイナップル
  const [pineapple, setPineapple] = useState(0)
  const setPineappleMethod = (event) => {
    event.preventDefault();
    setPineapple(event.target.value);
  };

  useEffect(() => {
    const pineappleObject = {
      id: 13,
      toppingPrice: pineapple,
      toppigName: "パイナップル"
    }
    dispatch(selectedToppings(pineappleObject))
    console.log(pineapple)
  }, [pineapple])

  // もち
  const [mochi, setMochi] = useState(0)
  const setMochiMethod = (event) => {
    event.preventDefault();
    setMochi(event.target.value);
  };

  useEffect(() => {
    const mochiObject = {
      id: 14,
      toppingPrice: mochi,
      toppigName: "もち"
    }
    dispatch(selectedToppings(mochiObject))
    console.log(mochi)
  }, [mochi])

  // コーヒー
  const [coffee, setCoffee] = useState(0)
  const setCoffeeMethod = (event) => {
    event.preventDefault();
    setCoffee(event.target.value);
  };

  useEffect(() => {
    const coffeeObject = {
      id: 15,
      toppingPrice: coffee,
      toppigName: "コーヒー"
    }
    dispatch(selectedToppings(coffeeObject))
    console.log(coffee)
  }, [coffee])

  // スプライト
  const [sprite, setSprite] = useState(0)
  const setSpriteMethod = (event) => {
    event.preventDefault();
    setSprite(event.target.value);
  };

  useEffect(() => {
    const spriteObject = {
      id: 16,
      toppingPrice: sprite,
      toppigName: "スプライト"
    }
    dispatch(selectedToppings(spriteObject))
    console.log(sprite)
  }, [sprite])

  // ジンジャーエール
  const [gingerAle, setGingerAle] = useState(0)
  const setGingerAleMethod = (event) => {
    event.preventDefault();
    setGingerAle(event.target.value);
  };

  useEffect(() => {
    const gingerAleObject = {
      id: 17,
      toppingPrice: gingerAle,
      toppigName: "ジンジャエール"
    }
    dispatch(selectedToppings(gingerAleObject))
    console.log(gingerAle)
  }, [gingerAle])

  // コーラ
  const [cola, setCola] = useState(0)
  const setColaMethod = (event) => {
    event.preventDefault();
    setCola(event.target.value);
  };

  useEffect(() => {
    const colaObject = {
      id: 18,
      toppingPrice: cola,
      toppigName: "コーラ"
    }
    dispatch(selectedToppings(colaObject))
    console.log(cola)
  }, [cola])

  console.log(toppingState)
  console.log(toppingState[1].Lsize)
  console.log('ああああ')


  return (
    <>
      <div className={classes.flex}>
        {/* ハワイアンソルト */}
        <FormControl className={classes.formControl}>
          <span className={classes.textPSize}>{toppingState[0].name}</span>
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
          <span className={classes.textPSize}>{toppingState[1].name}</span>
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
          <span className={classes.textPSize}>{toppingState[2].name}</span>
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
          <span className={classes.textPSize}>{toppingState[3].name}</span>
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
          <span className={classes.textPSize}>{toppingState[4].name}</span>
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
          <span className={classes.textPSize}>{toppingState[5].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={anchovy}
            onChange={setAnchovyMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[5].Msize}>M：{toppingState[5].Msize}円  </MenuItem>
            <MenuItem value={toppingState[5].Lsize}>L：{toppingState[5].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* えび */}
        <FormControl className={classes.formControl}>
          <span className={classes.textPSize}>{toppingState[6].name}</span>
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
          <span className={classes.textPSize}>{toppingState[7].name}</span>
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
          <span className={classes.textPSize}>{toppingState[8].name}</span>
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
          <span className={classes.textPSize}>{toppingState[9].name}</span>
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
          <span className={classes.textPSize}>{toppingState[10].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coconut}
            onChange={setCoconutMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[10].Msize}>M：{toppingState[10].Msize}円  </MenuItem>
            <MenuItem value={toppingState[10].Lsize}>L：{toppingState[10].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* マンゴー */}
        <FormControl className={classes.formControl}>
          <span className={classes.textPSize}>{toppingState[11].name}</span>
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
          <span className={classes.textPSize}>{toppingState[12].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={pineapple}
            onChange={setPineappleMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[12].Msize}>M：{toppingState[12].Msize}円  </MenuItem>
            <MenuItem value={toppingState[12].Lsize}>L：{toppingState[12].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* もち */}
        <FormControl className={classes.formControl}>
          <span className={classes.textPSize}>{toppingState[13].name}</span>
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
          <span className={classes.textPSize}>{toppingState[14].name}</span>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={coffee}
            onChange={setCoffeeMethod}
          >
            <MenuItem value='0'></MenuItem>
            <MenuItem value={toppingState[14].Msize}>M：{toppingState[14].Msize}円  </MenuItem>
            <MenuItem value={toppingState[14].Lsize}>L：{toppingState[14].Lsize}円 </MenuItem>
          </Select>
        </FormControl>

        {/* スプライト */}
        <FormControl className={classes.formControl}>
          <span className={classes.textPSize}>{toppingState[15].name}</span>
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
          <span className={classes.textPSize}>{toppingState[16].name}</span>
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
          <span className={classes.textPSize}>{toppingState[17].name}</span>
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
