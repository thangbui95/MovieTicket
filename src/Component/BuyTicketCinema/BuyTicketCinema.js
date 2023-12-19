import React, { useEffect } from 'react'
import './BuyTicketCinema.scss'
import { connect } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function BuyTicketCinema(props) {
    useEffect(() => {
        props.Cinema()
    }, [])
    const [showDate, setShowDate] = useState(null)

    const GetMovieKey = (key) => {
        props.MovieKey(key)
    }
    const GetTheater = (theatername, theaterkey) => {
        props.SetTheaterInfo(theatername)
        GetMovieKey(theaterkey)
    }

    const GetMovie = (movienameeng, movienamevn, movieage, moviepicture, moviedate) => {
        props.SetMovieInfo(movienameeng, movienamevn, movieage)
        props.SetMoviePicture(moviepicture)
        setShowDate(moviedate)
    }


    const GetShow = (showtime, showdate, showday, theaternumber, cinmeid, sessionid) => {
        props.SetShowInfo(showtime, showdate, showday)
        props.SetTheaterNumber(theaternumber)
        props.SetShowCode(cinmeid, sessionid)
        nav('/bannerinfor/ticket_food')

    }
    const nav = useNavigate()


    return (
        <div>
            <div className='buyticket'>
                <div className='option'>
                    <a href='/buyticket'>BY MOVIE</a>
                    <a href='/buytiketcinema'>BY THEATRE</a>

                </div>

                <div className='contentCover'>
                    <div className='theater'>
                        <h1>Choose THEATRE</h1>
                        {
                            // JSON.stringify(props.movieState.cinema)
                            props.movieState.cinema.map((n, i) => {
                                return <div key={i} className='theatercover' onClick={() => GetTheater(n.name, n.code)} >
                                    <p>{n.name}</p>
                                    {/* <p>{n.code}</p> */}
                                </div>
                            })
                        }

                    </div>

                    <div className='movie1'>
                        <h1>Choose Movie</h1>
                        {

                            // JSON.stringify(props.moviekeyState.cinemakey)
                            props.moviekeyState.cinemakey ? props.moviekeyState.cinemakey.map((n, i) => {
                                return <div key={i} className='moviecover' onClick={() => GetMovie(n.name, n.subName, n.age, n.imageLandscape, n.dates)}  >
                                    <img style={{
                                        width: "20%"
                                    }}
                                        src={n.imageLandscape} alt="hinh anh" />
                                    <span className='icon'>C<span>{n.age}</span></span>
                                    <p className='eng'>{n.subName}</p>
                                    {/* <p className='vn'>{n.name}</p> */}
                                </div>
                            }) : <div className='moviecover'>
                                <p>PLEASE CHOOSE THEATRE FIRST</p>
                            </div>
                        }
                    </div>

                    <div className='time' >
                        <h1>Time</h1>
                        {
                            showDate ? showDate.map((n, i) => {
                                return <div key={i} className='timecover'>
                                    <p><span>{n.dayOfWeekLabel},</span> {n.showDate}</p>
                                    {
                                        n.bundles.map((v, y) => {
                                            return <div key={y} className='coverbelow'>
                                                <div className='type'>{v.version} - Phụ đề</div>
                                                <div className='timeshowcover'>
                                                    {
                                                        v.sessions.map((u, l) => {
                                                            return <span key={l} className='timeshow' onClick={() => GetShow(u.showTime, u.showDate, u.dayOfWeekKey, u.screenName, u.cinemaId, u.sessionId)}>{u.showTime}</span>
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            }) : <div className='timecover'>
                                <p>PLEASE CHOOSE MOVIE TO SEE THIS STEP</p>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (globalState) => {
    return {
        movieState: globalState.movieManage,
        moviekeyState: globalState.moviekeyManage,
        movieshowState: globalState.movieshowManage,
        movietheaterState: globalState.movietheaterManage,
        bannermovieState: globalState.bannermovieManage,
        bannertheaterState: globalState.bannertheaterManage,
        bannershowState: globalState.bannershowManage,
        moviepictureState: globalState.moviepictureManage,

    }
}
const mapDispatchToProps = (Dispatch) => {
    return {
        Cinema: () => {
            Dispatch({
                type: "GET_CINEMA"
            })
        },
        MovieKey: (key1) => {
            Dispatch({
                type: "GET_CINEMA_KEY",
                payload: key1
            })
        },
        GetMovieShow: () => {
            Dispatch({
                type: "GET_MOVIE_SHOW",
            })
        },
        GetMovieTheater: (key) => {
            Dispatch({
                type: "GET_MOVIE_THEATER",
                payload: key
            })
        },
        SetMovieInfo: (eng, vn, age) => {
            Dispatch({
                type: "SET_BANNER_MOVIE",
                payload: {
                    engname: eng,
                    vnname: vn,
                    ageinfo: age,
                }
            })
        },
        SetTheaterInfo: (theater) => {
            Dispatch({
                type: "SET_BANNER_THEATER",
                payload: theater
            })
        },
        SetShowInfo: (time, date, day) => {
            Dispatch({
                type: "SET_BANNER_SHOW",
                payload: {
                    timeinfo: time,
                    dateinfo: date,
                    dayinfo: day,
                }
            })
        },
        SetMoviePicture: (moviepicture) => {
            Dispatch({
                type: "SET_MOVIE_PICTURE",
                payload: moviepicture
            })
        },
        SetTheaterNumber: (theaternumber) => {
            Dispatch({
                type: "SET_THEATER_NUMBER",
                payload: theaternumber
            })
        },
        SetShowCode: (cinemaid, sessionid) => {
            Dispatch({
                type: "SET_SHOW_CODE",
                payload: {
                    "cinemaId": cinemaid,
                    "sessionId": sessionid
                }
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyTicketCinema)