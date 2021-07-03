import React, { useState } from 'react';
import Store from '../../store/index'
import { DEL_ITEM, CHECK } from '../../store/actionType'
import { Link } from 'react-router-dom'

export default function TodoItem({ data }) {
    const [checked, setchecked] = useState(data.check)

    function handleCheck(e) {
        setchecked(e.target.checked)
        const action = {
            type: CHECK,
            check: e.target.checked,
            id: data.id
        }
        Store.dispatch(action);
    }

    function handleDelete() {
        const action = {
            type: DEL_ITEM,
            id: data.id
        }
        Store.dispatch(action);
    }

    return (
        <li key={data.id}>
            <span>
                <input type='checkbox' checked={checked} onChange={handleCheck} />
            </span>
            <p><Link className='link' to={`/${data.id}`}>{data.description}</Link></p>
            <p>{data.category}</p>
            <div>
                <button className='delBtn' onClick={handleDelete}> delete</button>
            </div>
        </li>
    );


};
