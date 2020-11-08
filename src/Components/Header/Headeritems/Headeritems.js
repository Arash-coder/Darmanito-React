import React from 'react';
import Headeritem from '../Headeritem/Headeritem';
import style from './Headeritems.module.scss';
import Logo from '../Logo/Logo';
import Downloadbutton from '../Downloadbutton/Downloadbutton';


const Headeritems = (props) =>{
    return(
        <ul className={style.ul}>
            <Headeritem><Downloadbutton >دانلود درمانیتو</Downloadbutton></Headeritem>
            <Headeritem style={style.li}>عضویت داروخانه ها</Headeritem>
            <Headeritem style={style.li}>تماس با ما</Headeritem>
            <Headeritem style={style.li}>درباره ما</Headeritem>
            <Headeritem style={style.li}>صفحه اصلی</Headeritem>
            <Headeritem><Logo /></Headeritem>
        </ul>
    );
};

export default Headeritems;