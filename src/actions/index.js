export const getLists = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/lists")
        .then(resp => resp.json())
        .then(lists => {
             const sortedDates = lists.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
            dispatch({ type: "SET_LISTS", sortedDates })})
    }
}

export const addList = (list, history) => {
    return dispatch => {
        console.log(list)
        fetch('http://localhost:3001/lists', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ list })
        })
        .then(resp => resp.json())
        .then(list => {
            dispatch({ type: "ADD_LIST", list })
            history.push("/lists")
        })
    }
}

export const deleteList = ( id, history ) => {
    return dispatch => {

        fetch(`http://localhost:3001/lists/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        
        })
        .then(resp => resp.json())
        .then(list => {
            dispatch({ type: "DELETE_LIST", list })
            history.push("/lists")
        })
    }
}

