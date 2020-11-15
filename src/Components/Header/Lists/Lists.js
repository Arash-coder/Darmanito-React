import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './Lists.module.scss';

const lists = [
    {name:'صفحه اصلی',active:true},
    {name:'درباره ما',active:false},
    {name:'تماس با ما',active:false},
    {name:'عضویت داروخانه ها',active:false}
]


class Lists extends Component {
    render() {
        return (
            <Aux>
                <li>
                        <a className={style.btn} href="#">
                            دانلود درمانیتو
                        </a>
                </li>
                <div className={style.br}></div>
                {lists.map(key=>(
                    <li className={[style.li,key.active?style.active:null].join(' ')}>
                        <a href="#">
                            {key.name}
                        </a>
                    </li>
                ))}
            </Aux>
        );
    }
}

export default Lists;