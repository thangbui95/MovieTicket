const initialState = {
    show: {
        timeinfo: '',
        dateinfo:'',
        dayinfo:'',
    }
}

const rdcBannerShow = (state = initialState, {type, payload}) => {
switch (type) {
    case "SET_BANNER_SHOW":

        return {
            show: payload
        }

    default:
        return state;
}
}

export default rdcBannerShow