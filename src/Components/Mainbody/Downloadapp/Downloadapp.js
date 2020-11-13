import React from 'react';
import style from './Downloadapp.module.scss';
import doctor from '../../../assets/images/doctor.png';

const Downloadapp = (props)=>(
    <main className={props.className}>
        <main className={style.main}>
        <div>
            <img className={style.doc} src={doctor} alt="doctor"/>
        </div>
        <div className={style.area}>
            <div className={style.txtsection}>
                <p className={style.title}>اپلیکیشن درمانیتو</p>
                <p className={style.desc}>درمانیتو،سامانه هوشمند درمان و سلامت</p>
            </div>
            <div className={style.btnsection}>
                <button className={style.register}>عضویت داروخانه ها </button>
                <button className={style.download}>دانلود درمانیتو</button>
            </div>
        </div>
    </main>
    </main>
);


export default Downloadapp;