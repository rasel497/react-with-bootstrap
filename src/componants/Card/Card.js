import React from 'react';

const Card = (props) => {
    const { id, name, price } = props.product;

    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Price: ${price}</p>
                <p className="card-text">This is a wider card with supporting text content.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    );
};

export default Card;