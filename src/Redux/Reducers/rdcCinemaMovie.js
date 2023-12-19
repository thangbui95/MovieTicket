const initialState={
    cinema:[]
}
const rdcCinemaMovie=(state=initialState ,{type,payload})=>{
    switch (type) {
        case 'SET_CINEMA':
            return {
                cinema:payload
            }    
        default:
            return state
    }
}
export default rdcCinemaMovie;