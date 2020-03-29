import React, { Component } from 'react';
import Loader from '../Loader';
import { connect } from 'react-redux';
import Theme from '../../Theme';
import { getProducts } from '../../actions/getProducts';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import { setCartItem, updateCart } from '../../actions/cart';

class ProductList extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    addToCart = (product) => {
        let cartItem = this.props.cart.filter((item) => item.id === product.id);

        if (cartItem.length === 1) {
            let newCart = this.props.cart.filter((item) => item.id !== product.id);
            cartItem[0].quantity += 1;
            newCart.push(cartItem[0]);
            this.props.updateCart(newCart);
            return;
        }
        product.quantity = 1;
        this.props.setCartItem(product);
    }

    getProductsByPriceRange = () => {
        let products = [];
        if (this.props.priceFilterApplyClicked) {
            products = this.props.products.filter((item) => {
                let price = parseFloat(item.price) - (parseFloat(item.price) * (parseFloat(item.discount) / 100));
                return price >= this.props.minPrice && price <= this.props.maxPrice
            });
        }
        else {
            products = this.props.products.filter((item) => {
                let price = parseFloat(item.price) - (parseFloat(item.price) * (parseFloat(item.discount) / 100));
                return price >= this.props.prevMinPrice && price <= this.props.prevMaxPrice
            });
        }
        return products;
    }

    getSortedProducts = (products) => {
        let sortedProducts = [];
        if (this.props.sortCriteria === 'l_to_h') {
            sortedProducts = products.sort((a, b) => {
                let aPrice = parseFloat(a.price) - (parseFloat(a.price) * (parseFloat(a.discount) / 100));
                let bPrice = parseFloat(b.price) - (parseFloat(b.price) * (parseFloat(b.discount) / 100));
                return aPrice - bPrice;
            });
        }
        else if (this.props.sortCriteria === 'h_to_l') {
            sortedProducts = products.sort((a, b) => {
                let aPrice = parseFloat(a.price) - (parseFloat(a.price) * (parseFloat(a.discount) / 100));
                let bPrice = parseFloat(b.price) - (parseFloat(b.price) * (parseFloat(b.discount) / 100));
                return bPrice - aPrice;
            });
        }
        else if (this.props.sortCriteria === 'discount') {
            sortedProducts = products.sort((a, b) => {
                return b.discount - a.discount;
            });
        }
        return sortedProducts;
    }

    getSearchProducts = (sortedProducts) => {
        let searchedProducts = sortedProducts;
        if (this.props.searchQuery !== '') {
            console.log("Search Query ::: ", this.props.searchQuery);
            searchedProducts = sortedProducts.filter((product) => product.name.toLowerCase().includes(this.props.searchQuery.toLowerCase()));
        }
        if (searchedProducts.length === 0) {
            return sortedProducts;
        }
        return searchedProducts;
    }

    render() {
        let products = this.getProductsByPriceRange();
        let sortedProducts = this.getSortedProducts(products);
        let searchedProducts = this.getSearchProducts(sortedProducts);
        return (
            <React.Fragment>
                <Mobile>
                    <div className="product-list">
                        {searchedProducts.length > 0 ?
                            searchedProducts.map((product, index) => {
                                return (
                                    <div key={product.id}
                                        className={index % 2 === 0 ? 'float-left card p-4 w-50 mt-2 mb-2' : 'float-right card p-4 w-50 mt-2 mb-2'}
                                        style={{ height: 'fit-content', minHeight: '25%', minWidth: '25%' }}
                                    >
                                        <img height="150px" src={`${product.img_url}`} alt="product"></img>
                                        <p>{product.name}</p>
                                        <div className="d-inline" style={{ width: 'max-content' }}>
                                            <span><i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))}</span>
                                            <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                {parseFloat(product.price)}
                                            </p>
                                            <span style={{ marginLeft: '10px' }}>{product.discount + '%Off'}</span>
                                        </div>
                                        <button style={Theme.secondaryBtn} onClick={() => this.addToCart(product)}>Add to Cart</button>
                                    </div>
                                )

                            })
                            : <Loader />
                        }
                    </div>
                </Mobile>
                <Desktop>
                    <div className="row product-list mb-5">
                        {searchedProducts.length > 0 ?
                            searchedProducts.map((product, index) => {
                                return (
                                    <div key={product.id} className="m-2 col-md-2 col-sm-2 col-xs-2 card p-3">
                                        <img height="200px" src={`${product.img_url}`} alt="product"></img>
                                        <p>{product.name}</p>
                                        <div className="d-inline" style={{ width: 'max-content' }}>
                                            <span><i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discount) / 100))}</span>
                                            <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                {parseFloat(product.price)}
                                            </p>
                                            <span style={{ marginLeft: '10px' }}>{product.discount + '%Off'}</span>
                                        </div>
                                        <button style={Theme.secondaryBtn} onClick={() => this.addToCart(product)}>Add to Cart</button>
                                    </div>
                                )
                            })
                            : <Loader />
                        }
                    </div>
                </Desktop>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("STATE==", state);
    return {
        products: state.products,
        minPrice: state.prices.minPrice,
        maxPrice: state.prices.maxPrice,
        prevMaxPrice: state.prices.prevMaxPrice,
        prevMinPrice: state.prices.prevMinPrice,
        priceFilterApplyClicked: state.prices.priceFilterApplyClicked,
        sortCriteria: state.sortCriteria,
        searchQuery: state.searchQuery,
        cart: state.cart
    }
}
export default connect(mapStateToProps, { getProducts, setCartItem, updateCart })(ProductList);