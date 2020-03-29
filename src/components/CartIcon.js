import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { setCartItems } from '../../actions';

class CartWithBadgeIcon extends Component {
    render() {
        return (
            <div className="" style={{ alignSelf: "center" }}>
                <Link to={'/cart'}>
                    <button className="d-inline" style={{ border: 'none', background: 'none' }}>
                        <img alt="cart_icon" height={this.props.height ? this.props.height : 20} src={require('../assets/icons/cart.svg')} className="px-2" />
                        <span
                            className="badge badge-danger rounded-circle"
                            style={{
                                fontSize: '11px',
                                position: 'relative',
                                right: '12px',
                                top: '5px',
                                verticalAlign: 'top',
                                paddingTop: '2px'
                            }}
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
