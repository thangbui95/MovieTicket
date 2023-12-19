const initialState = {
    moviepicture: '',
}

const rdcMoviePicture = (state = initialState, {type, payload}) => {
switch (type) {
    case "SET_MOVIE_PICTURE":
        return {
            moviepicture: payload
        }

    default:
        return state;
}
}

export default rdcMoviePicture