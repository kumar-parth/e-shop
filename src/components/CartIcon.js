import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/cart.css';

class CartWithBadgeIcon extends Component {
    render() {
        return (
            <div className="" style={{ alignSelf: "center" }}>
                <Link to={'/cart'}>
                    <button className="d-inline cartIcon__button">
                        <img alt="cart_icon" height={this.props.height ? this.props.height : 20} src={require('../assets/icons/cart.svg')} className="px-2" />
                        <span
                            className="badge badge-danger rounded-circle cartIcon__span"
                        >
                            {this.props.quantity > 0 ? this.props.quantity : null}
                        </span>
                    </button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quantity: state.cart.length
    }
}
export default connect(mapStateToProps)(CartWithBadgeIcon);
