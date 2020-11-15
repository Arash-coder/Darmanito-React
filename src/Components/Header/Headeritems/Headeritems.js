import React, { Component } from 'react';
import Headeritem from '../Headeritem/Headeritem';
import style from './Headeritems.module.scss';
import Logo from '../Logo/Logo';
import Downloadbutton from '../Downloadbutton/Downloadbutton';


class Headeritems extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
    }

    navbarhandler=()=>{
        let attachclassname= [style.responsive,style.open]
        return attachclassname;
    }
    
    render(){
        return(
            <ul className={style.ul}>
                <li onClick={this.navbarhandler} className={style.burger}>
                    <div className={style.one}></div>
                    <div className={style.two}></div>
                    <div className={style.three}></div>
                </li>
                <div className={this.attachclassname.join(' ')}>
                <Headeritem style={style.donwload2}><Downloadbutton >دانلود درمانیتو</Downloadbutton></Headeritem>
                <div className={style.brline}></div>
                <Headeritem style={style.li2}>عضویت داروخانه ها</Headeritem>
                <Headeritem style={style.li2}>تماس با ما</Headeritem>
                <Headeritem style={style.li2}>درباره ما</Headeritem>
                <Headeritem style={style.li2}>صفحه اصلی</Headeritem>
                </div>
                <Headeritem style={style.donwload}><Downloadbutton >دانلود درمانیتو</Downloadbutton></Headeritem>
                <Headeritem style={style.li}>عضویت داروخانه ها</Headeritem>
                <Headeritem style={style.li}>تماس با ما</Headeritem>
                <Headeritem style={style.li}>درباره ما</Headeritem>
                <Headeritem style={style.li}>صفحه اصلی</Headeritem>
                <Headeritem><Logo /></Headeritem>
            </ul>
        )
    }}
export default Headeritems;