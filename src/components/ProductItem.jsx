import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AddToCartImage from '@icons/add.svg';
import AddedToCardImage from '@icons/added.svg';
import AppContext from '../context/AppContext'

const ProductItem = ({product}) => {
	const { state, addToCart } = useContext(AppContext)

	const handleClick = (item) => {
		if (state.cart.includes(item)) {
			return
		} else {
			addToCart(item) 
		}
	}

	const verifyAdded = (item) => {
		if (state.cart.includes(item)) {
			return AddedToCardImage
		} else {
			return AddToCartImage
		}
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
					<img src={verifyAdded(product)} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;