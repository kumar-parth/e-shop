import React, { Component } from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import CartIcon from '../CartIcon';
import '../../css/header.css';

class Header extends Component {
    render() {
        return (
            <div className="row p-2 desktop__header">
                <div className="col-4">
                    <Logo />
                </div>
                <div className="col-4 text-center">
                </div>
                <div className="col-4 d-flex justify-content-end flex-row">
                    <SearchBar />
                    <CartIcon />
                </div>
            </div>
        )
    }
}
export default Header;