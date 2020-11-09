import React from 'react';

import style from './Mainbody.module.scss';

import Downloadapp from './Downloadapp/Downloadapp';
import Aboutsite from './Aboutsite/Aboutsite';
import Posibilities from '../../Containers/Posibilities/Posibilities';

const Mainbody = (props)=>(
    <div className={style.body}>
        <Downloadapp />
        <Aboutsite />
        <Posibilities />
    </div>
);


export default Mainbody;