import React from 'react';

//マテリアルUIテーブル
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const UserAccount =()=>{
    return (
        <React.Fragment>
            <div>
                <h1>アカウント</h1>
                <table border="1">
                    <tr>
                        <th>UserName</th>
                        <th>UserEmail</th>
                    </tr>
                    <tr>
                        <td>ログインユーザの名前が入ります</td>
                        <td>ログインユーザーのメールアドレスが入ります</td>
                    </tr>
                </table>
                <a href="/"><button>トップ画面を表示する</button></a>
            </div>
        </React.Fragment>
    )
}

export default UserAccount;