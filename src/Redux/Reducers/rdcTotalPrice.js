const initialState = {
    totalprice: null,
    ticketprice: null,
}

const rdcTotalPrice = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_TOTAL_PRICE":
            return {
                ...state,
                totalprice: payload
            }
        case "SET_TICKET_PRICE":
            return {
                ...state,
                ticketprice: payload
            }

        default:
            return state;
    }
}

export default rdcTotalPrice