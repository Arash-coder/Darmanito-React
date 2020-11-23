import React,{useState} from 'react';
import Header from '../Header/Header';
import Mainbody from '../Mainbody/Mainbody';
import Footer from '../Footer/Footer';
import {Route} from 'react-router-dom';
import Faq from '../FAQ/FAQ';
import {BrowserRouter as Router} from 'react-router-dom';
import style from './Layout.module.scss';
import Modal from '../../Containers/UI/Modals/Modal';
import Back from '../../Containers/UI/Back/Back';
import Contact_us from '../Contact_us/Contact_us';


const Layout = (props) =>{
    const [show,setshow]=useState(false);

    const change=()=>{
        return setshow(!show);
    }
    return(<Router >
        <Back className={show?style.back:null} />
        <Modal onClick={()=>setshow(!show)} className={[style.main,show?style.active:null].join(' ')} />
        <Header />
        <Route path='/' exact>
            <Mainbody onClick={()=>setshow(!show)} />
        </Route>
        <Route path='/FAQ' component={Faq} />
        <Route path='/Contact_us' component={Contact_us} />
        
        <Footer />
    </Router >
    )
}
    


export default Layout;