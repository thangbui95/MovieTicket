const initialState = {
    allpaymentinfo: {
        "ImageLandscape": "string",
        "ImagePortrait": "string",
        "Email": localStorage.getItem('acc'),
    },
}

const rdcPaymentInfo = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_EMAIL_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_BANKID_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_CARDNUMBER_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_CARDNAME_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_EXPIREDATE_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_CVV_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_PRICE_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_SEAT_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_CINEMA_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_FILM_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_THEATER_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_SHOWCODE_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_SHOWTIME_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        case "SET_COMBO_INFO":
            return {
                allpaymentinfo: {
                    ...state.allpaymentinfo,
                    ...payload
                }
            }
        default:
            return state;
    }
}

export default rdcPaymentInfo