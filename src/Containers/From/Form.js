import React, { Component } from 'react';
import style from './Form.module.scss';

class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            
            name_value:true,
            email_value:true,
            main_value:true,
            main_value2:true,
            show1:false,
            show2:false,
            confirm:null
        }
    }
    nameinputhandler=(value1)=>{
        if(value1.target.value.length > 25){
            this.setState({name_value:false})
            this.setState({main_value:false})
        }else{
            this.setState({name_value:true})
            this.setState({main_value:true})
        }
    }
    emailinputhandler=(value2)=>{
        if(value2.target.value.includes("@")){
            this.setState({email_value:true})
            this.setState({main_value2:true})
        }else{
            this.setState({email_value:false})
            this.setState({main_value2:false})
        }
    }
    confirm_btn_handler =(event)=>{
        if((this.state.main_value)&&(this.state.main_value2)){
            this.setState({confirm:true})
            this.setState({show1:false})
            this.setState({show2:false})
        }
        else{
             if(!this.state.name_value){
                this.setState({show1:true})
            }else{
                this.setState({show1:false})
            }
            if (!this.state.email_value){
                this.setState({show2:true})
            }else{
                this.setState({show2:false})
            }
        }
        event.preventDefault();
    }
    render(){
        return(
            <div className={[this.props.className,style.main].join(' ')}>
                <form>
                    <div className={style.title}>
                        <h4>نام و نام خانوادگی</h4>
                        <h4 className={[style.err,this.state.show1?style.error:style.err].join(' ')}>لطفا نام و نام خانوادگی را درست وارد کنید!</h4>
                    </div>
                    <input onChange={this.nameinputhandler}  className={[style.input,this.state.show1?style.err_input:style.input].join(' ')} type="text" placeholder="نام و نام خانوادگی"/>
                    <div className={style.title}>
                        <h4>ایمیل</h4>
                        <h4 className={[style.err,this.state.show2?style.error:style.err].join(' ')}>ایمیل وارد شده معتبر نمی باشد!</h4>
                    </div>
                    <input onChange={this.emailinputhandler}   className={[style.input,this.state.show2?style.err_input:style.input].join(' ')} type="text" placeholder="ایمیل"/>
                    <h4 className={style.title}>پیام شما</h4>
                    <textarea className={style.textarea} placeholder="پیام شما"></textarea>
                    <div className={style.btn}>
                    <button onClick={this.confirm_btn_handler}>ارسال پیام</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;