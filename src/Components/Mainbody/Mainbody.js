import React from 'react';

import style from './Mainbody.module.scss';

import Downloadapp from './Downloadapp/Downloadapp';
import Aboutsite from './Aboutsite/Aboutsite';

const Mainbody = (props)=>(
    <div className={style.body}>
        <Downloadapp />
        <Aboutsite />
    </div>
);


export default Mainbody;