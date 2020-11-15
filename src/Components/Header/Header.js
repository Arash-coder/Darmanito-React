import React, { Component } from 'react';

import style from './Header.module.scss';
import Logo from './Logo/Logo';
import Lists from './Lists/Lists';



class Header extends Component{
    
    state={
        show:false,
        togglebtn:false,
        backcolor:false
    }
    navbar=()=>{
        this.setState({show:!this.state.show})
        this.setState({togglebtn:!this.state.togglebtn})
        this.setState({backcolor:!this.state.backcolor})
    }
    render(){
        return(
        <header className={style.header}>
            <nav className={[style.nav,this.state.backcolor?style.back : null].join(' ')}>
                <div onClick={this.navbar} className={[style.burger,this.state.togglebtn?style.toggle:null].join(' ')}>
                    <div className={style.i1}></div>
                    <div className={style.i2}></div>
                    <div className={style.i3}></div>
                </div>
                <ul className={[style.ul,style.download_btn].join(' ')}>
                    <li>
                        <a className={style.btn} href="#">
                            دانلود درمانیتو
                        </a>
                    </li>
                </ul>
                    <ul className={[style.ul,style.Lists,this.state.show?style.open : null].join(' ')}>
                       <Lists />
                    </ul>
                    <ul className={style.ul}>
                        <li>
                            <Logo />
                        </li>
                    </ul>
                
            </nav>
        </header>
        );
    }
}

export default Header;