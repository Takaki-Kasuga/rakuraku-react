import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

//ロゴ画像
import logo from '../img/header_logo.png'

import { logout } from "../actions/index.js";
import { useDispatch, useSelector } from "react-redux";

//マテリアルUIヘッダー
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import firebase from '../firebase/firebase';

import { deleteAllOrder, deleteAllOrderItems } from '../actions/index'

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

const getState = (state) => state.userIdState.login_user;

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const style = {
        width: "157.2px",
        height: "25.2px",
        cursor: 'pointer'
    }

    const stateContent = useSelector(getState);
    const [loginUser, setLoginUser] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            setLoginUser(stateContent);
        })
    }, [stateContent]);


    const LoginOrLogout = (props) => {
        const clickLogout = () => {
            dispatch(logout());
            dispatch(deleteAllOrder());
            dispatch(deleteAllOrderItems());
            history.push("/");
        };
        if (props.user === true) {
            return (
                <React.Fragment>
                    <Button color="secondary" onClick={() => history.push('/useraccount')}>アカウント</Button>
                    <Button color="secondary" onClick={() => { clickLogout(); }}>ログアウト</Button>
                </React.Fragment>
            )
        } else {
            return <Button color="secondary" onClick={() => history.push('/login')}>ログイン</Button>
        }
    }

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            <img src={logo} style={style} onClick={() => { history.push('/') }} />
                        </Typography>
                        <LoginOrLogout user={loginUser} />
                        <Button color="secondary" onClick={() => history.push('/cartlist')}>ショッピングカート</Button>
                        <Button color="secondary" onClick={() => history.push('/orderhistory')}>注文履歴</Button>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    )
}

export default Header;