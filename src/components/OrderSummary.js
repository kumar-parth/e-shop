import React from 'react';

const OrderSummary = (props) => {
    return (
        <div className="card mt-5 p-2 text-center">
            <div className="text-center font-weight-bold">
                Price Details
            </div>
            <hr />
            <div className="card-body pb-0 mt-4 pl-1">
                <div className="card-text d-flex justify-content-between mb-3">
                    <div className="h6">Price ({props.orderSummary.quantity} items)</div>
                    <div className="h6">
                        <i className="fas fa-rupee-sign" style={{ fontSize: '14px' }}></i>{props.orderSummary.allItemsPrice.toFixed(2)}
                    </div>
                </div>
                <div className="card-text d-flex justify-content-between mb-3">
                    <div className="h6 font-weight-normal">Discount</div>
                    <div className="h6 font-weight-normal">
                        <i className="fas fa-rupee-sign" style={{ fontSize: '14px' }}></i>{props.orderSummary.discount.toFixed(2)}
                    </div>
                </div>
                <div className="card-text d-flex justify-content-between mb-3">
                    <div className="h6 ">Total Payable</div>
                    <div className="h6">
                        <i className="fas fa-rupee-sign" style={{ fontSize: '14px' }}></i>{props.orderSummary.totalPrice.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary;