import React from 'react';
import { Grid } from '@mui/material';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'shoes', description: 'Running Shoes', price: '$5' },
    { id: 2, name: 'MacBook', description: 'Apple MacBook', price: '$100' }
];


const Products = () => {
    return (
        <main>
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={4}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;