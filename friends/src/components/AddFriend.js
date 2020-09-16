import React, { useState } from "react":
import { useHistory, Link } from "react-router-dom";
import axiosWithAuth from "../axiosWithAuth";

const AddFriend = props => {

    const initialFriendValues = {
        name: "",
        age: "",
        email: ""
    }

    const [friendValues, setFriendValues] = useState(initialFriendValues);
    const history = useHistory();

    const change = event => {
        setFriendValues({...friendValues, [event.target.name]: event.target.value})
    }

    const addFriend = event => {
        event.preventDefault();
        axiosWithAuth().post("http://localhost:5000/api/friends", friendValues)
            .then(response => {
                localStorage.setItem("token", response.data.payload);
                history.push("/protected");
            })
            .catch(error => {
                console.log(error)
            })

    }


}

export default AddFriend;