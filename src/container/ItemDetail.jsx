import {ItemCount} from "../components/ItemCount"
import { CartContext } from "../context/cartContext";
import { useContext } from "react"

export const ItemDetail = ({ product }) => {

const { addItem } = useContext(CartContext)

const onAdd = quantity => addItem(product, quantity)
 
 return (
    <div className="cajaPadreFotoEinfo">
		<div className="cajaFoto">
		<img src={product?.pictureUrl} alt={product?.title} style={{ width: "30rem", height: "30rem" }}/>
		</div>
		
		<div className="cajaInfo" style={{width:"50%"}}>
		<h1>
			{product?.title}
			
			
		</h1>
		<h2>${product?.price}</h2>
		<h3>Categoria: {product?.category}</h3>
		
		<p>{product?.description}</p>
		<ItemCount stock={product?.stock} onAdd={onAdd}/>
		</div>
		
	</div>
	)
}
	