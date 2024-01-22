import React, {useContext} from 'react'
import './App.css'
import Header from './components/header/Header'
import Card from './components/card/Card'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Newafood from './pages/newafood/Newafood'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import MenuItem from './pages/menuitem/MenuItem'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
// import Spinner from './components/spinner/Spinner'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import { LinkContainer } from 'react-router-bootstrap'
import Dommy from './pages/Dommy'
import { Store } from './Store'
import Cart from './pages/cart/Cart'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'

function App() {
  const{state} =useContext(Store) 
  const { cart} = state

  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        {/* <Header /> */}
        <Navbar bg="primary" variant="primary">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Authentic Newa Kitchen</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto fw-bolder">
              <Nav.Link href='/products'>Menu</Nav.Link>
              <Nav.Link href='/newafood'>Newa Food and Tradition</Nav.Link>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/contact'>Contact Us</Nav.Link>
              <Nav.Link href='/signin'>Login</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href='/cart' className='nav=link'><img src="https://cdn0.iconfinder.com/data/icons/food-delivery-outline-stay-home/512/Food_bag-512.png" style={{width:"40px"}} alt="cart"/>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>


        <main>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Menu />} />
              <Route path='/products/:slug' element={<MenuItem />} />
              <Route path='/newafood' element={<Newafood />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />

            </Routes>

          </Container>
        </main>
        <footer>
          <div className="text-center"> © 2024, Newa Authentic Kitchen</div>
        </footer>
        {/* <Card />
    <Card /> <br/><br/><br/>
    <Spinner /> */}
{/* <Signin /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
