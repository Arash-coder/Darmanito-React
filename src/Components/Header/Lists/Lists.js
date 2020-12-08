import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './Lists.module.scss';
import { NavLink} from "react-router-dom";

const lists = [
    {name:'صفحه اصلی',to:'/'},
    {name:'درباره ما',to:'/FAQ'},
    {name:'تماس با ما',to:'/Contact_us'},
    {name:'عضویت داروخانه ها',to:'./Registeration'}
]


class Lists extends Component {

    
    render() {
        return (
            <Aux>
                <li className={style.none}>
                        <a className={style.btn} href="#">
                            دانلود درمانیتو
                        </a>
                </li>
                <div className={style.br}></div>
                {lists.map((key)=>(
                    // <li className={style.li}>
                    //     <NavLink to={key.to}>
                    //         {key.name}
                    //     </NavLink>
                    // </li>
                    <NavLink className={style.li} to={key.to} activeStyle={
                        {
                            borderBottom: "2px solid #1894ff",
                            color: "#1894ff"
                        }
                    }>
                        {key.name}
                    </NavLink>
                ))}
            </Aux>
        );
    }
}

export default Lists;