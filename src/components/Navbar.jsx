import React from 'react'
import CardWidget from './CardWidget'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
        <img className="logoImg" style={{ width: "6rem", height :"4rem" }}  src="https://assets-2.placeit.net/smart_templates/e5f576a494c7ebed7cc4f8a9c6dae84a/assets/preview_a945b6e98430d8c45c4579c564904ece.jpg" alt="logo" />
        <h2 className="Name">Next Level</h2>
        
        <nav>
            <ul>
                <li className="category"><a href="">Deportes</a></li>
                <li className="category"><a href="">Aventura</a></li>
                <li className="category"><a href="">Arcades</a></li>
                <li className="category"><a href="">Acción</a></li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default Navbar