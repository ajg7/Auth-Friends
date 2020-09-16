import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";


const AddFriend = props => {
    const initialFriendValue = {
        name: "",
        age: "",
        email: ""
    }

    const [friendValues, setFriendValues] = useState(initialFriendValue);
    const history = useHistory();

    const change = event => {
        setFriendValues({
            ...friendValues,
            [event.target.name]: event.target.value
        })
    }

    const submit = event => {
        event.preventDefault();
        setFriendValues({
            ...friendValues
        })
    }


    axiosWithAuth().post("./api/friends", friendValues)
        .then(response => {
            localStorage.setItem("token", response.data.payload)
            history.push("/friendsList")
        })
        .catch(error => {
            console.log(error);
        })

    return(
        <>
            <form>
                <label>Name: 
                    <input 
                    name="name"
                    type="text"
                    value={friendValues.name}
                    onChange={change}
                    />
                </label>
                <label>Age: 
                    <input 
                    name="age"
                    type="text"
                    value={friendValues.age}
                    onChange={change}
                    />
                </label>
                <label>Email: 
                    <input 
                    name="email"
                    type="text"
                    value={friendValues.email}
                    onChange={change}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )


}

export default AddFriend;