import { useState } from 'react';


export default function GetToken() {
    const [token, setToken] = useState();

    const saveToken = (userToken)=>{
        setToken(userToken);
    }
    return{
        token, 
        setToken: saveToken}
};
