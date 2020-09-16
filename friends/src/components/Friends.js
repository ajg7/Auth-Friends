import React, { useState, useEffect} from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Friends = props => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("/api/friends")
            .then(response => {
                setFriends(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return(
        <div>
            <h2>Friends</h2>
                {friends.map(friend => {
                    return (
                        <div>
                            <h3>{friend.name}</h3>
                            <h4>{friend.age}</h4>
                            <h4>{friend.email}</h4>
                        </div>
                    )
                })}
        </div>
    )
}

export default Friends;