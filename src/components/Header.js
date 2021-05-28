import React from 'react';

//ロゴ画像
import logo from '../img/header_logo.png'

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
    const classes = useStyles();
    const style = {
        width :"20%",
        height: "20%"
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
                    <Button color="secondary">Login</Button>
                    <Button color="secondary">Login</Button>
                    <Button color="secondary">Login</Button>
                    <Button color="secondary">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
                <ul>
                    <li><a href="/useraccount">アカウント</a></li>
                    <li><a href="/login">ログイン</a></li>
                    <li><a href="cartlist">ショッピングカート</a></li>
                    <li><a href="orderhistory">注文履歴</a></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Header;