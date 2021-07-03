import React, { Component } from 'react';
import InputBar from './component/InputBar';
import ServiceItem from './component/ServiceItem';
import Store from "./component/store";
import axios from "axios";

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {services:[]}
    }

    componentDidMount(){
        Store.subscribe(()=> this.setState({services: Store.getState().services}));

        axios.get("https://bd48e15c-cbff-4220-a5f8-bd91e5b5277e.mock.pstmn.io/myMock").then((res)=>{
            console.log(res.data.service);
            const action = {
                type: "readFromServer",
                data: res.data.service
            }
            Store.dispatch(action);
        });
    }

    render(){

        // componentWillUnmount(){
            //     console.log("willmount");
    // }
    
    // componentDidUpdate(){
        //     console.log("didUpdate");
        // }
    const servList = this.state.services.map(service=>
        (<ServiceItem
            name= {service.name}
            id = {service.id}
            key = {service.id}
            />));
            
            return(
                <div>
            <div>
                <h1>services list</h1>
            </div>
            <div>
                <InputBar 
                />
            </div>
            <div>
                <ul>
                    {servList}
                </ul>
            </div>
        </div>
    );
}
}
