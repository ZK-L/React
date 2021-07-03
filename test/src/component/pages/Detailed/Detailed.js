import React from 'react';
import Store from '../../store/index';
import { Link } from 'react-router-dom';
import './Detailed.css'

export default function Detailed(props) {
    const id = props.match.params.id;
    const item = Store.getState().list.filter(item => (item.id === id))[0]
    return (
        <div>

            <div className='detailed'>
                <h1>Description:</h1>
                <p>
                    {item.description}
                    </p>
                <h1>Category:</h1>
                <p>
                {item.category}
                </p>
                <h1>Content:</h1>
                <p>
                {item.content}
                </p>
            </div>
            <button className='detailed-btn'><Link to='/'>go back</Link></button>
        </div>
    );
}

