import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import style from './Lists.module.scss';
import { Link } from "react-router-dom";

const lists = [
    {name:'صفحه اصلی',active:true,to:'/',id:1},
    {name:'درباره ما',active:false,to:'/FAQ',id:2},
    {name:'تماس با ما',active:false,to:'/Contact_us',id:3},
    {name:'عضویت داروخانه ها',active:false,id:4}
]


class Lists extends Component {

    state={
        value:lists.map(val=>val.active),
        id:lists.map(id=>id.id)
    }
    changevaluehandler=(id)=>{
        this.setState({value:!this.state.value})
    }
    render() {
        return (
            <Aux>
                <li>
                        <a className={style.btn} href="#">
                            دانلود درمانیتو
                        </a>
                </li>
                <div className={style.br}></div>
                {lists.map((key)=>(
                    <li onClick={this.changevaluehandler} id={this.state.id} className={[style.li,key.active?style.active:null].join(' ')}>
                        <Link to={key.to}>
                            {key.name}
                        </Link>
                    </li>
                ))}
            </Aux>
        );
    }
}

export default Lists;