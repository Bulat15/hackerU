import { addAutorAction ,deleteAutorAction,getAllAutorsActions} from "../store/reduser";

export const fetchAddAutors = (data) =>{
    return (dispatch)=> {
            fetch('http://localhost:5000/api/author/add', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            .then(data=>data.json())
            .then(data => {dispatch(addAutorAction(data))});
        }
}

export const getAllAddAutors = () =>{ 
    return (dispatch)=> {
         fetch('http://localhost:5000/api/author/all', {
                method: 'GET',
                headers: { "Content-Type": "application/json" },
            })
            .then(resp=>resp.json())
            .then(json => {dispatch(getAllAutorsActions(json))});
        }
}

export const fetchDeleteAuthor = (id) =>{
    return (dispatch) => {
        fetch('http://localhost:5000/api/author/del', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id})
        })
        .then(resp=>resp.json())
        .then(json => {dispatch(deleteAutorAction(json.id))})
    }
}