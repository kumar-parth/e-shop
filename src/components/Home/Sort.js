import React, { Component } from 'react';
import '../../css/sort.css';
import { setSortCriteria } from '../../actions';
import { connect } from 'react-redux';

class Sort extends Component {

    handleClick = (e) => {
        console.log(e.target.dataset.val);
        this.props.setSortCriteria(e.target.dataset.val);
    }
    render() {
        return (
            <div className="col-12 mt-4">
                <h4 className="d-inline p-4"> Sort By </h4>
                <b data-val="l_to_h" className=
                    {this.props.sortCriteria === 'l_to_h' ?
                        "sort__active sort__list d-inline p-5" :
                        "sort__list d-inline p-4"}
                    onClick={this.handleClick}>Price - Low to High</b>
                <b data-val="h_to_l" className=
                    {this.props.sortCriteria === 'h_to_l' ?
                        "sort__active sort__list d-inline p-5" :
                        "sort__list d-inline p-4"}
                    onClick={this.handleClick}>Price - High to Low</b>
                <b data-val="discount" className=
                    {this.props.sortCriteria === 'discount' ?
                        "sort__active sort__list d-inline p-5" :
                        "sort__list d-inline p-4"}
                    onClick={this.handleClick}>Discount</b>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sortCriteria: state.sortCriteria
    }
}

export default connect(mapStateToProps, { setSortCriteria })(Sort);