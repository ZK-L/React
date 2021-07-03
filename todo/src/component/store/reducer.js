import "./actionTypes";
import { ADD_ITEM, CHANGE_INPUT, DELETE_ITEM, READ_FROM_SERVER } from "./actionTypes";


const defaultState = {
    // inputValue: "aaa",
    // services:[{name:"a",id:"22"},{name:"b",id:"33"}]
}
export default function reducer(state = defaultState, action){
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)); //deep copy
        newState.services = [...newState.services, {name:action.name,id:action.id}];
        return newState;
    }
    if (action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state));
        newState.services = newState.services.filter(service=>(service.id!==action.value));
        console.log(newState.services);
        return newState;
    }

    if (action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state));
        newState.services = newState.services.map(service=>{
            if (service.id === action.id){
                return {...service, name: action.name}
            }
            return service;
        })
        return newState;
    }

    if (action.type === READ_FROM_SERVER){
        let newState = JSON.parse(JSON.stringify(state));
        newState.services = action.data;
        return newState;
    }

    return state;
};