
import "./Login.css"
import React, {useEffect} from "react";

export const Login = () =>
{
    return <>
        <div className={"box"}>
            <form>
                <h1>Login</h1>
                <input type={"text"} name={""} placeholder={"Username"}/>
                <input type={"password"} name={""} placeholder={"Password"}/>
                <input type={"submit"} name={""} value={"Login"}/>
            </form>
        </div>
    </>
}