import React, { Component } from 'react';
import style from './Registeration.module.scss';

import image from '../../assets/images/footer.svg';


class Registeration extends Component{
    constructor(props){
        super(props)
        this.state={
            imput:' ',
            err:false
        }
    }
    handleChange=(event)=>{
        
        if((event.target.value.length > 11)||(event.target.value.length < 11)||(isNaN(event.target.value))){
           this.setState({err:true})
        }else{
            this.setState({err:false})
        } 
        if(event.target.value == null){
            this.setState({err:false})
        }
        
        
    }
    render(){
        return(
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.pic}>
                        <img src={image} alt="doctor"/>
                    </div>
                    <div className={style.text}>
                        <h1>عضویت داروخانه یا مراکز درمانی</h1><br/>
                        <h3>اگر به عنوان داروخانه یا مرکز درمانی قصد دارید در روند درمان وکسب و کار خودتان تغییری ایجاد کنید درمانیتو منتظر شماست</h3>
                        <br/>
                        <br/>
                        <section className={style.input}>
                            <button 
                            onClick={this.state.err? null: this.props.onClick}><p>بفرست</p></button>
                            <input 
                            value={this.state.input}
                            onChange={this.handleChange} 
                            type="text" 
                            placeholder="شماره همراه را وارد کنید"/>
                        </section>
                        <div className={[style.error,this.state.err?style.active_error:null].join(' ')}>لطفا شماره را درست وارد کنید </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registeration;