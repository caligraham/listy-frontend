export const getLists = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("https://listy-lister.herokuapp.com/lists")
        .then(resp => resp.json())
        .then(lists => {
             const sortedDates = lists.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
            dispatch({ type: "SET_LISTS", sortedDates })})
    }
}
// a, c, b, d
export const addList = (list, history) => {
    return dispatch => {
        console.log("c")
        fetch("https://listy-lister.herokuapp.com/lists", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ list })
        })
        .then(resp => resp.json())
        .then(list => {
            console.log("d")
            dispatch({ type: "ADD_LIST", list })
            history.push("/lists")
        })
        
    }
}

export const deleteList = ( id, history ) => {
    return dispatch => {

        fetch(`https://listy-lister.herokuapp.com/lists/${id}`, {
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

