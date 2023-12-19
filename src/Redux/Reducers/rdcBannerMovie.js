const initialState = {
    allinfo: {
        engname: '',
        vnname: '',
        ageinfo: ''
    }
}

const rdcBannerMovie = (state = initialState, {type, payload}) => {
switch (type) {
    case "SET_BANNER_MOVIE":
        return {
            allinfo: payload
        }

    default:
        return state;
}
}

export default rdcBannerMovie