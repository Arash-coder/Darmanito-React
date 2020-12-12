import React from 'react';
import style from './Page1.module.scss';


const Page1 = (props) => {
    return (
        <main className={style.main} >
            <div className={style.flex}>
                <div>
                    <img src={props.pic} alt="image" />
                </div>
                <div className={style.margin}>
                    <h4>نام داروخانه</h4>
                    <h5>{props.formik.values.nameofpharmacy}</h5>
                </div>
            </div>
            <div className={style.grid}>
                <div className={style.grid_item}>
                    <h4>نام داروخانه</h4>
                    <h5>{props.formik.values.nameofpharmacy}</h5>
                </div>
                <div className={style.grid_item}>
                    <h4>شماره داروخانه</h4>
                    <h5>{props.formik.values.numberofpharmacy}</h5>
                </div>
                <div className={style.grid_item}>
                    <h4>شهر</h4>
                    <h5>{props.formik.values.city}</h5>
                </div>
                <div className={style.grid_item1}>
                    <h4>منطقه</h4>
                    <h5>{props.formik.values.region}</h5>
                </div>
                <div className={style.grid_item1}>
                    <h4>ساعت کاری</h4>
                    <h5>شبانه روزی</h5>
                </div>
            </div>
            <div className={style.ad}>
                <h4>آدرس دقیق</h4>
                <h5> {props.formik.values.address}</h5>
            </div>
            <div className={style.flex1}>
                <div>
                    <h4>نام و نام خانوادگی موسس</h4>
                    <h5>{props.formik.values.nameofmanager}</h5>
                </div>
                <div className={style.margin1}>
                    <h4>شماره نظام مهندسی</h4>
                    <h5>{props.formik.values.shomarenezam}</h5>
                </div>
            </div>
            <div className={style.flex3}>
                <button className={style.btn1} onClick={props.clicked}>ویرایش اطلاعات</button>
                <button className={style.btn2} type="submit">تکمیل ثبت نام</button>
            </div>
        </main>
    );
}

export default Page1;