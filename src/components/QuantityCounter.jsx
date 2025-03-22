import React from 'react';
import { connect } from 'react-redux';
import { updateCart, setTotalCartQuantity } from '../actions/cart';

import '../css/cart.css';

const QuantityCounter = (props) => {

    let isMinusDisabled = (quantity) => {
        if (quantity === 0) {
            return true;
        }
        return false;
    }

    let changeQty = (action, product, e) => {
        console.log("CLICKED");
        e.preventDefault();
        // console.log(denom, action);
        if (action === 'PLUS') {
            let totalCartQuantity = props.totalCartQuantity;
            totalCartQuantity += 1;
            props.setTotalCartQuantity(totalCartQuantity);
            console.log("PLUS CLICKED == ", props.cart);
            let cart = props.cart;
            cart.forEach((item) => {
                if (item.id === product.id) {
                    item.quantity += 1;
                }
            });
            console.log("NEW CART ==", cart);
            props.updateCart(cart);
        } else if (action === 'MINUS') {
            let quantity = product.quantity;
            if (quantity > 1) {
                let totalCartQuantity = props.totalCartQuantity;
                totalCartQuantity -= 1;
                props.setTotalCartQuantity(totalCartQuantity);
            }
            console.log("MINUS CLICKED == ", product);
            let cart = props.cart;
            cart.forEach((item) => {
                if (item.id === product.id && item.quantity > 1) {
                    item.quantity -= 1;
                }
            });
            console.log("NEW CART ==", cart);
            props.updateCart(cart);
        }
    }

    return (
        <React.Fragment>
            <button type="button"
                className="btn quantityCounter__buttons"
                disabled={isMinusDisabled(props.product.quantity)}
                onClick={(e) => changeQty('MINUS', props.product, e)}>-</button>
            <input type="text" disabled={true} className="form-control w-25 mr-2 ml-2 text-center d-inline"
                value={props.product.quantity} />
            <button type="button"
                className="btn quantityCounter__buttons"
                onClick={(e) => changeQty('PLUS', props.product, e)}>+</button>
        </React.Fragment>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log("OWN PROPS== ", ownProps.product);
    return {
        cart: state.cart,
        product: ownProps.product,
        totalCartQuantity: state.totalCartQuantity
    }
}

export default connect(mapStateToProps, { updateCart, setTotalCartQuantity })(QuantityCounter);