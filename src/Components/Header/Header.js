import React from 'react';

import Headeritems from './Headeritems/Headeritems';
import style from './Header.module.scss';


const Header = (props)=>(
    <header className={style.header}>
        <Headeritems />
    </header>
);


export default Header;