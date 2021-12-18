import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import AppContext from '../context/AppContext'

const MyOrder = ({ toggleOrder, setToggleOrder }) => {
	const { state } = useContext(AppContext)
	const reducer = (prev, current) => prev + current.price
	const sumTotal = () => {
		const total = state.cart.reduce(reducer, 0)
		return total
	}
	return (
		<aside className="MyOrder">
			<div className="title-container" onClick={() => setToggleOrder(!toggleOrder)} >
				<img src={arrow} alt="arrow"/>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => (
					<OrderItem item={item} key={`orderIttem-${item.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder; 
