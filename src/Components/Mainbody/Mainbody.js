import React from 'react';

import style from './Mainbody.module.scss';

import Downloadapp from './Downloadapp/Downloadapp';
import Aboutsite from './Aboutsite/Aboutsite';
import Posibilities from '../../Containers/Posibilities/Posibilities';
import Downloadapp2 from '../../Containers/Downloadapp2/Downloadapp2';

const Mainbody = (props)=>(
    <div>
        <Downloadapp className={style.body} />
        <Aboutsite className={style.body} />
        <Posibilities className={style.body} />
        <Downloadapp2 />
    </div>
);


export default Mainbody;