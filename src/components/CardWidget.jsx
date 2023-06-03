import React from 'react'
import { CartContext } from '../context/cartContext';
import { useContext } from "react"
import { Link } from "react-router-dom"

export const CardWidget = () => {
	const { productosAgregados } = useContext(CartContext)

	const totalQuantity = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity,
			0
		)

return (
		!!totalQuantity() && (
			<Link to="/cart">
				<div className='carritoContainer'>
				<div>
					<span>🛒</span>
					<span>{totalQuantity()}</span>
				</div>
				<div className='carritoButton'>
				<button>Terminar mi compra</button>
				</div>
					
					
					
				</div>
				
			</Link>
		)
	)
}