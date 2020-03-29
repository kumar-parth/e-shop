import { combineReducers } from 'redux';
import drawerMobile from './DrawerMobileReducer';
import products from './ProductReducer';
import prices from './PriceReducer';
import searchQuery from './SearchReducer';
import sortCriteria from './SortReducer';
import cart from './CartReducer';

const appReducer = combineReducers({
    drawerMobile,
    products,
    prices,
    sortCriteria,
    searchQuery,
    cart
});

export default appReducer;