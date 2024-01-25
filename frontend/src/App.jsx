import React, {useContext} from 'react'
import './App.css'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Newafood from './pages/newafood/Newafood'
import Contact from './pages/contact/Contact'
import MenuItem from './pages/menuitem/MenuItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'
import { LinkContainer } from 'react-router-bootstrap'
import Checkout from './pages/checkout/Checkout'
import { Store } from './Store'
import Cart from './pages/cart/Cart'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Success from './pages/success/success'

function App() {
  const{state} =useContext(Store) 
  const { cart} = state

  return (
    <BrowserRouter>
            <Navbar style={{backgroundColor: "rgb(9, 9, 160)"}} className="fixed-top" variant="primary">
          <Container>
            <LinkContainer style={{color:"white"}} to='/'>
            <Navbar.Brand>Authentic Newa Kitchen</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto fw-bolder">
              <Nav.Link style={{color:"white"}} href='/products'>Menu</Nav.Link>
              <Nav.Link style={{color:"white"}} href='/newafood'>Newa Food and Tradition</Nav.Link>
              <Nav.Link style={{color:"white"}} href='/contact'>Contact Us</Nav.Link>
            </Nav>
            <Nav className="float-right">
              <Nav.Link  href='/cart' className='nav=link'><img src="https://i.pinimg.com/564x/61/35/ea/6135ea31036edaa5c1669973009f6ff3.jpg" style={{width:"40px", borderRadius:"50%"}} alt="cart"/>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
              </Nav.Link> {"  "}
              <Nav.Link style={{color:"white"}} href='/signin'><strong>Login</strong></Nav.Link>
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
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />}/>
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/success' element={<Success />} />
            </Routes>
          </Container>
        </main>
        
        <footer className="fixed-bottom">
          <div className="text-center"> © 2024, Authentic Newa Kitchen</div>
        </footer>
     
    </BrowserRouter>
  )
}

export default App
