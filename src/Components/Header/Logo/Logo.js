import React from 'react';
import logo from '../../../assets/images/brand.png';
import style from './Logo.module.scss';

const Logo =(props)=>(
    <div className={style.div}>
            <p> درمانیتو<br/> <span>همراه شما در زمان</span></p>
        <img src={logo} alt="Logo"/>
    </div>
);

export default Logo;