const initialState = {
    movieTheater: null,
}

const rdcTheater = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_MOVIE_THEATER":
            return {
                movieTheater: payload
            }
        default:
            return state;
    }
}

export default rdcTheater