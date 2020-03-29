import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BaseLayout from '../layouts/BaseLayout';
import OrderSummary from '../components/OrderSummary';
import QuantityCounter from '../components/QuantityCounter';
import { updateCart, setTotalCartQuantity } from '../actions/cart';
import { Mobile, Desktop } from '../utils/MediaQuery';

import '../css/cart.css';

class Cart extends Component {

    getOrderSummary = (cart) => {
        let totalPrice = 0;
        let allItemsPrice = 0;
        let discount = 0;
        let quantity = 0;
        cart.forEach((item) => {
            let itemPrice = parseFloat(item.price).toFixed(2) * parseFloat(item.quantity);
            let itemDiscount = parseFloat(itemPrice).toFixed(2) * parseFloat(parseFloat(item.discount) / 100);
            console.log("ITEM DISCOUNT === ", parseFloat(itemPrice));
            allItemsPrice += itemPrice;
            quantity += 1;
            discount += itemDiscount;
        });
        totalPrice += allItemsPrice - discount;
        console.log(totalPrice, '---', discount, '---', quantity, '---', allItemsPrice);
        return { totalPrice, discount, quantity, allItemsPrice };
    }

    handleRemoveProduct = (product) => {
        let productQuantity = product.quantity;
        let totalCartQuantity = this.props.totalCartQuantity;
        totalCartQuantity -= productQuantity;
        this.props.setTotalCartQuantity(totalCartQuantity);
        let cart = this.props.cart;
        let newCart = cart.filter((item) => item.id !== product.id);
        this.props.updateCart(newCart);
    }

    render() {
        let orderSummary = this.getOrderSummary(this.props.cart);
        return (
            <BaseLayout>
                <div className="row col-12 mb-5">
                    <div className="col-md-8">
                        {this.props.cart.length > 0 ?
                            this.props.cart.map((product) => {
                                return (
                                    <React.Fragment key={product.id}>
                                        <Desktop>
                                            <div key={product.id + '-Desktop'} className="card mt-5">
                                                <div className="row col-md-12">
                                                    <div className="col-md-3 p-3">
                                                        <img height="150px" src={`${product.img_url}`} alt="product"></img>
                                                    </div>
                                                    <div className="col-md-9 pt-3">
                                                        <p>{product.name}</p>
                                                        <div className="row col-md-12">
                                                            <div className="col-md-5 pl-0">
                                                                <span><i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))}</span>
                                                                <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                                    <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                                    {parseFloat(product.price)}
                                                                </p>
                                                                <span style={{ marginLeft: '10px' }}>{product.discount + '%Off'}</span>
                                                            </div>
                                                            <div className="col-md-5">
                                                                <QuantityCounter product={product} />
                                                            </div>
                                                            <div className="col-md-2">
                                                                <button onClick={() => this.handleRemoveProduct(product)} className="cart__remove">REMOVE</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Desktop>
                                        <Mobile>
                                            <div key={product.id + '-Mobile'} className="card mt-5">
                                                <div className="row col-md-12 pr-0">
                                                    <div className="col-md-4 p-3 w-50">
                                                        <img height="150px" src={`${product.img_url}`} alt="product"></img>
                                                    </div>
                                                    <div className="col-md-8 pt-3 w-50 m-0 pl-0 pr-0">
                                                        <p>{product.name}</p>
                                                        <div>
                                                            <div className="col-12 d-flex flex-row p-0 float-left">
                                                                <span><i className="fas fa-rupee-sign" style={{ fontSize: "11px" }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))}</span>
                                                                <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                                    <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                                    {parseFloat(product.price)}
                                                                </p>
                                                                <span style={{ marginLeft: '10px' }}>{product.discount + '%Off'}</span>
                                                            </div>
                                                            <div className="col-12 w-100 d-flex float-right p-0" style={{ zIndex: '1000' }}>
                                                                <QuantityCounter product={product} />
                                                            </div>
                                                            <div className="col-12">
                                                                <button onClick={() => this.handleRemoveProduct(product)} className="cart__remove__mobile">REMOVE</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Mobile>
                                    </React.Fragment>)
                            })
                            :
                            <p style={{ textAlign: 'center', marginTop: '10%' }}> Your cart is empty <Link to={'/'}>Click here to shop</Link></p>}
                    </div>
                    <div className="col-md-4 mr-0">
                        <OrderSummary orderSummary={orderSummary} />
                    </div>
                </div>
            </BaseLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        totalCartQuantity: state.totalCartQuantity
    }
}

export default connect(mapStateToProps, { updateCart, setTotalCartQuantity })(Cart);