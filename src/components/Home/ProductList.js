import React, { Component } from 'react';
import Loader from '../Loader';
import { connect } from 'react-redux';
import Theme from '../../Theme';
import { getProducts } from '../../actions/getProducts';
import { Desktop, Mobile } from '../../utils/MediaQuery';
import { setCartItem, updateCart, setTotalCartQuantity } from '../../actions/cart';
import '../../css/product-list.css';

class ProductList extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    addToCart = (product) => {
        let totalCartQuantity = this.props.totalCartQuantity;
        totalCartQuantity += 1;
        this.props.setTotalCartQuantity(totalCartQuantity);
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
                let price = parseFloat(item.price) - (parseFloat(item.price) * (parseFloat(item.discountPercentage) / 100));
                return price >= this.props.minPrice && price <= this.props.maxPrice
            });
        }
        else {
            products = this.props.products;
        }
        console.log('price range filter clicked', this.props.priceFilterApplyClicked);
        console.log('prod from price range', products);
        return products;
    }

    getSortedProducts = (products) => {
        let sortedProducts = [];
        if (this.props.sortCriteria === 'l_to_h') {
            sortedProducts = products.sort((a, b) => {
                let aPrice = parseFloat(a.price) - (parseFloat(a.price) * (parseFloat(a.discountPercentage) / 100));
                console.log(`a ${a}`, a.price);
                let bPrice = parseFloat(b.price) - (parseFloat(b.price) * (parseFloat(b.discountPercentage) / 100));
                console.log(`b ${b}`, b.price);
                return aPrice - bPrice;
            });
        }
        else if (this.props.sortCriteria === 'h_to_l') {
            sortedProducts = products.sort((a, b) => {
                let aPrice = parseFloat(a.price) - (parseFloat(a.price) * (parseFloat(a.discountPercentage) / 100));
                let bPrice = parseFloat(b.price) - (parseFloat(b.price) * (parseFloat(b.discountPercentage) / 100));
                return bPrice - aPrice;
            });
        }
        else if (this.props.sortCriteria === 'discount') {
            sortedProducts = products.sort((a, b) => {
                return b.discountPercentage - a.discountPercentage;
            });
        }
        console.log('sorted porudcts', sortedProducts);
        return sortedProducts;
    }

    getSearchProducts = (sortedProducts) => {
        let searchedProducts = sortedProducts;
        if (this.props.searchQuery !== '') {
            console.log("Search Query ::: ", this.props.searchQuery);
            searchedProducts = sortedProducts.filter((product) => product.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()));
        }
        if (searchedProducts.length === 0) {
            return sortedProducts;
        }
        return searchedProducts;
    }

    render() {
        console.log(this.props.products);
        let products = this.getProductsByPriceRange();
        let sortedProducts = this.getSortedProducts(products);
        let searchedProducts = this.getSearchProducts(sortedProducts);
        console.log(products);
        return (
            <React.Fragment>
                <Mobile>
                    <React.Fragment>
                        {searchedProducts.length > 0 ?
                            searchedProducts.map((product, index) => {
                                return (

                                    <div key={product.id}
                                        className={index % 2 === 0 ? 'mobile__card float-left card p-4 w-50 mt-2 mb-2' : 'mobile__card float-right card p-4 w-50 mt-2 mb-2'}
                                        style={{ height: 'fit-content', minHeight: '25%', minWidth: '25%' }}
                                    >
                                        <img height="130px" src={`${product.thumbnail}`} alt="product"></img>
                                        <p>{product.title}</p>
                                        <div className="d-inline" style={{ width: 'max-content' }}>
                                            <span><i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discountPercentage) / 100))}</span>
                                            <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                {parseFloat(product.price)}
                                            </p>
                                        </div>
                                        <p>{product.discountPercentage + '%Off'}</p>
                                        <button style={Theme.secondaryBtn} onClick={() => this.addToCart(product)}>Add to Cart</button>
                                    </div>
                                )

                            })
                            : <Loader />
                        }
                    </React.Fragment>
                </Mobile>
                <Desktop>
                    <div className="row product-list mb-5">
                        {searchedProducts.length > 0 ?
                            searchedProducts.map((product, index) => {
                                return (
                                    <div key={product.id} className="desktop__card m-2 col-md-2 col-sm-2 col-xs-2 card p-3">
                                        <img height="150px" src={`${product.thumbnail}`} alt="product"></img>
                                        <p>{product.title}</p>
                                        <div className="d-inline" style={{ width: 'max-content' }}>
                                            <span><i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>{parseFloat(product.price) - (parseFloat(product.price) * (parseFloat(product.discountPercentage) / 100))}</span>
                                            <p style={{ display: "inline", marginLeft: '10px', textDecoration: "line-through" }}>
                                                <i className="fas fa-rupee-sign" style={{ fontSize: '11px' }}></i>
                                                {parseFloat(product.price)}
                                            </p>
                                        </div>
                                        <p>{product.discountPercentage + '%Off'}</p>
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
        cart: state.cart,
        totalCartQuantity: state.totalCartQuantity
    }
}
export default connect(mapStateToProps, { getProducts, setCartItem, updateCart, setTotalCartQuantity })(ProductList);