import React from 'react';
import style from './Footer.module.scss';
import bazzarlogo from '../../assets/images/bazzar logo.svg';
import bazzartext from '../../assets/images/bazzar text.svg';
import sibapplogo from '../../assets/images/sib app logo.svg';
import sibapptext from '../../assets/images/sib app text.svg';
import Logo from '../Header/Logo/Logo';

const Footer = (props) =>(
    <div>
        <div className={style.bluesection}>
            <div>
                <p className={style.number}>پشتیبانی:44444444-021</p>
                {/* <img src="" alt=""/> */}
            </div>
            <div className={style.titleblue}>
                <p className={style.pad1}>پاسخگویی در روز های کاری از 9 صبح تا 9 شب</p>
                <p className={style.pad2}>پشتیبانی درمانیتو</p>
            </div>
        </div>
        <div className={style.mainfooter}>
            <div className={style.btndownload}>
                <h4>دانلود درمانیتو</h4>
                <section className={style.btnsection}>
                    <button className={style.sib}>
                        <section>
                            <p>دریافت نسخه ios  از</p>
                            <img className={style.sibtext} src={sibapptext} alt="sibapptext"/>
                        </section>
                        <img className={style.siblogo} src={sibapplogo} alt="sibapplogo"/>
                    </button>
                    <button className={style.bazzar}>
                        <img className={style.bazlogo} src={bazzarlogo} alt="bazzarlogo"/>
                        <img className={style.baztext} src={bazzartext} alt="bazzartext"/>
                        <p>دریافت از</p>
                    </button>
                </section>
            </div>
            <div className={style.uls}>
                <ul className={style.ul}>
                    <h4>صفحات درمانیتو</h4>
                    <li>
                        <a href="#">تماس با ما</a>
                    </li>
                    <li>
                        <a href="#">درباره ما</a>
                    </li>
                    <li>
                        <a href="#">سوالات متداول</a>
                    </li>
                    <li>
                        <a href="#">قوانین و شرایط</a>
                    </li>
                </ul>
                <ul>
                    <h4>خدمات درمانیتو</h4>
                    <li>
                        <a href="#">داروخانه آنلاین</a>
                    </li>
                    <li>
                        <a href="#">فروشکاه آنلاین</a>
                    </li>
                    <li>
                        <a href="#">ویزیت آنلاین</a>
                    </li>
                    <li>
                        <a href="#">پرونده پزشکی</a>
                    </li>
                </ul>
            </div>
            <div className={style.links}>
                <Logo />
                <h4>سوپر اپلیکیشن حوزه درمان و سلامت</h4>
                <h4>تمام حقوق مادی و معنوی این وبسایت متعلق به درمانیتو است</h4>
                <div className={style.linkicon}>
                    <a href="#">
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href="#">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href="#">
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;