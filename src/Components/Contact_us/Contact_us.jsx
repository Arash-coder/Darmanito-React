import React from 'react';
import style from './Contact_us.module.scss';
import Form from '../../Containers/From/Form';

const Contact =(props)=>{
    return(
        <main className={style.main}>
            <h1 className={style.title}>تماس با ما</h1>
            <div className={style.grid}>
                <div className={style.grid_item}>
                <iframe className={style.map}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.4068898551945!2d51.34576318539381!3d35.716210435661516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfdeb5918b5f1%3A0x93e8ccd58607d462!2z2YXYqtix2Ygg2LfYsdi02Ko!5e0!3m2!1sfa!2s!4v1606070857339!5m2!1sfa!2s" title='map'></iframe>
                <div className={style.info}>
                    <div className={style.info2}>
                        <h4>آدرس</h4>
                        <h5>آدرس
                            تهران طرشت خیابان شهید چوب تراش
                            خیابان شهید حسین مردی بن بست پنجم پلاک 15 واحد 1
                        </h5>
                    </div>
                    <div className={style.info1}>
                        <h4>ایمیل</h4>
                        <h5 className={style.blue}>blabla@bla.com</h5>
                        <h4>شماره ثابت</h4>
                        <h5 className={[style.blue,style.rtl].join(' ')}>021-44444444</h5>
                    </div>
                </div>
                </div>
                <Form className={style.grid_item} />
            </div>
        </main>
    );
}

export default Contact;