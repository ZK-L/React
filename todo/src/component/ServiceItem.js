import React, { useState } from 'react';
import Store from './store'
import {DELETE_ITEM,CHANGE_INPUT} from "./store/actionTypes"

export default function ServiceItem(props) {
    
    const [viewMode, setview] = useState("view");
    const [newName, setNewName] = useState("");
    const edit = (
        <form>
            <div>
                <label htmlFor="changeInput">Input new name for {props.name}</label>
            </div>
            <div>
                <input type="text" id="changeInput" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
            </div>
            <div>
                <button type="button" onClick={()=>{
                    setview("view");
                    setNewName("");}}>CANCEL</button>
                <button type="submit" onClick={submitChange}>CONFIRM</button>
            </div>
        </form>
    );
    
    const view = (
        <div>
            <div className="itemLine1">
                <input type="checkbox" name={props.name} id={props.id}/>
                <label htmlFor={props.name}>{props.name}</label>
            </div>
            <div className="itemLine2">
                <button onClick={()=>setview("edit")}>Edit</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
    
    function deleteItem(){
        const action = {
            type: DELETE_ITEM,
            value: props.id
        }
        Store.dispatch(action);
    }

    function submitChange(e){
        e.preventDefault();
        const action = {
            type: CHANGE_INPUT,
            name: newName,
            id: props.id
        }
        setview("view");
        Store.dispatch(action);
    }

    return(
        <li id={props.id}>
            {(viewMode==="view")? view: edit}
        </li>
    );
};
