import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Card from './components/card/Card'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Newafood from './pages/newafood/Newafood'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import MenuItem from  './pages/menuitem/MenuItem'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
// import Spinner from './components/spinner/Spinner'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import{LinkContainer} from 'react-router-bootstrap'
import Dommy from './pages/Dommy'

function App() {

  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
    {/* <Header /> */}
  <Navbar bg="primary" variant="primary">
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>Newa Authentic Kitchen</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto fw-bolder">
              <Nav.Link href='/products'>Menu</Nav.Link>
              <Nav.Link href='/newafood'>Newa Food and Tradition</Nav.Link>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/contact'>Contact Us</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
     
            </Nav>
    </Container>
  </Navbar>
 

<main>
<Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Menu />} />
        <Route path='/products/:slug' element={<MenuItem />} />
        <Route path='/newafood' element={<Newafood />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />

      </Routes>

      </Container>
      </main>
      <footer>
        <div className="text-center"> © 2024, Newa Authentic Kitchen</div>
      </footer>
    {/* <Card />
    <Card /> <br/><br/><br/>
    <Spinner /> */}

    </div>
    </BrowserRouter>
  )
}

export default App
