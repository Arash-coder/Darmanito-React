import React, { useState } from 'react';
import style from './RegisterationForm.module.scss';
import { useFormik } from 'formik'
import Page0 from './pages/page0/Page0';
import Page1 from './pages/page1/Page1';




const RegisterationForm = (props) => {
    
    const formik = useFormik({
        initialValues: {
            nameofmanager: "",
            shomarenezam: "",
            nameofpharmacy: "",
            numberofpharmacy: "",
            city: "",
            region: "",
            address: "",
            from: "",
            to: "",
            pic: false
        },
        onSubmit: values => {
            console.log("data", values);
        },
        validate: values => {
            let errors = {

            }
            if (!values.nameofmanager) {
                errors.nameofmanager = 'نام اجباری است'
            }
            if (isNaN(values.shomarenezam)) {
                errors.shomarenezam = 'فقط عدد وارد کنید'
            } else if (!values.shomarenezam) {
                errors.shomarenezam = 'لطفا شماره نظام مهندسی را وارد کنید'
            }

            if (!values.nameofpharmacy) {
                errors.nameofpharmacy = 'لطفا نام داروخانه را وارد کنید'
            }
            if (!values.numberofpharmacy) {
                errors.numberofpharmacy = 'لطفا نام داروخانه را وارد کنید'
            }
            if (!values.city) {
                errors.city = 'لطفا شهر خود را وارد کنید'
            }
            if (!values.region) {
                errors.region = 'لطفا منطقه خود را وارد کنید'
            }
            if (!values.address) {
                errors.address = 'لطفا آدرس دقیق را وارد کنید'
            }
            if (!values.from || !values.to) {
                errors.from = 'لطفا ساعات  کاری  را وارد کنید'
            }

            return errors
        }
    })
    const [ali,setali]=useState();
    // const pichandler = (event) =>  setpic(pic=URL.createObjectURL(event.target.files[0])) 
        console.log(formik.values);
        const [pages, setpages] = useState(0);
        const nextpage = (pages) => {
            pages = pages + 1;
            return (setpages(pages))
        }
        const prevpage = (pages) => {
            pages = pages - 1;
            return (setpages(pages))
        }
        
        
        switch (pages) {
            case 0:
                return (
                    <Page0
                        formik={formik}
                        // delete={() => setpic(delete pic)}
                        clicked={() => nextpage(pages)}

                        
                    />
                );
            case 1:
                return (
                    <Page1
                        formik={formik}
                        clicked={() => prevpage(pages)}
                        
                        
                    />
                );
            default:
                return (
                    <Page0 
                    formik={formik}
                    clicked={() => nextpage(pages)} />
                    
                );
        }

    }
    export default RegisterationForm;
