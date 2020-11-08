import React from 'react';
import Headeritem from '../Headeritem/Headeritem';
import style from './Headeritems.module.css';
import Logo from '../Logo/Logo';
import Downloadbutton from '../Downloadbutton/Downloadbutton';


const Headeritems = (props) =>{
    return(
        <ul className={style.ul}>
            <Downloadbutton >دانلود درمانیتو</Downloadbutton>
            <Headeritem>عضویت داروخانه ها</Headeritem>
            <Headeritem>تماس با ما</Headeritem>
            <Headeritem>درباره ما</Headeritem>
            <Headeritem>صفحه اصلی</Headeritem>
            <Logo />
        </ul>
    );
};

export default Headeritems;