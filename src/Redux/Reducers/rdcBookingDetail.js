const initialState = {
    bookingdetail: '',
}

const rdcBookingDetail = (state = initialState, {type, payload}) => {
switch (type) {
    case "GET_BOOKING_DETAIL":
        return {
            bookingdetail: payload
        }

    default:
        return state;
}
}

export default rdcBookingDetail