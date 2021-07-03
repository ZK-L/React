import React, {useState} from 'react';
import store from './store';
import {ADD_ITEM} from "./store/actionTypes";
import {nanoid} from "nanoid";

export default function InputBar(props) {
    const [service, setService] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const action = {
            type:ADD_ITEM,
            name: service,
            id: nanoid()
        }
        store.dispatch(action);
        setService("");
    }

    function inputValue(e){
        setService(e.target.value);
    }

    return(
       <form onSubmit={handleSubmit}>
        <input type="text" value={service} onChange={inputValue}/>
        <button type="submit">Add</button>
       </form>
       
    );
};
