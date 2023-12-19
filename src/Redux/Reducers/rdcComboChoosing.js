const initialState = {
    combo: {},
}

const rdcComboChoosing = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_COMBO1_CHOOSING":
            return {
                combo: {
                    ...state.combo,
                    ...payload
                }
            }

        case "SET_COMBO2_CHOOSING":
            return {
                combo: {
                    ...state.combo,
                    ...payload
                }
            }
        case "SET_COMBO3_CHOOSING":
            return {
                combo: {
                    ...state.combo,
                    ...payload
                }
            }
        case "SET_COMBO4_CHOOSING":
            return {
                combo: {
                    ...state.combo,
                    ...payload
                }
            }
        default:
            return state;
    }
}

export default rdcComboChoosing