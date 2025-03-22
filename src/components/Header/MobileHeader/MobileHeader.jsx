import React, { Component } from 'react';
import CartIcon from '../../CartIcon';
import Searchbar from '../SearchBar';
import Logo from '../Logo';
import { connect } from 'react-redux';
import '../../../css/header.css';
import { setDrawerPanel } from '../../../actions/DrawerMobileActions';

class MobileHeader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex mobile__header justify-content-between">
                    <Logo />
                    <div className="d-flex flex-row justify-content-end mx-2 my-1">
                        <Searchbar />
                        <CartIcon />
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default connect(null, { setDrawerPanel })(MobileHeader);
