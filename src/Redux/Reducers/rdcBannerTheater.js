const initialState = {
    theater: '',
    theaternumber: '',
    
}

const rdcBannerTheater = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_BANNER_THEATER":
            return {
                ...state,
                theater: payload
            }

        case "SET_THEATER_NUMBER":
            return {
                ...state,
                theaternumber: payload
            }

        case "SET_SHOW_CODE":
            return {
                ...state,
                ...payload
            }

        default:
            return state;
    }
}

export default rdcBannerTheater