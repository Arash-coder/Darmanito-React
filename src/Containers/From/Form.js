import React, { Component } from 'react';
import style from './Form.module.scss';
import { useFormik } from 'formik'

const Form = (props)=>{
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            textarea:""
        },
        onSubmit: values=>{
            console.log("data",values);
        },
        validate:values=>{
            let errors ={

            }
            if(!values.name){
                errors.name = 'نام اجباری است'
            }
            if(!values.email){
                errors.email='ایمیل اجباری است'
            }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
                errors.email='ایمیل وارد شده نامعتبر است'
            }
            if(!values.textarea){
                errors.textarea='فیلد خالی است' 
            }

            return errors
        }
    })
    console.log("formik errors",formik.errors)
    return(
        <div className={[props.className,style.main].join(' ')}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={style.title}>
                        <h4>نام و نام خانوادگی</h4>
                        {formik.touched.name && formik.errors.name? <h4 className={style.err}>{formik.errors.name}</h4>:null}
                    </div>
                    <input onBlur={formik.handleBlur}  className={style.input} type="text" placeholder="نام و نام خانوادگی" name="name" onChange={formik.handleChange} value={formik.values.name}   />
                    <div className={style.title}>
                        <h4>ایمیل</h4>
                        {formik.touched.email && formik.errors.email? <h4 className={style.err}>{formik.errors.email}</h4>:null}
                    </div>
                    <input onBlur={formik.handleBlur}     className={style.input} type="text" placeholder="ایمیل" onChange={formik.handleChange} name="email" value={formik.values.email}   />
                    <h4 className={style.title}>پیام شما</h4>
                    {formik.touched.textarea && formik.errors.textarea? <h4 className={style.err}>{formik.errors.textarea}</h4>:null}
                    <textarea onBlur={formik.handleBlur}  className={style.textarea} placeholder="پیام شما" name="textarea" onChange={formik.handleChange} value={formik.values.textarea}  ></textarea>
                    <div className={style.btn}>
                    <button  type="submit">ارسال پیام</button>
                    </div>
                </form>
            </div>
    );
}
        

export default Form;