import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './signin.css'


function Signin() {

    const navigate=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:5000/api/users/signin",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    navigate("/checkout",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("Invalid email or password.")
                }
            })
            .catch(error=>{
                alert("Invalid email or password.")
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="signin">
            <h1>Sign in</h1>
            <div className="form_body">
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  /> <br/><br/>
                <input type="password" name="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  /> <br /><br/>
                <input type="submit" style={{ backgroundColor: "rgb(9, 9, 160)", color:"white"}} onClick={submit} />
            </form>
            <br />
            <h5>not a member? <Link to="/signup" style={{textDecoration:"none"}}> Sign up</Link> here!</h5>
            </div>
        </div>
    )
}

export default Signin