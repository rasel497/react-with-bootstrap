import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Maecbook pro', price: 14500, },
        { id: 2, name: 'iPhone 14 max pro', price: 14500 },
        { id: 3, name: 'Samsung S10+ ultra', price: 14500 },
    ];

    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }

        </div>
    );
};

export default CardGroup;