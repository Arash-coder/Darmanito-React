import React, { Component } from 'react';
import style from './Registeration.module.scss';

import image from '../../assets/images/footer.svg';


class Registeration extends Component{
    render(){
        return(
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.pic}>
                        <img src={image} alt="doctor"/>
                    </div>
                    <div className={style.text}>
                        <h1>عضویت داروخانه یا مراکز درمانی</h1><br/>
                        <h3>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان وکسب و کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</h3>
                        <br/>
                        <br/>
                        <br/>
                        <section className={style.input}>
                            <button><p>بفرست</p></button>
                            <input type="text" placeholder="شماره همراه را وارد کنید"/>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registeration;