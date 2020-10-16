import React from 'react';

const SingleServiceList = ({order}) => {
    return (
        <div className="col-md-6">
            <div className="list-inner">
                <div className="d-flex justify-content-between">
                    <img src={`http://localhost:7000/${order.img}`} alt="" className="img-fluid"/>
                    <div className="status">
                        <strong>{order.status}</strong>
                    </div>
                </div>
                <h4>{order.projectName}</h4>
                <p>{order.description}</p>
            </div>
        </div>
    );
};

export default SingleServiceList;