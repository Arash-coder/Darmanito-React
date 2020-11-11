import React , {Component} from 'react';
import style from './Downloadapp2.module.scss';
import image from '../../assets/images/screenshot.png';
import android from '../../assets/images/android.svg';
import bazzarlogo from '../../assets/images/bazzar logo.svg';
import bazzartext from '../../assets/images/bazzar text.svg';
import sibapplogo from '../../assets/images/sib app logo.svg';
import sibapptext from '../../assets/images/sib app text.svg';


class Downloadapp2 extends Component {
    render(){
        return(
            <div className={style.main}>
                <div className={style.pic_section}>
                    <img className={style.pic_self} src={image} alt="image of app"/>
                </div>
                <div className={style.txt_section}>
                    <h1>دانلود اپلیکیشن درمانیتو</h1><br/>
                    <h3>برای دریافت لینک دانلود، شماره موبایل خود را وارد کنید</h3><br/>
                    <div className={style.input}>
                        <button><p>بفرست</p></button>
                        <input type="text" placeHolder="شماره همراه را وارد کنید"/>
                    </div>
                    <div className={style.btn_section}>
                        <div className={style.btn_item}>
                            <button className={style.sibapp}>
                                <section>
                                    <p>دریافت نسخه ios از</p>
                                    <img className={style.logotext} src={sibapptext} alt="sibapptext"/>
                                </section>
                                <img className={style.logosib} src={sibapplogo} alt="sibapplogo"/>
                            </button>
                        </div>
                        <div className={style.btn_item}>
                            <button className={style.bazzar}>
                                <img className={style.logobazar} src={bazzarlogo} alt="bazzarlogo"/>
                                <img className={style.textbazar} src={bazzartext} alt="bazzartext"/>
                                <p>دریافت از </p>
                            </button>
                        </div>
                        <div className={style.btn_item}>
                            <button className={style.android}>
                                <p>دانلود مستقیم</p>
                                <img src={android} alt="android logo"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Downloadapp2;