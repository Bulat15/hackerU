const defaultState = {
    value: []
};

const ADD = 'ADD';
const REMOVE = 'REMOVE';
const SORT = 'SORT';

export const reducer = (state = defaultState, action) => {
    if (action.type === ADD) {
        const product = {
            id: Date.now(),
            title: action.payload
        };
        return { value: [...state.value, product] }
    } else if (action.type === REMOVE) {
        return { value: state.value.filter(elem => elem.id !== action.payload) }
    } else if (action.type === SORT) {
        const sort_elem = state.value.sort((a, b) => a.title.localeCompare(b.title));
        return { value: [...sort_elem] }
    }
    return state;
}



// export const increment = (payload) => ({type: INCREMENT,payload});

export const add = (payload) => ({ type: ADD, payload });
export const remove = (payload) => ({ type: REMOVE, payload });
export const sort = () => ({ type: SORT })