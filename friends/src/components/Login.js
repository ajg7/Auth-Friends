import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../axiosWithAuth";

const Login = props => {

    const credentials = {
        username: "",
        password: ""
    }

    const history = useHistory();
    const [loginValues, setLoginValues] = useState(credentials)

    const change = event => {
        setLoginValues({...loginValues, [event.target.name]: event.target.value})
    }

    const submitLogin = event => {
        event.preventDefault();
        axiosWithAuth().post("/api/login", loginValues)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                history.push("/friends");
            })
            .catch(error => {
                console.log(error)
            })

    }

    return(
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={submitLogin}>
                <label> Username:
                    <input 
                    name="username"
                    type="text"
                    placeholder="Enter Username Here..."
                    value={loginValues.username}
                    onChange={change}
                    />
                </label>
                <label> Password:
                    <input 
                    name="password"
                    type="password"
                    placeholder="Enter Password Here..."
                    value={loginValues.password}
                    onChange={change}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}


export default Login;