import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}/`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    const {name, email ,website} = user;

    return (
        <div>
            <h1>User Details : {userId}</h1>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Website: {website}</h3>
        </div>
    );
};

export default UserDetails;