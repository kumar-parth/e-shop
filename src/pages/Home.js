import React, { Component } from 'react';
import BaseLayout from '../layouts/BaseLayout';
import Filter from '../components/Home/Filter';
import ProductList from '../components/Home/ProductList';
import Theme from '../Theme';
import { Desktop, Mobile } from '../utils/MediaQuery';
import { connect } from 'react-redux';
import Sort from '../components/Home/Sort';
import { setPriceFilterApplyClicked } from '../actions/price';
import SortModal from '../components/SortModal';
import FilterModal from '../components/FilterModal';

class Home extends Component {

    handleClick = () => {
        this.props.setPriceFilterApplyClicked(true);
    }

    render() {
        return (
            <BaseLayout>
                <div className="row ml-2 mr-2">
                    <Desktop>
                        <div className="col-3" style={{ borderRight: '1px solid rgba(0,0,0,.1)' }}>
                            <h3 className="text-center m-4">Filters</h3>
                            <Filter />
                            <div className="filter__apply text-center">
                                <button onClick={this.handleClick} style={Theme.primaryBtn}>Apply</button>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <Sort />
                            </div>
                            <ProductList />
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className="d-flex flex-row justify-content-between w-100 mt-2">
                            <div className="col-sm-6 text-center"><button type="button" data-toggle="modal" data-target="#exampleModal"><b><i className="fa fa-sort" style={{ fontSize: 'x-large', marginRight: '5px' }} aria-hidden="true"></i>Sort</b></button></div>
                            <div className="col-sm-6 text-center"><button type="button" data-toggle="modal" data-target="#example2Modal"><b><i className="fa fa-filter" style={{ fontSize: 'x-large', marginRight: '5px' }} aria-hidden="true"></i>Filter</b></button></div>
                        </div>
                        <ProductList />
                    </Mobile>
                </div>
                {/* <!-- Sort Modal --> */}
                <SortModal />
                {/* <!-- Sort Modal End --> */}
                {/* <!-- Filter Modal --> */}
                <FilterModal />
                {/* <!-- Filter Modal End --> */}
            </BaseLayout>
        )
    }
}

export default connect(null, { setPriceFilterApplyClicked })(Home);