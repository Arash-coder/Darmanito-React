import React, { Component } from 'react';
import style from './RegisterationForm.module.scss';




class RegisterationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input1: true,
            input1_2: true,
            input1_txt: null,
            input2: true,
            input2_txt: null,
            input3: true,
            input3_2: true,
            input3_txt: null,
            input4: true,
            input4_txt: null,
            input5: null,
            input6: null,
            input7: true,
            input7_txt: null,
            daily: false,
            always: null,
            time: null,
            pic: null,
            show1: true,
            show2: false

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
        this.setState({ input1_txt: event.target.value })
    }
    input2handler = (event) => {
        if (isNaN(event.target.value)) {
            this.setState({ input2: false })
        } else {
            this.setState({ input2: true })
        }
        this.setState({ input2_txt: event.target.value })
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
        this.setState({ input3_txt: event.target.value })
    }
    input4handler = (event) => {
        if (isNaN(event.target.value)) {
            this.setState({ input4: false })
        } else {
            this.setState({ input4: true })
        }
        this.setState({ input4_txt: event.target.value })
    }
    input7handler = (event) => {
        if (!isNaN(event.target.value)) {
            this.setState({ input7: false })
        }
        else {
            this.setState({ input7: true })
        }
        this.setState({ input7_txt: event.target.value })
    }
    dailyhandler = () => {
        this.setState({ daily: !this.state.daily })
        this.setState({ time: "روزانه" })
    }
    alwayshandler = () => {
        this.setState({ daily: false })
        this.setState({ time: "شبانه روزی" })
    }
    pichandler = (event) => {
        this.setState({
            pic: URL.createObjectURL(event.target.files[0])
        })
    }
    show1handler = (event) => {
        this.setState({ show1: false })
        this.setState({ show2: true })
        event.preventDefault();
    }
    show2handler = () => {
        this.setState({show1:true})
        this.setState({show2:false})
    }
    render() {
        return (
            <div>
                <main className={this.state.show1 ? null : style.show1}>
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
                                        <h4 className={[style.err, this.state.input4 ? null : style.err_active].join(' ')}>فیلد اجباری است!</h4>
                                    </div>
                                    <div className={style.input}>
                                        <input onChange={this.input4handler} type="text" name="number_of_pharmacy" />
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
                                <h4 className={[style.err, this.state.input7 ? null : style.err_active].join(' ')}></h4>
                            </div>
                            <input onChange={this.input7handler} type="text" name="address" />
                        </div>
                        <div className={style.grid2}>
                            <div>
                                <div className={style.title3}>
                                    <h4>ساعات کاری</h4>
                                </div>
                                <div className={style.time}>
                                    <div className={style.time_item}>
                                        <h5>روزانه</h5>
                                        <input onClick={this.dailyhandler} type="checkbox" name="daily" />
                                    </div>
                                    <div className={[style.time_item, style.left].join(' ')}>
                                        <h5>شبانه روزی</h5>
                                        <input onClick={this.alwayshandler} type="checkbox" name="always" />
                                    </div>
                                </div>
                            </div>
                            <div className={[style.set_timer, this.state.daily ? style.set_timer_active : null].join(' ')}>
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

                                <input onChange={this.pichandler} type="file" name="file" id="file" className={style.upload} />
                            </div>
                            <div className={style.speci}>

                                <button onClick={this.show1handler} className={style.confirm}>مرحله بعد</button>

                            </div>
                        </div>
                    </form>
                </main>

                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}

                <main className={[style.main, this.state.show2 ? style.main_active : null].join(' ')}>
                    <div className={style.first}>
                        <div>
                            <img className={style.image} src={this.state.pic} alt="image" />
                        </div>
                        <div className={style.title_confirm}>
                            <h4>نام داروخانه</h4>
                            <h3>{this.state.input3_txt}</h3>
                        </div>
                    </div>
                    <div className={style.second}>
                        <div className={style.second_item}>
                            <h4>نام داروخانه</h4>
                            <h3> {this.state.input3_txt} </h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>شماره داروخانه</h4>
                            <h3> {this.state.input4_txt} </h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>شهر</h4>
                            <h3>تهران</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>منطقه</h4>
                            <h3>منطقه 1</h3>
                        </div>
                        <div className={style.second_item}>
                            <h4>ساعت کاری</h4>
                            <h3> {this.state.time} </h3>
                        </div>
                    </div>
                    <div className={style.third}>
                        <h4>آدرس دقیق</h4>
                        <h3> {this.state.input7_txt} </h3>
                    </div>
                    <div className={style.fourth}>
                        <div className={style.fourth_item}>
                            <h4>نام و نام خانوادگی موسس</h4>
                            <h3> {this.state.input1_txt} </h3>
                        </div>
                        <div className={[style.fourth_item, style.right].join(' ')}>
                            <h4>شماره نظام پزشکی</h4>
                            <h3> {this.state.input2_txt} </h3>
                        </div>
                    </div>
                    <div className={style.fifth}>
                        <button onClick={this.show2handler} type="submit" className={style.change}>ویرایش اطلاعات</button>
                        <button onClick={this.props.clicked} className={style.confrim}>تکمیل ثبت نام</button>
                    </div>
                </main>
            </div>
        );
    }
}
export default RegisterationForm;
