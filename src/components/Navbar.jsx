import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react'
import CardWidget from './CardWidget'
import './Navbar.css';

import products from "../data/products.json"

const Navbar = () => {

const [itemsMenu, setItemsMenu] = useState([])

useEffect(() =>{
  const productList = new Promise((resolve, reject)=>
  resolve(products)
  )
  productList.then(result => {
    const categories = result.map(item => item.category)
    const uniqueCategories = new Set(categories)
    setItemsMenu([... uniqueCategories].sort())
  })
}, [])

  return (
    <header className='header'>
        <img className="logoImg" style={{ width: "6rem", height :"4rem" }}  src="https://assets-2.placeit.net/smart_templates/e5f576a494c7ebed7cc4f8a9c6dae84a/assets/preview_a945b6e98430d8c45c4579c564904ece.jpg" alt="logo" />
        <h2 className="Name">Next Level</h2>
        
        <nav>
            <ul>
              <NavLink to="/" className={"home"}>Home</NavLink>
              {itemsMenu?.map(item => (
                <NavLink key={item} to={`/category/${item}`} className={"categories"}>{item.toUpperCase()}</NavLink>
              ))}
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default Navbar