import React, { Component } from 'react';
import style from './Modal.module.scss'
import pic from '../../../assets/images/confirm.svg';
class Modal extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={this.props.className}>
                <div className={style.card}>
                    <img className={style.pic} src={pic} alt="pic"/>
                    <h3>ارسال موفق</h3>
                    <h4>لینک دانلود برای شما ارسال شد</h4>
                    <button onClick={this.props.onClick}>بستن</button>
                </div>
            </div>
        );
    }
}

export default Modal;