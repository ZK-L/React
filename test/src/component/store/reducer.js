import { ADD_ITEM, DEL_ITEM, CHECK, GROUPDEL } from './actionType'

const defaultState = {
    list: [{ id: '1', description: 'aaa', category: 'bbbb', content: 'this is content', check: false }]

}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                list: [...state.list, action.newItem]
            };
        case DEL_ITEM:
            return {
                ...state,
                list: state.list.filter(item => (item.id !== action.id))
            };
        case CHECK:
            let newList = state.list.map(item => {
                if (item.id === action.id) {
                    return { ...item, check: action.check }
                }
                else {
                    return (item);
                }
            });
            console.log("reducer dele", newList, action.id, action.check);
            return { ...state, list: newList }
        case GROUPDEL:
            return {
                ...state,
                list: state.list.filter(item => (!item.check))
            }
        default:
            break;
    }
    return state;
};
