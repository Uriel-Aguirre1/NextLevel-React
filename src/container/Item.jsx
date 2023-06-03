import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({ item }) => (
  <div className="itemCaja" key={item.id} >
    <h3>{item.title}</h3>
    <img src={item.pictureUrl} alt="foto" style={{ width: "17rem", height: "20rem" }} />
    <p>{item.category}</p>
    <p>${item.price}</p>
    <div className="buttomCaja" >
      <Link to={`/item/${item.id}`}>
      <button> ver mas</button>
      </Link>
    </div> 
  </div>
)
	

  



