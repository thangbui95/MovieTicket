import { takeEvery, takeLatest, delay, put, call } from 'redux-saga/effects'

async function  GetMovieShowAPI() {
    let res = await fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/nowAndSoon')
    let dt = await res.json()
    return dt
}

async function  GetMovieTheaterAPI(key) {
    let res2 = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/movie/${key}`)
    let dt2 = await res2.json()
    return dt2
}

async function CallAPI(){
    let res3 = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/cinemas`)
    let dt3 = await res3.json()
    return dt3 
}

async function GetCinemaKey(key1){
    let res4 = await fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/cinemas/${key1}`)
    let dt4 = await res4.json()
    return dt4 
}


function* saga2({type, payload}) {
    let data4 = yield call(GetCinemaKey,payload)
    // console.log(data2);
    yield put({
        type:"SET_CINEMA_KEY",
        payload:data4
    })   
    // console.log(data2);
}
function* saga({type, payload}) {
    let data3 = yield call(CallAPI,payload)
    yield put({
        type:"SET_CINEMA",
        payload:data3
    })   
}
function* GetMovieShow() {
    let data = yield call(GetMovieShowAPI)

    yield put({
        type:"SET_MOVIE_SHOW",
        payload: data
    })
}

function* GetMovieTheater({type, payload}) {
    let data2 = yield call(GetMovieTheaterAPI, payload)
    console.log(data2)
    yield put({
        type:"SET_MOVIE_THEATER",
        payload: data2
    })
}

function* MiddleReSa() {
    yield takeLatest("GET_CINEMA",saga)
    yield takeLatest("GET_CINEMA_KEY",saga2 )
    yield takeLatest("GET_MOVIE_SHOW", GetMovieShow)
    yield takeLatest("GET_MOVIE_THEATER", GetMovieTheater)
}

export default MiddleReSa