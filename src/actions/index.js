export const getLists = () => {
    return dispatch => {
        dispatch({ type: "LOADING"})
        fetch("http://localhost:3001/lists")
        .then(resp => resp.json())
        .then(lists => dispatch({ type: "SET_LISTS", lists }))
    }
}

export const addList = (list, history) => {
    return dispatch => {
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