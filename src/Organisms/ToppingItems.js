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


  const [hawaiianSolt, setHawaiianSolt] = useState(0)
  const setHawaiianSoltMethod = (event) => {
    event.preventDefault();
    setHawaiianSolt(event.target.value);
  };

  useEffect(() => {
    const hawaiianSoltObject = {
      id: 1,
      toppigName: "ハワイアンソルト",
    }

    if (hawaiianSolt === 200) {
      hawaiianSoltObject.toppingPriceM = hawaiianSolt
    } else if (hawaiianSolt === 300) {
      hawaiianSoltObject.toppingPriceL = hawaiianSolt
    } else if (hawaiianSolt === 0) {
      if (hawaiianSoltObject.toppingPriceM) {
        delete hawaiianSoltObject.toppingPriceM
      } else if (hawaiianSoltObject.toppingPriceL) {
        delete hawaiianSoltObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(hawaiianSoltObject))

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
      toppigName: "ハワイアンマヨネーズ"
    }

    if (hawaiianMayonnaise === 200) {
      hawaiianMayonnaiseObject.toppingPriceM = hawaiianMayonnaise
    } else if (hawaiianMayonnaise === 300) {
      hawaiianMayonnaiseObject.toppingPriceL = hawaiianMayonnaise
    } else if (hawaiianMayonnaise === 0) {
      if (hawaiianMayonnaiseObject.toppingPriceM) {
        delete hawaiianMayonnaiseObject.toppingPriceM
      } else if (hawaiianMayonnaiseObject.toppingPriceL) {
        delete hawaiianMayonnaiseObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(hawaiianMayonnaiseObject))
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
      toppigName: "ハワイアントマト"
    }

    if (hawaiianTomato === 200) {
      hawaiianTomatoObject.toppingPriceM = hawaiianTomato
    } else if (hawaiianTomato === 300) {
      hawaiianTomatoObject.toppingPriceL = hawaiianTomato
    } else if (hawaiianTomato === 0) {
      if (hawaiianTomatoObject.toppingPriceM) {
        delete hawaiianTomatoObject.toppingPriceM
      } else if (hawaiianTomatoObject.toppingPriceL) {
        delete hawaiianTomatoObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(hawaiianTomatoObject))
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
      toppigName: "ブルーチーズ"
    }

    if (blueCheese === 200) {
      blueCheeseObject.toppingPriceM = blueCheese
    } else if (blueCheese === 300) {
      blueCheeseObject.toppingPriceL = blueCheese
    } else if (blueCheese === 0) {
      if (blueCheeseObject.toppingPriceM) {
        delete blueCheeseObject.toppingPriceM
      } else if (blueCheeseObject.toppingPriceL) {
        delete blueCheeseObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(blueCheeseObject))
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
      toppigName: "ハワイアンチョコレート"
    }

    if (hawaiianChocolate === 200) {
      hawaiianChocolateObject.toppingPriceM = hawaiianChocolate
    } else if (hawaiianChocolate === 300) {
      hawaiianChocolateObject.toppingPriceL = hawaiianChocolate
    } else if (hawaiianChocolate === 0) {
      if (hawaiianChocolateObject.toppingPriceM) {
        delete hawaiianChocolateObject.toppingPriceM
      } else if (hawaiianChocolateObject.toppingPriceL) {
        delete hawaiianChocolateObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(hawaiianChocolateObject))
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
      toppigName: "アンチョビ"
    }

    if (anchovy === 200) {
      anchovyObject.toppingPriceM = anchovy
    } else if (anchovy === 300) {
      anchovyObject.toppingPriceL = anchovy
    } else if (anchovy === 0) {
      if (anchovyObject.toppingPriceM) {
        delete anchovyObject.toppingPriceM
      } else if (anchovyObject.toppingPriceL) {
        delete anchovyObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(anchovyObject))
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
      toppigName: "エビ"
    }

    if (shrimp === 200) {
      shrimpObject.toppingPriceM = shrimp
    } else if (shrimp === 300) {
      shrimpObject.toppingPriceL = shrimp
    } else if (shrimp === 0) {
      if (shrimpObject.toppingPriceM) {
        delete shrimpObject.toppingPriceM
      } else if (shrimpObject.toppingPriceL) {
        delete shrimpObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(shrimpObject))
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
      toppigName: "ガーリックスライス"
    }

    if (garlicRice === 200) {
      garlicRiceObject.toppingPriceM = garlicRice
    } else if (garlicRice === 300) {
      garlicRiceObject.toppingPriceL = garlicRice
    } else if (garlicRice === 0) {
      if (garlicRiceObject.toppingPriceM) {
        delete garlicRiceObject.toppingPriceM
      } else if (garlicRiceObject.toppingPriceL) {
        delete garlicRiceObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(garlicRiceObject))
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
      toppigName: "トロピカルフルーツ"
    }

    if (tropicalFruits === 200) {
      tropicalFruitsObject.toppingPriceM = tropicalFruits
    } else if (tropicalFruits === 300) {
      tropicalFruitsObject.toppingPriceL = tropicalFruits
    } else if (tropicalFruits === 0) {
      if (tropicalFruitsObject.toppingPriceM) {
        delete tropicalFruitsObject.toppingPriceM
      } else if (tropicalFruitsObject.toppingPriceL) {
        delete tropicalFruitsObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(tropicalFruitsObject))
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
      toppigName: "ハワイ産はちみつ"
    }

    if (hawaiianHoney === 200) {
      hawaiianHoneyObject.toppingPriceM = hawaiianHoney
    } else if (hawaiianHoney === 300) {
      hawaiianHoneyObject.toppingPriceL = hawaiianHoney
    } else if (hawaiianHoney === 0) {
      if (hawaiianHoneyObject.toppingPriceM) {
        delete hawaiianHoneyObject.toppingPriceM
      } else if (hawaiianHoneyObject.toppingPriceL) {
        delete hawaiianHoneyObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(hawaiianHoneyObject))
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
      toppigName: "ココナッツ"
    }

    if (coconut === 200) {
      coconutObject.toppingPriceM = coconut
    } else if (coconut === 300) {
      coconutObject.toppingPriceL = coconut
    } else if (coconut === 0) {
      if (coconutObject.toppingPriceM) {
        delete coconutObject.toppingPriceM
      } else if (coconutObject.toppingPriceL) {
        delete coconutObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(coconutObject))
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
      toppigName: "マンゴー"
    }

    if (mango === 200) {
      mangoObject.toppingPriceM = mango
    } else if (mango === 300) {
      mangoObject.toppingPriceL = mango
    } else if (mango === 0) {
      if (mangoObject.toppingPriceM) {
        delete mangoObject.toppingPriceM
      } else if (mangoObject.toppingPriceL) {
        delete mangoObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(mangoObject))
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
      toppigName: "パイナップル"
    }

    if (pineapple === 200) {
      pineappleObject.toppingPriceM = pineapple
    } else if (pineapple === 300) {
      pineappleObject.toppingPriceL = pineapple
    } else if (pineapple === 0) {
      if (pineappleObject.toppingPriceM) {
        delete pineappleObject.toppingPriceM
      } else if (pineappleObject.toppingPriceL) {
        delete pineappleObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(pineappleObject))
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
      toppigName: "もち"
    }

    if (mochi === 200) {
      mochiObject.toppingPriceM = mochi
    } else if (mochi === 300) {
      mochiObject.toppingPriceL = mochi
    } else if (mochi === 0) {
      if (mochiObject.toppingPriceM) {
        delete mochiObject.toppingPriceM
      } else if (mochiObject.toppingPriceL) {
        delete mochiObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(mochiObject))
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
      toppigName: "コーヒー"
    }

    if (coffee === 200) {
      coffeeObject.toppingPriceM = coffee
    } else if (coffee === 300) {
      coffeeObject.toppingPriceL = coffee
    } else if (coffee === 0) {
      if (coffeeObject.toppingPriceM) {
        delete coffeeObject.toppingPriceM
      } else if (coffeeObject.toppingPriceL) {
        delete coffeeObject.toppingPriceL
      }
    }


    dispatch(selectedToppings(coffeeObject))
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
      toppigName: "スプライト"
    }

    if (sprite === 200) {
      spriteObject.toppingPriceM = sprite
    } else if (sprite === 300) {
      spriteObject.toppingPriceL = sprite
    } else if (sprite === 0) {
      if (spriteObject.toppingPriceM) {
        delete spriteObject.toppingPriceM
      } else if (spriteObject.toppingPriceL) {
        delete spriteObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(spriteObject))
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
      toppigName: "ジンジャエール"
    }

    if (gingerAle === 200) {
      gingerAleObject.toppingPriceM = gingerAle
    } else if (gingerAle === 300) {
      gingerAleObject.toppingPriceL = gingerAle
    } else if (gingerAle === 0) {
      if (gingerAleObject.toppingPriceM) {
        delete gingerAleObject.toppingPriceM
      } else if (gingerAleObject.toppingPriceL) {
        delete gingerAleObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(gingerAleObject))
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
      toppigName: "コーラ"
    }

    if (cola === 200) {
      colaObject.toppingPriceM = cola
    } else if (cola === 300) {
      colaObject.toppingPriceL = cola
    } else if (cola === 0) {
      if (colaObject.toppingPriceM) {
        delete colaObject.toppingPriceM
      } else if (colaObject.toppingPriceL) {
        delete colaObject.toppingPriceL
      }
    }

    dispatch(selectedToppings(colaObject))
  }, [cola])


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
