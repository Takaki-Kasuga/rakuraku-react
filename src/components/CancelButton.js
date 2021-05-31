import React from 'react';
import { connect } from 'react-redux';
import { cancel } from '../actions';

const CancelButton=(props)=>{
        return (
            <React.Fragment> 
                <buton onClick={props.cancel}>キャンセル</buton>
            </React.Fragment>
        )
 }
const mapStateToProps = state => ({
    val:state.orderHistory.val
})
const mapDispatchToProps = dispatch => ({
    cancel:()=>dispatch(cancel())
})

export default connect (mapStateToProps,mapDispatchToProps)(CancelButton)