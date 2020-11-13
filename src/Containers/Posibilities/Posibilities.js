import React , {Component} from 'react';
import style from './Posibilities.module.scss'; 
import ear from '../../assets/images/ear.svg';
import market from '../../assets/images/pharmacy.svg';
import pharmacy from '../../assets/images/market.svg';
import schedule from '../../assets/images/schedule.svg';
import svg from '../../assets/images/down.svg';
import down from '../../assets/images/check.svg';


class Posibilities extends Component {
    constructor(props){
        super(props);

        this.state ={
            title:' داروخانه آنلاین',
        }
        
    }
    changetitlehandler=()=>{
        
    }
    render(){
        return(
            <main className={this.props.className}>
                <main className={style.main}>
                <h1 className={style.main_title}>امکانات درمانیتو</h1>
                <div className={style.mainbody}>
                <section className={style.section}>
                    <h1 className={style.secondtitle}>{this.state.title}</h1>
                    <br/>
                    <p className={style.desc}>در سرویس داروخانه شما میتوانید نسخه دارویی یا محصول بهداشتی خودتون رو برای پیدا شدن به داروخانه و فروشگاه ها سفارش بدید</p>
                    <div className={style.stepsp}>
                        <img className={style.check} src={svg} alt="check"/>
                        <h3>قدم اول</h3>
                    </div>
                    <div className={style.decstep}>وارد بخش سفارش با عکس نسخه شوید عکس و اوضیحات را وارد کنید</div>
                    <div className={style.steps}>
                    <img className={style.check} src={svg} alt="check"/>
                        <h3>قدم دوم</h3>
                    </div>
                    <div className={style.decstep}>بعد از ارسال عکس نسخه،باید آدرس محل خودتون رو وارد کنید</div>
                    <div className={style.steps}>
                        <img className={style.down} src={down} alt="down"/>
                        <h3>قدم سوم</h3>
                    </div>
                    <div className={style.lastdesk}>اگر نتیجه جستجوی نسخه موفقیت آمیز باشه باید منتظر تحویل سفارش باشید</div>
                </section>
                <div className={style.gridcontainer}>
                    <div className={style.griditem}>
                        <button>
                            <img src={pharmacy} alt="pharmacy"/>
                            <h3>فروشگاه</h3>
                        </button>
                    </div>
                    <div className={style.griditem}>
                        <button>
                            <img src={market} alt="market"/>
                            <h3>داروخانه</h3>
                        </button>
                    </div>
                    <div className={style.griditem}>
                        <button value='3'>
                            <img src={schedule} alt="schedule"/>
                            <h3>نوبت دهی آنلاین</h3>
                        </button>
                    </div>
                    <div className={style.griditem}>
                        <button value='4'>
                            <img src={ear} alt="ear"/>
                            <h3>ویزیت آنلاین</h3>
                        </button>
                    </div>
                </div>
            </div>
            </main>
            </main>
        );
    }
}

export default Posibilities;