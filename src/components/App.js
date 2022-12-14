import {useState, useEffect} from 'react'
import Banner from './Banner'
import logo from '../assets/logoleaf.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'

function App() {
    const [activeCategory, setActiveCategory] = useState('')
    const savedCart = localStorage.getItem('cart')
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart): [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
                <h1 className='lmj-title'>La maison jungle</h1>
            </Banner>
            <div className='lmj-layout-inner'>
                <Cart activeCategory={activeCategory} cart={cart} updateCart={updateCart} />
                <ShoppingList activeCategory={activeCategory} setActiveCategory={setActiveCategory} cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App