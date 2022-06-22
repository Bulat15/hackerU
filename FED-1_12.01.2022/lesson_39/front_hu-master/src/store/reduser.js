const ADD_AUTORS = 'ADD_AUTORS';
const DELETE_AUTORS = 'DELETE_AUTORS';
const GET_ALL_AUTORS = 'GET_ALL_AUTORS';


export const reducer = (state = [], action) => {
    console.log(action);
    if (action.type === ADD_AUTORS) {
        return [...state, action.payload];
    } else if (action.type === DELETE_AUTORS) {
        return state.filter(t => t.id !== action.payload)
    } else if(action.type === GET_ALL_AUTORS){
        return action.payload;
    }else {
        return state;
    }
}

export const addAutorAction = (author) => ({ type: ADD_AUTORS, payload: author });
export const deleteAutorAction = (id) => ({ type: DELETE_AUTORS, payload: id });
export const getAllAutorsActions = (autors) => ({type: GET_ALL_AUTORS,payload: autors })