import { useState } from "react"
import { Link } from "react-router-dom"


export const ItemCount = ({ stock, onAdd, initial }) => {
	const [counter, setCounter] = useState(initial ?? 0)

	const handleIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handleDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	return (
		<section className="col-12 col-sm-6 col-md-3 mb-4">
			{stock > 0 ? (
				<>
					<div className="containerButton">
						<button
							variant="primary"
							onClick={handleIncreaseCount}
						>
							+
						</button>
						<input
							value={counter}
							
						/>
						<button
							variant="primary"
							onClick={handleDecreaseCount}
						>
							-
						</button>
					</div>
					{!!counter && (
						
                            <button 
							variant="outline-primary"
							className="agregarAlCarritoButton"
							onClick={() => onAdd(counter)}
						    >
							Agregar al carrito
						    </button>
						
						
					)}
					<div className="mt-4">
						Stock disponible: {stock - counter}
					</div>
				</>
			) : (
				<>
					<div className="mt-4">No hay stock</div>
					<Link to="/">
						<button variant="outline-primary" className="mt-4">
							Seguir comprando
						</button>
					</Link>
				</>
			)}
		</section>
	)
}

