import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { HomePage } from './Components/HomePage'
import { Footer } from './Components/Footer'
import { NavBar } from './Components/NavBar'
import { Routes, Route } from "react-router-dom"
import { Shop } from "./Components/Shop"
import { Basket } from './Components/Basket'

function App() {

    const [items, setItems] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [basket, setBasket] = useState([])
    
    return (
        <>
        <Header className="header-component"/>
        <NavBar className="nav-bar-component" />

        <Routes>
        <Route path="/" element={<HomePage items={items} setItems={setItems}/>} />
        <Route path="/shop" element={<Shop categories={categories} setCategories={setCategories} basket={basket} setBasket={setBasket}/>} />
        <Route path="/basket" element={<Basket basket={basket} setBasket={setBasket}/>} />
        </Routes>

        <Footer className="footer-component"/>
        </>
    )
}

export default App
