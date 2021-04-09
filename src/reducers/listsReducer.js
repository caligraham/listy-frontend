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
                    lists: action.lists
                }
            case "ADD_LIST":
                return {
                    ...state,
                    lists: [...state.lists, action.list]
                }
                default:
                return state;

            case "DELETE_LIST":
                return {
                    ...state,
                    lists: state.lists.filter(list => action.list.id !== list.id  )   
                     
            
                }
                
    }
}

export default listsReducer;