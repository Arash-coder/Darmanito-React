import React from 'react';
import style from './RegisterationForm.module.scss';
import {  Link , Route} from 'react-router-dom';
import { useForm } from "react-hook-form";


const RegisterationForm = (props) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    // console.log(watch("example"));

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={style.grid}>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h4>نام و نام خانوادگی موسس</h4>
                        {errors.name_of_manager && <h4 className={style.err}>فیلد اجباری است!</h4>}
                    </div>
                    <div className={style.input}>
                        <input type="text" name="name_of_manager" ref={register({ required: true })} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.grid_item}>
                        <div className={style.title}>
                            <h4>شماره نظام مهندسی <span className={style.span}>(فقط عدد)</span></h4>
                            {errors.shomare_nezam_mohandesi && <h4 className={style.err}>فیلد اجباری است!</h4>}
                        </div>
                        <div className={style.input}>
                            <input type="text" name="shomare_nezam_mohandesi" ref={register({ required: true })} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.grid}>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h4>نام داروخانه / فروشگاه</h4>
                        {errors.name_of_pharmacy && <h4 className={style.err}>فیلد اجباری است!</h4>}
                    </div>
                    <div className={style.input}>
                        <input type="text" name="name_of_pharmacy" ref={register({ required: true })} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.grid_item}>
                        <div className={style.title}>
                            <h4>شماره داروخانه</h4>
                            {errors.number_of_pharmacy && <h4 className={style.err}>فیلد اجباری است!</h4>}
                        </div>
                        <div className={style.input}>
                            <input type="text" name="number_of_pharmacy" ref={register({ required: true })} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.grid}>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h4>شهر</h4>
                        {errors.city && <h4 className={style.err}>فیلد اجباری است!</h4>}
                    </div>
                    <div className={style.input}>
                        <select name="city" ref={register({ required: true })}>
                            <option value="tehran">تهران</option>
                            <option value="karaj">کرج</option>
                        </select>
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.grid_item}>
                        <div className={style.title}>
                            <h4>منطقه</h4>
                            {errors.region && <h4 className={style.err}>فیلد اجباری است!</h4>}
                        </div>
                        <div className={style.input}>
                            <select name="region" ref={register({ required: true })}>
                                <option value="1">منطقه 1</option>
                                <option value="2">منطقه 2</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.ad}>
                <div className={style.title1}>
                    <h4>آدرس دقیق</h4>
                    {errors.address && <h4 className={style.err}>فیلد اجباری است!</h4>}
                </div>
                <input type="text" name="address" ref={register({ required: true })} />
            </div>
            <div className={style.grid2}>
                <div>
                    <div className={style.title3}>
                        <h4>ساعات کاری</h4>
                    </div>
                    <div className={style.time}>
                        <div className={style.time_item}>
                            <h5>روزانه</h5>
                            <input type="checkbox" name="daily" ref={register} />
                        </div>
                        <div className={[style.time_item, style.left].join(' ')}>
                            <h5>شبانه روزی</h5>
                            <input type="checkbox" name="always" ref={register} />
                        </div>
                    </div>
                </div>
                <div className={style.set_timer}>
                    <div className={style.title4}>
                        <h4>ساعات کاری</h4>
                        {errors.time1 && <h4 className={style.err}>فیلد اجباری است !</h4>}

                    </div>
                    <div className={style.set_item}>
                        <h3>از</h3>
                        <input type="number" name="from" ref={register({ required: true })} />
                        <h3>تا</h3>
                        <input type="number" name="to" ref={register({ required: true })} />
                    </div>
                </div>
            </div>
            <div className={style.lastone}>
                <div>

                    <input type="file" name="file" id="file" className={style.upload} ref={register} />
                </div>
                <div className={style.speci}>
                    <Link className={style.confirm} to="/Confirm" >تایید</Link>

                </div>
            </div>
        </form>

    )
}
export default RegisterationForm;
