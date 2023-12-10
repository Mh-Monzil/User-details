import React from 'react';
import { useEffect, useState } from 'react';
import User from '../User/User';
import UserDetails from '../UserDetails/UserDetails';


const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data))
    }, [])
  // console.log(users)
    // const [details, setDetails] = useState([]);
    // const detailsButton = (key) => {
    // console.log("clicked button")
    // console.log(key)
    // const person = users.find(user => user.id === key);
    // console.log(person)
    // setDetails(person)
    // }
    return (
        <div>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
        </div>
    );
};

export default Home;