import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import './ItenListContainer.css';

import products from "../data/products.json";

import { ItemList } from './ItemList';


export const ItenListContainer = ({ greeting }) => {
	const [list, setList] = useState([])
	const { id } = useParams()

	console.log(id)

	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products)
			}, 2000)
		})
		productList.then(result => {
			if (id) {
				const productsFiltered = result.filter(
					item => item.category === id
				)
				setList(productsFiltered)
			} else {
				setList(result)
			}
		})
	}, [id])

	return (
		<>
			<h1 className='productos'>{greeting}</h1>
			<ItemList list={list} />
			</>
	)
}


