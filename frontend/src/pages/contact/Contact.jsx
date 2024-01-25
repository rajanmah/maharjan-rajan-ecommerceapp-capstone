import React from 'react'
import { Link } from 'react-router-dom'
import './contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact_form">
        <h5>Please fill up the form. We will get back to you as soon as possible.</h5>
        <form>
          <input type="text" width=" 200px" name="name" placeholder="Your Name" required />
          <br />
          <input type="email" name="email" placeholder="Your email address" required />
          <br />
          <textarea name="message" rows="6" placeholder="Mention the reason to contact" required />
          <br />
          <input style={{ backgroundColor: "rgb(9, 9, 160)", color: "white" }} type="submit" />
        </form>
       
          <h5>Find us on Social Media</h5>
          <Link style={{textDecoration:"none"}} target="_blank" to="https://www.facebook.com"> Facebook </Link> |
          <Link style={{textDecoration:"none"}} target="_blank" to="https://www.x.com"> X </Link> |
          <Link style={{textDecoration:"none"}} target="_blank" to="https://www.instagram.com"> Instagram </Link>

          <p>Visit out Store at 123 Main St, Place, NY 10012</p>
         </div>

    </div >
  )
}

export default Contact