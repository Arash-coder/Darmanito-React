import React from 'react';

import style from './Mainbody.module.scss';

import Downloadapp from './Downloadapp/Downloadapp';

const Mainbody = (props)=>(
    <div className={style.body}>
        <Downloadapp />
    </div>
);


export default Mainbody;