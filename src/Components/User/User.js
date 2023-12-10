import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const user = props.user;
    const {id,name,website} = user;
    const userStyle = {
        border: '2px solid purple',
        padding: '40px',
        margin: '40px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h1>{name}</h1>
            <h3>{website}</h3>
            <Link to={`/user-details/${id}`}>
                <button>More Details</button>
            </Link>
        </div>
    );
};
// onClick={() => props.button(id)}
export default User;