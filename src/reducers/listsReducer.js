const initialState = {
    lists: [],
    loading: true
}

const listsReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
            case "SET_LISTS":
                return {
                    ...state,
                    loading: false,
                    lists: action.sortedDates
                }
            case "ADD_LIST":
                return {
                    ...state,
                    lists: [...state.lists, action.list].sort((a, b) => new Date(a.due_date) - new Date(b.due_date))
                }
            case "DELETE_LIST":
                return {
                    ...state,
                    lists: state.lists.filter(list => action.list.id !== list.id)   
                }
                default:
                return state;
    }
}

export default listsReducer;