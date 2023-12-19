import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import './BannerInfor.scss'


function BannerInfor(props) {
  useEffect(()=> {
    fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/booking/detail')
    .then(res=>res.json())
    .then(dt=>{
        props.GetBookingDetail(dt)
    })
  },[])

  const [isClick, SetisClick] = useState(0)
  
  const nav = useNavigate()
  const param = useParams()
  const clicktoticket = () => {
      SetisClick(0)
      props.SetResetSeat()
      nav('/bannerinfor/ticket_food')
  }
  const clicktoseat = () => {
      if (props.totalpriceState.ticketprice === 0) {
          alert('Vui long chon so luong ve')
      } else {
          SetisClick(1)
          props.SetBookingShowcode(props.bannertheaterState.cinemaId, props.bannertheaterState.sessionId)
          nav('/bannerinfor/seat')
      }
  }
  const clicktopayment = () => {
      if (props.seatchoosingState.seat) {
          if(props.seatchoosingState.seat.length < props.seatchoosingState.seatqty && props.seatchoosingState.doubleseat.length < props.seatchoosingState.doubleseatqty) {
            alert('Vui long chọn đủ số lượng vé đơn và đôi')
          } else if(props.seatchoosingState.seat.length < props.seatchoosingState.seatqty) {
              alert('Vui long chọn đủ số lượng vé đơn')
          } else if(props.seatchoosingState.doubleseat.length < props.seatchoosingState.doubleseatqty) {
              alert('Vui long chọn đủ số lượng vé đôi')
          } else {
              SetisClick(2)
              props.SetBookingPrice(props.totalpriceState.totalprice)
              // props.SetBookingSeat([...props.seatchoosingState.seat, ...props.seatchoosingState.doubleseat].map(n=>n.length>0?n:null).filter(n=>n).toString())
              props.SetBookingSeat([...props.seatchoosingState.seat, ...props.seatchoosingState.doubleseat].filter(n=>n).toString())
              props.SetBookingCinema(props.bannertheaterState.theater)
              props.SetBookingFilm(props.bannermovieState.allinfo.engname)
              props.SetBookingTheater(props.bannertheaterState.theaternumber)
              props.SetBookingShowtime(props.bannershowState.show.dateinfo, props.bannershowState.show.timeinfo)
              props.SetBookingCombo(Object.values(props.combochoosingState.combo).toString())
              nav('/bannerinfor/payment')
          }
          
      } else {
          alert('Bạn chưa chọn ghế nào')
      }
  }

  return (
    <div className='bannerinfor'>
      <div className='outlet'>
          <Outlet></Outlet>
      </div>
      <div className='right'>        
              <div className='upcontent'>
                  <div className='img'>
                      <img
                          src={props.moviepictureState.moviepicture}
                      />                   
                  </div>
                  <p className='eng'>{props.bannermovieState.allinfo.engname}</p>
                  <p className='vn'>{props.bannermovieState.allinfo.vnname}</p>
                  <p className='detailtype'><span className='type'>{props.bannermovieState.allinfo.ageinfo}</span> (*) Phim chỉ dành cho khán giả từ {props.bannermovieState.allinfo.ageinfo} tuổi trở lên</p>
              </div>
              <div className='downcontent'>
                  <p><span className='title'>Theatre: </span>{props.bannertheaterState.theater} | {props.bannertheaterState.theaternumber}</p> <hr/>
                  <p><span className='title'>Show time: </span> {props.bannershowState.show.timeinfo} | {props.bannershowState.show.dayinfo}, {props.bannershowState.show.dateinfo}</p> <hr/>
                  <p><span className='title'>Combo: </span>{Object.values(props.combochoosingState.combo).filter(n=>n).toString()}</p> <hr/>
                  <p><span className='title'>Seat: </span>{[...props.seatchoosingState.seat, ...props.seatchoosingState.doubleseat].map(n=>n.length>0?n:null).filter(n=>n).toString()}</p> <hr/> 
                  <p className='descriptionfinal'><span className='titlefinal'>Sum: </span>{props.totalpriceState.totalprice} VND</p>
              </div>
              {
                  isClick == 0 ? 
                    <div className='button'>
                        <button onClick={clicktoseat}>NEXT</button>
                    </div> 
                    :
                    isClick == 1 ? 
                      <div className='button2'>
                          <button onClick={clicktoticket}>BACK</button>
                          <button onClick={clicktopayment}>NEXT</button>
                      </div>
                      :
                      <div className='button'>
                        <button onClick={clicktoticket}>BACK</button>
                      </div>
              }
              
              
      </div>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
      movieshowState: globalState.movieshowManage,
      movietheaterState: globalState.movietheaterManage,
      bannermovieState: globalState.bannermovieManage,
      bannertheaterState: globalState.bannertheaterManage,
      bannershowState: globalState.bannershowManage,
      moviepictureState: globalState.moviepictureManage,
      bookingdetailState: globalState.bookingdetailManage,
      totalpriceState: globalState.totalpriceManage,
      seatchoosingState: globalState.seatchoosingManage,
      combochoosingState: globalState.combochoosingManage,
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
      GetBookingDetail: (detail) => {
          Dispatch({
              type: "GET_BOOKING_DETAIL",
              payload: detail
          })
      },
      SetBookingPrice: (price) => {
        Dispatch({
          type: "SET_PRICE_INFO",
          payload: {
            "Price": price,
          }
        })
      },
      SetBookingSeat: (seat) => {
        Dispatch({
          type: "SET_SEAT_INFO",
          payload: {
            "SeatCode": seat,
          }
        })
      },
      SetBookingCinema: (cinema) => {
        Dispatch({
          type: "SET_CINEMA_INFO",
          payload: {
            "CinemaName": cinema,
          }
        })
      },
      SetBookingFilm: (film) => {
        Dispatch({
          type: "SET_FILM_INFO",
          payload: {
            "FilmName": film,
          }
        })
      },
      SetBookingTheater: (theater) => {
        Dispatch({
          type: "SET_THEATER_INFO",
          payload: {
            "TheaterName": theater,
          }
        })
      },
      SetBookingShowcode: (cinemaid, sessionid) => {
        Dispatch({
          type: "SET_SHOWCODE_INFO",
          payload: {
            "ShowCode": `${cinemaid}-${sessionid}`,
          }
        })
      },
      SetBookingShowtime: (date, time) => {
        Dispatch({
          type: "SET_SHOWTIME_INFO",
          payload: {
            "ShowTime": `${date.slice(6,10)}-${date.slice(3,5)}-${date.slice(0,2)}T${time}Z`,
          }
        })
      },
      SetBookingCombo: (combo) => {
        Dispatch({
          type: "SET_COMBO_INFO",
          payload: {
            "Combo": combo,
          }
        })
      },
      SetResetSeat: () => {
        Dispatch({
          type: "SET_RESET_SEAT",
        })
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BannerInfor)



