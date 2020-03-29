import React from 'react';
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <div className="p-2">
            <Link to="/"><img src={require('../../assets/shopping-bag.svg')} height="60px" alt="logo-img" />
            </Link>
        </div>
    )
}

export default Logo;