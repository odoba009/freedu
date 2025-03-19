import { Link, useNavigate } from "react-router-dom";
import "./css/auth.css";
import React from "react";
import { toast } from "react-toastify";

type Login = {
    username: string,
    password: string
}

export default function Login() {
    const [formInput, setFormInput] = React.useState<Login>({
        username:"",
        password:""
    });

    const navigate = useNavigate();
    
    function handleInputChange (event:React.ChangeEvent<HTMLInputElement>){
        setFormInput((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(formInput.username === "mwlnmrecord" && formInput.password === "myrecordpass$"){
            toast.success("Login successful!")
            return navigate("/dashboard")
        }else{
            toast.error("Incorrect username or password")
        }
    }

  return (
    <div>
        <div style={{textAlign:"center", padding:"20px 0", fontSize:20, fontWeight:"bold"}} className="">
 
        Freedo
    </div>

    <div className="" style={{minHeight:"70vh", display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"20px"}}>
        <form action="" method="post" onSubmit={handleSubmit}>
        <div className="auth-form" style={{width:"100%"}}>
            <p style={{textAlign:"center", fontSize:20, fontWeight:"bold", margin:"30px 0"}}>Login</p>

            <div className="input-field">
                <label htmlFor="">Username</label>
                <input onChange={handleInputChange} type="text" name="username" />
            </div>
            <div className="input-field">
                <label htmlFor="">Password</label>
                <input onChange={handleInputChange} type="password" name="password" />
            </div>

            
                <div style={{marginBottom:10}}>
                    <input type="checkbox" name="" id="" />
                    <span style={{marginRight:5}}></span>
                    <label htmlFor="">Remeber me</label>
                </div>
            

            <div className="input-field">
                <button type="submit">Login</button>
            </div>
        </div>
        <p style={{marginTop: 10, fontSize:"small"}}>Don't have an account with us? <Link to={""}>Register now</Link> </p>
        </form>
        
    </div>

    </div>
  )
}
