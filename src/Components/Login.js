
import "./Login.css"
import React, {useEffect,useState} from "react";
import {IdentityService} from "../Services/IdentityService";

export const Login = () =>
{
    const [login,setLogin] = useState("");
    const [password,setPassword] = useState("");

    const handleLoginVerification = () =>
    {
        IdentityService.Login(login,password).then(data=>
        {
            if(data.success)
            {
                localStorage.setItem('token',data.token);
                localStorage.setItem('KeyPublic',JSON.stringify(data.keyPublic));
            }
            else
            {
                alert(JSON.stringify(data.errors))
            }
        });
    }

    return <>
        <div className={"box"}>
                <h1>Login</h1>
                <input onChange={e => setLogin(e.target.value)} type={"text"} name={""} placeholder={"Username"}/>
                <input onChange={e => setPassword(e.target.value)} type={"password"} name={""} placeholder={"Password"}/>
                <input type={"submit"} onClick={handleLoginVerification} name={""} value={"Login"}/>
        </div>
    </>
}