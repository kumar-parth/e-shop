import React from 'react';
import { connect } from 'react-redux';
import { setSortCriteria } from '../actions';

const SortModal = (props) => {

    let handleChange = (val) => {
        props.setSortCriteria(val);
    }

    return (
        <div className="modal fade" id="exampleModal"
            tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true" style={{ paddingRight: '10px', top: '17%' }}>
            <div className="modal-dialog" style={{ paddingRight: '10px' }} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sort Options</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-group">
                            <div className="radio">
                                <label><input type="radio" name="sortOption"
                                    checked={props.sortCriteria === 'l_to_h'} onChange={() => handleChange('l_to_h')} /> Prices -- Low to High</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="sortOption"
                                    checked={props.sortCriteria === 'h_to_l'} onChange={() => handleChange('h_to_l')} /> Prices -- High to Low</label>
                            </div>
                            <div className="radio">
                                <label><input type="radio" name="sortOption"
                                    checked={props.sortCriteria === 'discountPercentage'} onChange={() => handleChange('discountPercentage')} /> discountPercentage</label>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer d-flex flex-row justify-content-around m-0 p-0">
                        <button type="button" className="btn " data-dismiss="modal"
                            style={{ background: "none" }}>Cancel</button>
                        <button type="button" className="btn" data-dismiss="modal"
                            style={{ background: "none" }}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sortCriteria: state.sortCriteria
    }
}

export default connect(mapStateToProps, { setSortCriteria })(SortModal);