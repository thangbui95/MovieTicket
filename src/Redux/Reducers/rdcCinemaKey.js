const initialState={
    cinemakey:[]
}
const rdcCinemaKey=(state=initialState ,{type,payload})=>{
    switch (type) {
        case 'SET_CINEMA_KEY':
            return {
                cinemakey:payload
            }   
        default:
            return state
    }
}
export default rdcCinemaKey;