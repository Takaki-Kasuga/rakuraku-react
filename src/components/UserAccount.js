import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";


//マテリアルUIテーブル
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//マテリアルUIボタン
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

const UserAccount = () => {
    const history = useHistory();
    const classes = useStyles();
    const getState = (state) => state;
    const stateContent = useSelector(getState);

    return (
        <React.Fragment>
            <h2>アカウント情報</h2>
            <Grid container alignItems="center" justify="center">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="static">UserName</TableCell>
                                <TableCell align="static">UserEmail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {stateContent.userIdState.name}
                                </TableCell>
                                <TableCell align="static">{stateContent.userIdState.email}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid container alignItems="center" justify="center">
                <Grid style={{ margin: 20 }}>
                    <Button variant="outlined" color="default" onClick={() => history.push('/')}>トップ画面を表示する</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}
export default UserAccount;