import React, { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AddToCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext'

const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext)

	const handleClick = (payload) => {
		addToCart(payload)
	}

	return (
		<div className="ProductItem" key={product.id}>
			<img src={product.images[0]} alt="product.image" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)} >
					<img src={AddToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;