import React ,{Component} from 'react';
import style from './Choose_register.module.scss';


class Choose_register extends Component{
    render(){
        return(
            <main className={style.box}>
                <div className={style.main}>
                    <div className={this.props.width}>
                        <img src={this.props.pic} alt="pic"/>
                    </div>
                    <div className={style.miner_title}>
                        <h3>{this.props.miner_title}</h3>
                    </div>
                    <div className={style.miner_desc}>
                        <h4>{this.props.miner_desc}</h4>
                    </div>
                    <button className={style.btn}>ثبت نام</button>
                </div>
            </main>
        )
    }
}

export default Choose_register;