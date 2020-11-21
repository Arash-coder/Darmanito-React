import React,{useState} from 'react';

import style from './Mainbody.module.scss';

import Downloadapp from './Downloadapp/Downloadapp';
import Aboutsite from './Aboutsite/Aboutsite';
import Posibilities from '../../Containers/Posibilities/Posibilities';
import Downloadapp2 from '../../Containers/Downloadapp2/Downloadapp2';
import Registeration from '../../Containers/Registeration/Registeration';
import Modal from '../../Containers/UI/Modals/Modal';
import Back from '../../Containers/UI/Back/Back';

const Mainbody = (props)=>{
    return(
        <div>
        <Downloadapp className={style.body} />
        <Aboutsite className={style.body} />
        <Posibilities className={style.body} />
        <Downloadapp2 onClick={props.onClick} />
        <Registeration onClick={props.onClick} className={style.body} />
    </div>
    )
}


export default Mainbody;