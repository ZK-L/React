import React, { Component } from 'react';
import Store from '../../store/index'
import TodoItem from './TodoItem'
import { nanoid } from 'nanoid'
import { GROUPDEL } from '../../store/actionType'


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Store.getState().list,
        }
    }

    componentDidMount() {
        Store.subscribe(() => this.setState({ items: Store.getState().list }));
    }

    render() {
        const itemList = this.state.items.map(data => {
            return (<TodoItem key={nanoid()} data={data} />)
        });

        const handleDel = () => {
            let action = {
                type: GROUPDEL
            }
            Store.dispatch(action);
        }
        return (
            <div>

                <button onClick={handleDel}>Delete Item</button>
                <ul>
                    <li id='listLegend'>
                        <span></span>
                        <p>Description</p>
                        <p>Category</p>
                        <p>Operate</p>
                    </li>
                    {itemList}
                </ul>
            </div>

        );
    };

}