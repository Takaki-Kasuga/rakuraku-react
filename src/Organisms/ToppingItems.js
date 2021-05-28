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
            <MenuItem value='0'>なし</MenuItem>
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
            <MenuItem value='0'>なし</MenuItem>
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
            onChange={setHawaiianTomato}
          >
            <MenuItem value='0'>なし</MenuItem>
            <MenuItem value={toppingState[2].Msize}>M：{toppingState[2].Msize}円  </MenuItem>
            <MenuItem value={toppingState[2].Lsize}>L：{toppingState[2].Lsize}円 </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  )
}
