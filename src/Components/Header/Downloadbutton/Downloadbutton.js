import React from 'react';
import style from './Downloadbutton.module.scss';

const Downloadbutton = (props)=>(
<button className={style.button}>{props.children}</button>
);


export default Downloadbutton;