import { useState, useEffect} from 'react'
import products from "../data/products.json";
import {ItemDetail} from "./ItemDetail";
import { useParams } from 'react-router-dom';
import './ItenListContainer.css';




export const ItemDetailContainer = ({ onAdd }) => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			setTimeout(() => {
				const product = products.find(item => item.id === id)
				resolve(product)
			}, 2000)
		})
		getItem.then(result => setProduct(result))
	}, [id])

	console.log(product)

	return (
		<div>
<ItemDetail product={product} key={product} onAdd={onAdd} />


		</div>
			
		
	)
}

