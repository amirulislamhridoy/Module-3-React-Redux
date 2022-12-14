import { useEffect } from "react";
import { useState } from "react";
import React from 'react';
import User from "../User/User";

const Home = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            {users.map((user, i) => <User user={user} key={i}></User>)}
        </div>
    );
};

export default Home;
