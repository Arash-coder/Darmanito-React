import React, { Component } from 'react';

import style from './Pharmacy_Registeration.module.scss';
import Label from './Label/Label';
import Choose_register from './Choose_register/Choose_register';
import pic1 from '../../assets/images/market.svg';
import pic2 from '../../assets/images/health.svg';


class Pharmacy_Registeration extends Component {
    state={
        phonenum:null
    }
    valid=(event)=>{
        if(isNaN(event.target.value)){
            this.setState({phonenum:"لطفا عدد وارد کنید"})
        }
        else if(event.target.value.length > 11 || event.target.value.length < 11){
            this.setState({phonenum:"لطفا شماره را درست وارد کنید"})
        }
        else{
            this.setState({phonenum:null})
        }
    }
    render() {
        return (
            <main className={style.main}>
                <div className={style.grid}>
                    <div className={style.labels}>
                        <Label />
                        <Label className={style.label} />
                        <Label className={style.label2} />
                    </div>
                    <div className={style.padding}>
                        <div>
                            <h1 className={style.title}>شما هم در سلامت و بهبود مردم کشورمون موثر باشید</h1>
                            <h3 className={style.desc}>با ثبت نام به عنوان داروخانه یا فروشگاه و داروخانه شماهم به سیستم درمان کمک کنید و به هزاران کاربر خدمات ارئه بدین و روزانه درآمد سفارش های خودتون رو تسویه کنید</h3>
                            <div className={style.input_section}>
                                <button className={style.btn_confirm}><p>ثبت نام سریع</p></button>
                                <input placeholder="شماره همراه را وارد کنید" className={style.input} type="text" onChange={this.valid}  />
                            </div>
                            <p className={style.err}>{this.state.phonenum}</p>
                        </div>
                    </div>
                </div>
                <div className={style.blue_section}>
                    <div className={style.blue_item}>
                        <div>تعداد داروخانه و مراکز</div>
                        <div>+120,000</div>
                    </div>
                    <div className={style.blue_item}>
                        <div>تعداد داروخانه و مراکز</div>
                        <div>+120,000</div>
                    </div>
                    <div className={style.blue_item}>
                        <div>تعداد داروخانه و مراکز</div>
                        <div>+120,000</div>
                    </div>
                </div>
                <div className={style.register}>
                    <div>
                        <div className={style.second_title}>
                            <h2>
                                در درمانیتو چه خدماتی ارائه خواهید داد؟
                            </h2>
                        </div>
                        <div className={style.second_desc}>
                            <h3>
                                خدمت مورد نظر خود را برای ثبت نام انتخاب کنید
                            </h3>
                        </div>
                    </div>
                    <div className={style.choose_grid}>
                        <Choose_register
                         miner_title="فروشگاه آرایشی و بهداشتی"
                         miner_desc="مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم"
                         pic={pic2}
                         width={style.width} />
                         
                        <Choose_register
                         miner_title="داروخانه"
                         miner_desc="مایل هستم فقط به عنوان داروخانه فعالیت کنم و در بخش صرفا سفارش دارو با عکس نسخه به بیماران کمک رسانی کنم"
                         pic={pic2} />
                         
                    </div>
                </div>
            </main>
        )
    }
}

export default Pharmacy_Registeration;