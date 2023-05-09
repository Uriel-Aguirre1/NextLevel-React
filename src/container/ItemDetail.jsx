import {ItemCount} from "../components/ItemCount"
import './ItenListContainer.css';

export const ItemDetail = ({ product, onAdd}) => {
	return (
    <div className="cajaPadreFotoEinfo">
		<div className="cajaFoto">
		<img src={product?.pictureUrl} alt={product?.title} style={{width:"65%"}}/>
		</div>
		
		<div className="cajaInfo" style={{width:"50%"}}>
		<h1>
			{product?.title}
			
			
		</h1>
		<h2>{product?.price}</h2>
		<h3>{product?.category}</h3>
		
		<p>{product?.description}</p>
		<ItemCount stock={product?.stock} onAdd={onAdd}/>
		</div>
		
	</div>
	)
	
	}
	