import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = props => {

    const history = useHistory();
    

    return(
        <div className="login">
            <h2>Login</h2>
            <form>
                <label> Username:
                    <input 
                    name="username"
                    type="text"
                    placeholder="Enter Username Here..."
                    onChange={}
                    />
                </label>
                <label> Password:
                    <input 
                    name="password"
                    type="password"
                    placeholder="Enter Password Here..."
                    onChange={}
                    />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}


export default Login;