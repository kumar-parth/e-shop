import React from 'react';
import Header from '../components/Header/Header';
import MobileHeader from '../components/Header/MobileHeader/MobileHeader';
import Footer from '../components/Footer';
import { Desktop, Mobile } from '../utils/MediaQuery';

const BaseLayout = (props) => {
    return (
        <div className="container-fluid p-0">
            <Desktop>
                <Header />
            </Desktop>
            <Mobile>
                <MobileHeader />
            </Mobile>
            {props.children}
            <Footer />
        </div>
    )
}

export default BaseLayout;