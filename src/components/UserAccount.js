import React from 'react';

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