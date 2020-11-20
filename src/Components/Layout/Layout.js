import React from 'react';
import Header from '../Header/Header';
import Mainbody from '../Mainbody/Mainbody';
import Footer from '../Footer/Footer';
import {Route} from 'react-router-dom';
import Faq from '../FAQ/FAQ';
import {BrowserRouter as Router} from 'react-router-dom';

const Layout = (props) =>(
    <Router >
        <Header />
        <Route path='/' exact component={Mainbody} />
        <Route path='/FAQ' component={Faq} />
        {/* <Mainbody /> */}
        <Footer />
    </Router >
);


export default Layout;