import React, { useState } from 'react';
import Store from '../../store/index'
import {ADD_ITEM} from '../../store/actionType'
import {nanoid} from 'nanoid'

export default function InputForm() {
    const [description, setDescription] = useState('');
    const [category, setcategory] = useState('css');
    const [content, setcontent] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setDescription('');
        setcategory('css');
        setcontent('');

        const action = {
            type: ADD_ITEM,
            newItem: {
                description: description,
                category: category,
                content: content,
                check: false,
                id: nanoid()
            }
        }
        Store.dispatch(action);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>

                <label>
                    <p>Description</p>
                    <input type="text" required={true} value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    <p>Category</p>
                    <select value={category} onChange={(e)=>setcategory(e.target.value)}>
                        <option defaultValue={true} value="css">css</option>
                        <option value="js">js</option>
                        <option value="html">html</option>
                    </select>
                </label>
                <label>
                    <p>Content</p>
                    <textarea name="content" id="" cols="30" rows="10"
                        value={content} onChange={(e) => setcontent(e.target.value)}></textarea>
                </label>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    );

};
