import React, {useState} from "react";
import style from './FAQ.module.scss';
import ear from '../../assets/images/ear.svg';
import market from '../../assets/images/pharmacy.svg';
import pharmacy from '../../assets/images/market.svg';
import schedule from '../../assets/images/schedule.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cart from './cart/Cart';





const FAQ = (props) =>{

    const [show1,setshow1] = useState(false);
    const [show2,setshow2] = useState(false);
    const [show3,setshow3] = useState(false);
    const [show4,setshow4] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return(
        <div>
        <div className={style.blue_section}>
            <h1>سوالات متداول</h1>
        </div>
        <div className={style.FAQ}>
            <div className={style.title}>سوال شما درباره کدوم سرویس هست ؟</div>
            {/* <div className={style.grid}> */}
                <Slider {...settings} className={style.padding}>
                {/* <div className={style.grid_item}>
                    <div className={[style.grid_item_detail,style.speci4].join(' ')}>
                    <div className={style.pic}>
                        <img src={schedule} alt="schedule"/>
                    </div>
                    <p className={style.desc}>ویزیت آنلاین</p>
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={[style.grid_item_detail,style.speci3].join(' ')}>
                    <div className={style.pic}>
                        <img src={ear} alt="ear"/>
                    </div>
                    <p className={style.desc}>ویزیت آنلاین</p>
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={[style.grid_item_detail,style.speci].join(' ')}>
                    <div className={style.pic}>
                        <img src={pharmacy} alt="pharmacy"/>
                    </div>
                    <p className={style.desc}>فروشگاه</p>
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={[style.grid_item_detail,style.speci2].join(' ')}>
                    <div className={style.pic}>
                        <img src={market} alt="market"/>
                    </div>
                    <p className={style.desc}>داروخانه</p>
                    </div>
                </div> */}
                <Cart pic={ear} name="ویزیت آنلاین" />
                <Cart pic={market} name="فروشگاه آنلاین" />
                <Cart pic={pharmacy} name="داروخانه آنلاین" />
                <Cart pic={schedule} name="ویزیت آنلاین" />
                <Cart pic={ear} name="ویزیت آنلاین" />
                </Slider>
            {/* </div> */}
        </div>
        <div className={style.ques}>
            <div className={style.ques_item}>
                <div className={style.que}>
                    <div className={style.plus}>
                        <div className={style.pl1}></div>
                        <div className={[style.pl2,show1? style.active : null].join(' ')}></div>
                    </div>
                    <div onClick={()=> setshow1(!show1)} className={style.txte}>هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه ؟</div>
                </div>
                <div className={[style.answer,show1 ? style.show : null].join(' ')}>خیر ما هم اکنون در تهران فعال هستیم</div>
            </div>
            <div className={style.ques_item}>
                <div className={style.que}>
                    <div className={style.plus}>
                        <div className={style.pl1}></div>
                        <div className={[style.pl2,show2? style.active : null].join(' ')}></div>
                    </div>
                    <div onClick={()=> setshow2(!show2)} className={style.txte}>هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه ؟</div>
                </div>
                <div className={[style.answer,show2 ? style.show : null].join(' ')}>خیر ما هم اکنون در تهران فعال هستیم</div>
            </div>
            <div className={style.ques_item}>
                <div className={style.que}>
                    <div className={style.plus}>
                        <div className={style.pl1}></div>
                        <div className={[style.pl2,show3? style.active : null].join(' ')}></div>
                    </div>
                    <div onClick={()=> setshow3(!show3)} className={style.txte}>درمانیتو فقط در تهران و کرج فعال هست ؟</div>
                </div>
                <div className={[style.answer,show3 ? style.show : null].join(' ')}>خیر ما هم اکنون در تهران فعال هستیم</div>
            </div>
            <div className={style.ques_item}>
                <div className={style.que}>
                    <div className={style.plus}>
                        <div className={style.pl1}></div>
                        <div className={[style.pl2,show4? style.active : null].join(' ')}></div>
                    </div>
                    <div onClick={()=> setshow4(!show4)} className={style.txte}>هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه ؟</div>
                </div>
                <div className={[style.answer,show4 ? style.show : null].join(' ')}>خیر ما هم اکنون در تهران فعال هستیم</div>
            </div>
        </div>
    </div>
    )
}

export default FAQ;