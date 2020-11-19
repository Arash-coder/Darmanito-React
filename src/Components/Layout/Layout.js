import React from 'react';
import Header from '../Header/Header';
import Mainbody from '../Mainbody/Mainbody';
import Footer from '../Footer/Footer';
import {Route} from 'react-router-dom';
import Faq from '../FAQ/FAQ';

const Layout = (props) =>(
    <div>
        <Header />
        {/* <Route URL='/' exact component={Mainbody} /> */}
        <Route URL='/FAQ' component={Faq} />
        {/* <Mainbody /> */}
        <Footer />
    </div>
);


export default Layout;