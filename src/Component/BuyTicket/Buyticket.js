import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Buyticket.scss'

function Buyticket(props) {
    useEffect(()=> {
        props.GetMovieShow()
    },[])

    // useEffect(() => {
    //     window.location.reload(false)
    //   },[])

    const [showDate, setShowDate] = useState(null)

    const GetMovieTheater = (key) => {
        props.GetMovieTheater(key)
    }

    const GetMovie = (movienameeng, movienamevn, movieage, moviekey, moviepicture) => {
        props.SetMovieInfo(movienameeng, movienamevn, movieage)
        props.SetMoviePicture(moviepicture)
        GetMovieTheater(moviekey)
    }

    const GetTheater = (theatername, theaterdate) => {
        props.SetTheaterInfo(theatername)
        setShowDate(theaterdate)

    }

    const GetShow = (showtime, showdate, showday, theaternumber, cinmeid, sessionid) => {
        props.SetShowInfo(showtime, showdate, showday)
        props.SetTheaterNumber(theaternumber)
        props.SetShowCode(cinmeid, sessionid)
        nav('/bannerinfor/ticket_food')
    }

    const nav = useNavigate()    

    return (
        <div className='buyticket'>
            {/* {JSON.stringify(props.bannershowState)} */}
            <div className='option'>
                <a href='/buyticket'>BY MOVIE</a>
                <a href='/buyticketcinema'> BY THEATRE</a>
            </div>
            <div className='contentCover'>
                <div className='movie1'>
                    <h1>Choose Movie</h1>
                    {props.movieshowState.movieShowing.movieShowing?.map((n,i) => {
                        return <div key={i} className='moviecover' onClick={()=>GetMovie(n.name, n.subName, n.age, n.id, n.imageLandscape)}>
                                    <img
                                        style={{
                                            width: "20%",
                                        }}
                                        src={n.imageLandscape}
                                    />
                                    
                                    { n.age > 0 && <span className='icon'>C<span>{n.age}</span></span>}
                                    <p className='eng'>{n.name}</p>
                                    {/* <p className='vn'>{n.subName}</p> */}
                                </div>
                    }) 
                    }
                </div>

                <div className='theater'>
                    <h1>Choose Theatre</h1>
                    {
                        props.movietheaterState.movieTheater ? props.movietheaterState.movieTheater.map((n,i) => {
                            return  <div key={i} className='theatercover' onClick={() =>GetTheater(n.name , n.dates)}>
                                        <p>{n.name}</p>
                                    </div>
                        }) :  <div className='theatercover'>
                                <p>PLEASE CHOOSE MOVIE FIRST</p>
                            </div>
                    }

                </div>

                <div className='time'>
                    <h1>Time</h1>
                    
                    {
                        showDate ? showDate.map((n,i)=> {
                            return <div key={i} className='timecover'>
                                        <p><span>{n.dayOfWeekLabel},</span> {n.showDate}</p>
                                        {
                                            n.bundles.map((v,y) => {
                                                return <div key={y} className='coverbelow'>
                                                            <div className='type'>{v.version} - Phụ đề</div>
                                                            <div className='timeshowcover'>
                                                                {
                                                                    v.sessions.map((u,l) => {
                                                                        return <span key={l} className='timeshow' onClick={()=>GetShow(u.showTime, u.showDate, u.dayOfWeekKey, u.screenName, u.cinemaId, u.sessionId)}>{u.showTime}</span>
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                            })
                                        }   
                                    </div>
                        }) : <div className='timecover'>
                                <p>PLEASE CHOOSE THEATRE TO SEE</p>
                            </div> 
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (globalState) => {
    return {
        movieState:globalState.movieManage,
        moviekeyState:globalState.moviekeyManage,
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
        Movie:()=>{
            Dispatch({
              type:"GET_MOVIE"
            })
          },
          MovieKey:(key1)=>{
            Dispatch({
              type:"GET_MOVIE_KEY",
              payload:key1
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


export default connect(mapStateToProps, mapDispatchToProps)(Buyticket)
