// import {useState}  from 'react'
// import { useNavigate } from 'react-router-dom';

// const Signin = () => {
//     const navigate = useNavigate();
//     //for user inputs
//     const [userData, setUserData] = useState({
//         username: '',
//         password:'',
//     })
//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Implement authentication logic here
//     console.log('Form submitted with:', userData);
//     // Reset form fields after submission
//     setUserData({
//       username: '',
//       password: '',
//     });
//   };
//   const signupHandler = () => {
//     navigate('/signup')
// }

//   return (
//     <div>
//     <div className="signin">
//     <h2>Login</h2>
//     <form onSubmit={handleFormSubmit}>
//       <label>
//         Username:
//         <input
//           type="text"
//           name="username"
//           required
//           value={userData.username}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           required
//           value={userData.password}
//           onChange={handleInputChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//     </div>
//     <br />
//     <button onClick={signupHandler} type="submit"> Not a Member? Create your account!!!</button>
//   </div>
//   )
// }

// export default Signin


import React, {useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


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
                    alert("Invalid email or passwort")
                }
            })
            .catch(e=>{
                alert("Invalid email or password")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }

    return (
        <div className="signin">

            <h1>Signin</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" name="password" autoComplete="on" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Signin