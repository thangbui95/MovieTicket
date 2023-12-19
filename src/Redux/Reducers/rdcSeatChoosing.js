const initialState = {
    seat: [],
    doubleseat: [],
    // finalseatchoosing: [],
    rowindex: [],
    seatsold: [],
    lsseatsoldraw: [],
    seatqty: 0,
    doubleseatqty: 0,
}

const rdcSeatChoosing = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_LS_SEAT_SOLD_RAW":
            return {
                ...state,
                lsseatsoldraw: [...state.lsseatsoldraw, payload]
            }
        case "SET_SEAT_SOLD":
            return {
                ...state,
                seatsold: [...state.seatsold, payload]
            }
        case "SET_SEAT_CHOOSING":
            return {
                ...state,
                seat: [...state.seat, payload]
            }
        case "SET_REMOVE_SEAT":
            return {
                ...state,
                seat: state.seat.splice(0, 1),
                seat: [...state.seat, payload]
            }
        case "SET_ROW_INDEX":
            return {
                ...state,
                rowindex: [...state.rowindex, payload]
            }
        case "SET_REMOVE_ROW":
            return {
                ...state,
                rowindex: state.rowindex.splice(0, 1),
                rowindex: [...state.rowindex, payload]
            }
        case "SET_SEAT_QTY":
            return {
                ...state,
                seatqty: payload
            }
        case "SET_DOUBLESEAT_QTY":
            return {
                ...state,
                doubleseatqty: payload
            }
        case "SET_DOUBLE_SEAT_STORE":
            return {
                ...state,
                doubleseat: [...state.doubleseat, payload]
            }
        case "SET_REMOVE_DOUBLE_SEAT":
            return {
                ...state,
                doubleseat: state.doubleseat.splice(0, 1),
                doubleseat: [...state.doubleseat, payload]
            }
        case "SET_RESET_SEAT":
            return {
                ...state,
                doubleseat: [],
                seat: []
            }
        default:
            return state;
    }
}

export default rdcSeatChoosing