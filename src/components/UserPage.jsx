import { Login } from "./Login.jsx"
import { Register } from "./Register.jsx"

export const UserPage = ()=>{
    return (
        <div className="container">

         <h1 className="alert alert-info text-center">Login / Register App</h1>
        <button className="btn btn-primary">Login</button>&nbsp;
        <button className="btn btn-success">Register</button>
        <br></br> <br></br>
        

        <Login/>
        <Register/>

        </div>
    )
}

