import React, { useState } from 'react';
import './Login.css'

async function loginUser(credentials){
    return fetch('https://bd48e15c-cbff-4220-a5f8-bd91e5b5277e.mock.pstmn.io/Login')
    .then(res => res.text())
    .then(data => JSON.parse(data))
}

export default function Login(props) {
    const [username, setusername] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e=>{
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        })
        console.log(token, props.setToken);
        props.setToken(token);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <p>Username:</p>
                <input type='text' onChange={e=>setusername(e.target.value)}/>
            </label>
            <label>
                <p>Password:</p>
                <input type='password' onChange={e=>setPassword(e.target.value)}/>
            </label>
            <div>
                <button type='submit' >Log in</button>
            </div>
        </form>
    );
    
};

