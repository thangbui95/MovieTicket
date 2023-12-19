const initialState = {
    movieShowing : {}
}

const rdcMovie = (state = initialState, {type, payload}) => {
    switch (type) {
        case "SET_MOVIE_SHOW":
            return {
                movieShowing: payload
            }
    
        default:
            return state;
    }
}

export default rdcMovie