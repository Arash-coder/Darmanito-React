import React from 'react';

import style from './Aboutsite.module.scss';
import about from '../../../assets/images/about.PNG';
import search from '../../../assets/images/search.PNG';
import easy from '../../../assets/images/easy.PNG';
import low from '../../../assets/images/low-price.PNG';
import fast from '../../../assets/images/fast-search.PNG';

const Aboutsite = (props)=>(
    <main className={props.className}>
        <main className={style.main}>
        <section className={style.section}>
            <h1 className={style.title}>درباره درمانیتو</h1><br/>
            <p>درمانیتو یک سامانه است که امکان سفارش دارو،محصولات آرایشی بهداشتی نوبت گیری و مشاور پزشکان را به راحتی و به صورت آنلاین فراهم کرده است</p>
            <div className={style.grid}>
                <div className={style.griditem}>
                    <div className={style.pic}>
                        <img src={search} alt="search"/>
                    </div>
                    <p>جستجو سریع</p>
                </div>
                <div className={style.griditem}>
                    <div className={style.pic}>
                        <img src={easy} alt="easy"/>
                    </div>
                    <p>راحت</p>
                </div>
                <div className={style.griditem}>
                    <div className={style.pic}>
                        <img src={low} alt="low"/>
                    </div>
                    <p>به صرفه</p>
                </div>
                <div className={style.griditem}>
                    <div className={style.pic}>
                        <img src={fast} alt="fast"/>
                    </div>
                    <p>جستجو سریع</p>
                </div>
            </div>
        </section>
        <img className={style.about} src={about} alt="about"/>
    </main>
    </main>
);

export default Aboutsite;