import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore"
import React from 'react'
import { CardWidget } from './CardWidget'




const Navbar = () => {

const [itemsMenu, setItemsMenu] = useState([])

useEffect(() =>{
  const db = getFirestore()

		const refCollection = collection(db, "items")

		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) console.log("no results")
			else {
				const categories = snapshot.docs.map(
					item => item.data().category
				)
				const uniqueCategories = new Set(categories)
				setItemsMenu([...uniqueCategories].sort())
			}
		})
}, [])

  return (
    <header className='header'>
      <NavLink to="/" className={"home"}><img className="logoImg" style={{ width: "6rem", height :"4rem" }}  src="https://assets-2.placeit.net/smart_templates/e5f576a494c7ebed7cc4f8a9c6dae84a/assets/preview_a945b6e98430d8c45c4579c564904ece.jpg" alt="logo" /></NavLink>
       
        <NavLink to="/" className={"home"}> <h2 className='title'>Next Level</h2> </NavLink>
        
        <nav>
            <ul>
              {itemsMenu?.map(item => (
                <NavLink key={item} to={`/category/${item}`} className="categories">{item}</NavLink>
              ))}
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default Navbar