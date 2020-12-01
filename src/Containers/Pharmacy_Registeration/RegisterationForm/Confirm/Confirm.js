import React from 'react';
import { Route } from 'react-router-dom';
import style from './Confirm.module.scss';
import pic from '../../../../assets/images/bazzar logo.svg';



const Confrim = (props) => {
    
    return (

        <main className={style.main}>
            <div className={style.first}>
                <div>
                    <img src={pic} alt="image" />
                </div>
                <div className={style.title_confirm}>
                    <h4>نام داروخانه</h4>
                    <h3>فلان داروخانه</h3>
                </div>
            </div>
            <div className={style.second}>
                <div className={style.second_item}>
                    <h4>نام داروخانه</h4>
                    <h3>فلان داروخانه</h3>
                </div>
                <div className={style.second_item}>
                    <h4>شماره داروخانه</h4>
                    <h3>021-34434434</h3>
                </div>
                <div className={style.second_item}>
                    <h4>شهر</h4>
                    <h3>تهران</h3>
                </div>
                <div className={style.second_item}>
                    <h4>منطقه</h4>
                    <h3>فلان منطقه</h3>
                </div>
                <div className={style.second_item}>
                    <h4>ساعت کاری</h4>
                    <h3>شبانه روزی</h3>
                </div>
            </div>
            <div className={style.third}>
                <h4>آدرس دقیق</h4>
                <h3>تهران و فلان فلان فبل فبلن منبیتسبنمت</h3>
            </div>
            <div className={style.fourth}>
                <div className={style.fourth_item}>
                    <h4>نام و نام خانوادگی موسس</h4>
                    <h3>آرش</h3>
                </div>
                <div className={[style.fourth_item,style.right].join(' ')}>
                    <h4>شماره نظام پزشکی</h4>
                    <h3>1234-ل</h3>
                </div>
            </div>
            <div className={style.fifth}>
                <button type="submit" className={style.change}>ویرایش اطلاعات</button>
                <button className={style.confrim}>تکمیل ثبت نام</button>
            </div>
        </main>

    )
}

export default Confrim;