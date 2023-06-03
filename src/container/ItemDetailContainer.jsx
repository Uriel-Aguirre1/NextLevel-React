import { useState, useEffect} from 'react'
import { getFirestore, doc, getDoc } from "firebase/firestore"
import {ItemDetail} from "./ItemDetail";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = ({ onAdd }) => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const db = getFirestore()

		const refDoc = doc(db, "items", id)

		getDoc(refDoc).then(snapshot =>
			setProduct({ id: snapshot.id, ...snapshot.data() })
		)
	}, [id])

	console.log(product)

	return (
		<div>
         <ItemDetail product={product} key={product} onAdd={onAdd} />
		 </div>
			
		
	)
}

