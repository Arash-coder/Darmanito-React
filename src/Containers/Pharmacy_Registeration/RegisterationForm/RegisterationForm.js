import React, { Component } from 'react';
import style from './RegisterationForm.module.scss';




class RegisterationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input1: true,
            input1_2: true,
            input2: true,
            input3: true,
            input3_2: true,
            input3_txt: null,
            input4: null,
            input5: null,
            input6: null,
            input7: null,

        }
    }
    input1handler = (event) => {
        if (!isNaN(event.target.value)) {
            this.setState({ input1: false })
        } else if (event.target.value.length < 4) {
            this.setState({ input1_2: false })
        }

        else {
            this.setState({ input1_2: true, input1: true })
        }
    }
    input2handler = (event) => {
        if (isNaN(event.target.value)) {
            this.setState({ input2: false })
        } else {
            this.setState({ input2: true })
        }
    }
    input3handler = (event) => {
        if (event.target.value.length < 4) {
            this.setState({ input3_2: false })
        }
        else if (!isNaN(event.target.value)) {
            this.setState({ input3: false })

        }
        else {
            this.setState({ input3_2: true, input3: true })
        }
        this.setState({input3_txt:event.target.value})
    }
    render() {
        return (
            <div>
                <main>
                    <form>
                        <div className={style.grid}>
                            <div className={style.grid_item}>
                                <div className={style.title}>
                                    <h4>نام و نام خانوادگی موسس</h4>
                                    {/* {errors.name_of_manager && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                    <h4 className={[style.err, this.state.input1 ? null : style.err_active, this.state.input1_2 ? null : style.err_active].join(' ')}>فیلد اجباری است!</h4>
                                </div>
                                <div className={style.input}>
                                    <input onChange={this.input1handler} type="text" name="name_of_manager" />
                                </div>
                            </div>
                            <div className={style.grid_item}>
                                <div className={style.grid_item}>
                                    <div className={style.title}>
                                        <h4>شماره نظام مهندسی <span className={style.span}>(فقط عدد)</span></h4>
                                        {/* {errors.shomare_nezam_mohandesi && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                        <h4 className={[style.err, this.state.input2 ? null : style.err_active].join(' ')}>فیلد اجباری است!</h4>
                                    </div>
                                    <div className={style.input}>
                                        <input onChange={this.input2handler} type="text" name="shomare_nezam_mohandesi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.grid}>
                            <div className={style.grid_item}>
                                <div className={style.title}>
                                    <h4>نام داروخانه / فروشگاه</h4>
                                    {/* {errors.name_of_pharmacy && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                    <h4 className={[style.err, this.state.input3 ? null : style.err_active, this.state.input3_2 ? null : style.err_active].join(' ')}>فیلد اجباری است!</h4>

                                </div>
                                <div className={style.input}>
                                    <input onChange={this.input3handler} type="text" name="name_of_pharmacy" />
                                </div>
                            </div>
                            <div className={style.grid_item}>
                                <div className={style.grid_item}>
                                    <div className={style.title}>
                                        <h4>شماره داروخانه</h4>
                                        {/* {errors.number_of_pharmacy && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                    </div>
                                    <div className={style.input}>
                                        <input type="text" name="number_of_pharmacy" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.grid}>
                            <div className={style.grid_item}>
                                <div className={style.title}>
                                    <h4>شهر</h4>
                                    {/* {errors.city && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                </div>
                                <div className={style.input}>
                                    <select name="city">
                                        <option value="tehran">تهران</option>
                                        <option value="karaj">کرج</option>
                                    </select>
                                </div>
                            </div>
                            <div className={style.grid_item}>
                                <div className={style.grid_item}>
                                    <div className={style.title}>
                                        <h4>منطقه</h4>
                                        {/* {errors.region && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                                    </div>
                                    <div className={style.input}>
                                        <select name="region" >
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
                                {/* {errors.address && <h4 className={style.err}>فیلد اجباری است!</h4>} */}
                            </div>
                            <input type="text" name="address" />
                        </div>
                        <div className={style.grid2}>
                            <div>
                                <div className={style.title3}>
                                    <h4>ساعات کاری</h4>
                                </div>
                                <div className={style.time}>
                                    <div className={style.time_item}>
                                        <h5>روزانه</h5>
                                        <input type="checkbox" name="daily" />
                                    </div>
                                    <div className={[style.time_item, style.left].join(' ')}>
                                        <h5>شبانه روزی</h5>
                                        <input type="checkbox" name="always" />
                                    </div>
                                </div>
                            </div>
                            <div className={style.set_timer}>
                                <div className={style.title4}>
                                    <h4>ساعات کاری</h4>
                                    {/* {errors.time1 && <h4 className={style.err}>فیلد اجباری است !</h4>} */}

                                </div>
                                <div className={style.set_item}>
                                    <h3>از</h3>
                                    <input type="number" name="from" />
                                    <h3>تا</h3>
                                    <input type="number" name="to" />
                                </div>
                            </div>
                        </div>
                        <div className={style.lastone}>
                            <div>

                                <input type="file" name="file" id="file" className={style.upload} />
                            </div>
                            <div className={style.speci}>

                                <button type="submit" className={style.confirm}>تایید</button>

                            </div>
                        </div>
                    </form>
                </main>

                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                <main className={style.main}>
                    <div className={style.first}>
                        <div>
                            {/* <img src={pic} alt="image" /> */}
                        </div>
                        <div className={style.title_confirm}>
                            <h4>نام داروخانه</h4>
                            <h3>{this.state.input3_txt}</h3>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div className={style.second_item}>
                            <h4>نام داروخانه</h4>
                            <h3>فلان داروخانه</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>شماره داروخانه</h4>
                            <h3>021-34434434</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>شهر</h4>
                            <h3>تهران</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>منطقه</h4>
                            <h3>فلان منطقه</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>ساعت کاری</h4>
                            <h3>شبانه روزی</h3>
                        </div>
                    </div>
                    <div className={style.third}>
                        <h4>آدرس دقیق</h4>
                        <h3>تهران و فلان فلان فبل فبلن منبیتسبنمت</h3>
                    </div>
                    <div className={style.fourth}>
                        <div className={style.fourth_item}>
                            <h4>نام و نام خانوادگی موسس</h4>
                            <h3>آرش</h3>
                        </div>
                        <div className={[style.fourth_item, style.right].join(' ')}>
                            <h4>شماره نظام پزشکی</h4>
                            <h3>1234-ل</h3>
                        </div>
                    </div>
                    <div className={style.fifth}>
                        <button type="submit" className={style.change}>ویرایش اطلاعات</button>
                        <button className={style.confrim}>تکمیل ثبت نام</button>
                    </div>
                </main>
            </div>
        );
    }
}
export default RegisterationForm;
