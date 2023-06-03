import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import { CartContext } from "../context/cartContext"


export const Cart = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

	const { productosAgregados, deleteItem, clear } =
		useContext(CartContext)

	const sendOrder = () => {
		const order = {
			buyer: formValues,
			items: productosAgregados,
			total: total(),
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response => {
			if (response.id) {
				clear()
				alert("Su orden: " + response.id + " ha sido completada!")
			}
		})
	}

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

	const total = () =>
		productosAgregados.reduce(
			(acumulador, valorActual) =>
				acumulador + valorActual.quantity * valorActual.price,
			0
		)

	return (
		<div className="mt-4">
			<h1>Resumen de Compra:</h1>
			{!productosAgregados.length ? (
				<mark>No hay productos</mark>
			) : (
				<>
					<table className="cartTable">
						<thead>
							<tr className="cartTableTr">
								<th>Id del Producto</th>
								<th>Nombre</th>
								<th>Foto del Producto</th>
								<th>Precio</th>
								<th>Cantidad</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{productosAgregados.map(producto => (
								<tr key={producto.id}>
									<td>{producto.id}</td>
									<td>{producto.title}</td>
									<td>
										<img height={60} src={producto.pictureUrl}/>
									</td>
									<td>${producto.price}</td>
									<td>{producto.quantity}</td>
									<td>
										<button className="eliminarItem"
											onClick={() =>
												deleteItem(producto.id)
											}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td>Total</td>
								<td></td>
								<td></td>
								<td>${total()}</td>
								<td></td>
							</tr>
						</tfoot>
					</table>
					<h2>Ingresar datos de usuario para finalizar tu compra!</h2>
					<div className="cartCheckout">
					
					<form>
						<div
							className="containerLabel"
						>
							<label>Nombre: </label>
							
							<input
								onChange={handleChange}
								value={formValues.name}
								type="text"
								name="name"
								placeholder="Nombre"
							/>
						</div>
						<div
							className="containerLabel"
						>
							<label>Email: </label>
							<input
								onChange={handleChange}
								value={formValues.email}
								type="email"
								name="email"
								placeholder="Email"
							/>
						</div>
						<div className="containerLabel">
							<label>Telefono: </label>
							<input
								onChange={handleChange}
								value={formValues.phone}
								type="text"
								name="phone"
								placeholder="Telefono"
							/>
						</div>
						<div className="submitButtonContainer">
						<button className="submitButton"
							type="button"
							onClick={sendOrder}
						>
							Submit
						</button>
						</div>
					</form>
					</div>
				</>
			)}
		</div>
	)
}