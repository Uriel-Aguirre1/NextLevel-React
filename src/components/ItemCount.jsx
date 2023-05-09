import { useState, useEffect } from "react"
import '../container/ItenListContainer.css'

export const ItemCount = ({ stock, onAdd }) => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		if (counter > 0) onAdd(stock - counter)
	}, [counter])

	const handlerIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handlerDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	return (
		<div className="buttomCaja">
			
			<button onClick={handlerIncreaseCount}>+</button>
			<p className="counterP">{counter}</p>
			<button onClick={handlerDecreaseCount}>-</button>
			
			
			
		</div>
	)
}