import React, {useState} from 'react';
import style from './Page0.module.scss';
const Page0 = (props) => {
   
    const [pic, setPic] =useState(props.state);
    return (
        <main >
            <form className={style.main} onSubmit={props.formik.handleChange}>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>نام و نام خانوادگی موسس</h5>
                        {props.formik.touched.nameofmanager && props.formik.errors.nameofmanager ? <h5 className={style.err}>{props.formik.errors.nameofmanager}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="nameofmanager"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.nameofmanager} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>شماره نظام مهندسی <span>(فقط عدد)</span></h5>
                        {props.formik.touched.shomarenezam && props.formik.errors.shomarenezam ? <h5 className={style.err}>{props.formik.errors.shomarenezam}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="shomarenezam"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.shomarenezam} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>نام داروخانه / فروشگاه</h5>
                        {props.formik.touched.nameofpharmacy && props.formik.errors.nameofpharmacy ? <h5 className={style.err}>{props.formik.errors.nameofpharmacy}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="nameofpharmacy"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.nameofpharmacy} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>شماره داروخانه</h5>
                        {props.formik.touched.numberofpharmacy && props.formik.errors.numberofpharmacy ? <h5 className={style.err}>{props.formik.errors.numberofpharmacy}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="numberofpharmacy"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.numberofpharmacy} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>شهر</h5>
                        {props.formik.touched.city && props.formik.errors.city ? <h5 className={style.err}>{props.formik.errors.city}</h5> : null}

                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="city"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.city} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>منطقه</h5>
                        {props.formik.touched.region && props.formik.errors.region ? <h5 className={style.err}>{props.formik.errors.region}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="region"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.region} />
                    </div>
                </div>
                <div className={[style.grid_item, style.speci_item].join(' ')}>
                    <div className={style.title}>
                        <h5>آدرس دقیق</h5>
                        {props.formik.touched.address && props.formik.errors.address ? <h5 className={style.err}>{props.formik.errors.address}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input_speci}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="address"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.address} />
                    </div>
                </div>
                <div className={[style.grid_item, style.speci_item1].join(' ')}>
                    <div className={style.title}>
                        <h5>آدرس دقیق</h5>
                        {props.formik.touched.address && props.formik.errors.address ? <h5 className={style.err}>{props.formik.errors.address}</h5> : null}
                    </div>
                    <div>
                        <input
                            className={style.input_speci}
                            type="text"
                            onBlur={props.formik.handleBlur}
                            name="address"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.address} />
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>ساعات کاری</h5>
                        {/* {props.formik.touched.address && props.formik.errors.address? <h5 className={style.err}>{props.formik.errors.address}</h5>:null} */}
                    </div>
                    <div className={style.center}>
                        <div className={style.center1}>
                            روزانه
                        <input

                                type="radio"
                                onBlur={props.formik.handleBlur}
                                name="daily"
                                onChange={props.formik.handleChange}
                                value={props.formik.values} />
                        </div>
                        <div className={style.center1}>
                            شبانه روزی
                        <input

                                type="radio"
                                onBlur={props.formik.handleBlur}
                                name="always"
                                onChange={props.formik.handleChange}
                                value={props.formik.values} />
                        </div>
                    </div>
                </div>
                <div className={style.grid_item}>
                    <div className={style.title}>
                        <h5>ساعات کاری</h5>
                        {props.formik.touched.from && props.formik.errors.from ? <h5 className={style.err}>{props.formik.errors.from}</h5> : null}
                    </div>
                    <div className={style.center}>
                        از
                        <input

                            type="number"
                            onBlur={props.formik.handleBlur}
                            name="from"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.from} />
                            تا
                        <input

                            type="number"
                            onBlur={props.formik.handleBlur}
                            name="to"
                            onChange={props.formik.handleChange}
                            value={props.formik.values.to} />
                    </div>
                </div>
                <div className={[style.grid_item,style.margin].join(' ')}>
                    <div className={style.center}>
                        {/* <input 
                        onChange={pic}
                           
                          
                        
                         name="pic" 
                         className={style.file} 
                         type="file" /> */}
                         <input onChange={props.file} type="file" name="file" id="file" className={style.file} />
                        <h5 className={style.upload}>آپلود عکس</h5>
                    </div>
                        <button type={props.type} className={style.upload1}>حذف عکس</button>
                        {/* <img src={props.formik.values.pic} alt=""/> */}
                </div>


                <button className={style.btn} type="submit" onClick={props.clicked}>مرحله بعد</button>
            </form>
        </main>
    );
}
export default Page0;