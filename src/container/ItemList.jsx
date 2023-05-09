import React from 'react'
import { Item } from './Item'
import './ItenListContainer.css';


export const ItemList = ({ list }) => {
 return(
	<div className='itemContainer'>
        {!list.length && "Loading"}
		{list.map(item => (
			<Item item={item}/>
		))}
	</div>

 ) 
}
