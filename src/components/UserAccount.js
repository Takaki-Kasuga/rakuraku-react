import React from 'react';
import {useHistory, useHittory} from 'react-router-dom';

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(username, useremail) {
  return { username,useremail};
}

const rows = [
  createData('ユーザーの名前','ユーザーのメールアドレス')
];

const useStyles = makeStyles(() => ({
    table: {
        minWidth: 700,
      },
  }));

const UserAccount =()=>{
    const history = useHistory();
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid alignItems="center" justify="center">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>UserName</StyledTableCell>
                        <StyledTableCell align="static">UserEmail</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.username}>
                            <StyledTableCell component="th" scope="row">
                                {row.username}
                            </StyledTableCell>
                            <StyledTableCell align="static">{row.useremail}</StyledTableCell>
                        </StyledTableRow>
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
        </React.Fragment>
    )
}

export default UserAccount;