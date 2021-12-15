import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png'

const OrderItem = ({item}) => {
	return (
		<div className="OrderItem">
			<figure>
				<img src={item.images[0]} alt="bike" />
			</figure>
			<p>{item.title}</p>
			<p>${item.price}</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
 