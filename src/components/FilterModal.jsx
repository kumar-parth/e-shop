import React from 'react';
import Filter from './Home/Filter';
import { connect } from 'react-redux';
import { setPriceFilterApplyClicked } from '../actions/price';

const FilterModal = (props) => {

    let handleClick = () => {
        props.setPriceFilterApplyClicked(true);
    }

    return (
        <div className="modal fade"
            id="example2Modal" tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ paddingRight: '10px', top: '17%' }}>
            <div className="modal-dialog" style={{ paddingRight: '10px' }} role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Filter Options</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <Filter />
                    </div>
                    <div className="modal-footer d-flex flex-row justify-content-around m-0 p-0">
                        <button type="button" className="btn " data-dismiss="modal" style={{ background: "none" }}>Cancel</button>
                        <button type="button" className="btn" data-dismiss="modal" style={{ background: "none" }} onClick={handleClick}>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(null, { setPriceFilterApplyClicked })(FilterModal);