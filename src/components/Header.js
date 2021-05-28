import React from 'react';
import { useHistory } from "react-router-dom";

//ロゴ画像
import logo from '../img/header_logo.png'

import { logout } from "../actions/index.js";
import { useDispatch } from "react-redux";

//マテリアルUIヘッダー
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
const Header =()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const style = {
        width :"157.2px",
        height:"25.2px",
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                    <a href="/"><img src={logo} style={style}/></a>
                    </Typography>
                        <Button color="secondary" onClick={()=>history.push('/useraccount')}>アカウント</Button>
                        <Button color="secondary" onClick={()=>history.push('/login')}>ログイン</Button>
                        <Button color="secondary" onClick={() => { dispatch(logout()) }}>ログアウト</Button>
                        <Button color="secondary"onClick={()=>history.push('/cartlist')}>ショッピングカート</Button>
                        <Button color="secondary"onClick={()=>history.push('/orderhistory')}>注文履歴</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}

export default Header;