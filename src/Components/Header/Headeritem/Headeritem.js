import React from 'react';
import style from './Headeritem.module.scss';

const Headeritem = (props) =>(
    <li className={style.li}>
        <a href="#">{props.children}</a>
    </li>
);


export default Headeritem;