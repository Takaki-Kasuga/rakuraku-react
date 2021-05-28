import React from 'react';
import {useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

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

function createData(username, useremail) {
  return { username,useremail};
}

const rows = [
  createData('ユーザーの名前','ユーザーのメールアドレス')
];

const useStyles = makeStyles(() => ({
    root:{
        width: '100%',
        overflowX:'auto',
    },
    table: {
        minWidth: 650,
      },
  }));


const UserAccount =()=>{
    const history = useHistory();
    const classes = useStyles();
    // const props = this.props
    return (
        <React.Fragment>
            <Grid alignItems="center" justify="center">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="static">UserName</TableCell>
                        <TableCell align="static">UserEmail</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.username}>
                            <TableCell component="th" scope="row">
                                {row.username}
                            </TableCell>
                            <TableCell align="static">{row.useremail}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
            <Grid container alignItems="center" justify="center">
                <Grid> 
                    <Button variant="outlined" color="default" onClick={()=>history.push('/')}>トップ画面を表示する</Button>
                </Grid> 
            </Grid>
            {/* <p>{props.userName}</p> */}
        </React.Fragment>
    )}
// }
// const mapStateToProps = state =>({
//     userName: state.userIdState.name
// })

export default UserAccount;