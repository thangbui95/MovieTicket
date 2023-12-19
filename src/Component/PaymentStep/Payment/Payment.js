import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Payment.scss'
import { connect } from 'react-redux'
import moment from 'moment'

function Payment(props) {
  const nav = useNavigate()

  const Payment1 = (e) => {
    alert('Successful')
    nav('/')
    window.location.reload(false)
  }
  return (
    <div className='payment'>
      {/* {JSON.stringify(props.paymentinfoState.allpaymentinfo)} */}
      <div className='left'>
        <div className='text_time'>
          <h3>Please proceed payment</h3>
          {/* <h3>09:00</h3> */}
        </div>
        <div className='insidecover'>
          <div className='row'>
            <p>Bank ID:</p>
            <input value={`1`}  className='information' />
          </div>
          <div className='row'>
            <p>Card Number:</p>
            <input value={`00001234`} className='information' />
          </div>
          <div className='row'>
            <p>Card Name:</p>
            <input value={`test1`} className='information' />
          </div>
          <div className='row'>
            <p>ExpireDate:</p>
            <input value={`0124`} className='information' />
          </div>
          <div className='row'>
            <p>CVV:</p>
            <input value={`888`} className='information' />
          </div>
          <div className='row'>
            <p></p>
            <p className='information2'>
              <button onClick={Payment1}>PAYMENT</button>
            </p>
          </div>
        </div>
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
    paymentinfoState: globalState.paymentinfoManage,
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    SetBookingEmail: (email) => {
      Dispatch({
        type: "SET_EMAIL_INFO",
        payload: {
          "Email": email,
        }
      })
    },
    SetBookingBankid: (bankid) => {
      Dispatch({
        type: "SET_BANKID_INFO",
        payload: {
          "BankId": bankid,
        }
      })
    },
    SetBookingCardnumber: (cardnumber) => {
      Dispatch({
        type: "SET_CARDNUMBER_INFO",
        payload: {
          "CardNumber": cardnumber,
        }
      })
    },

    SetBookingCardname: (cardname) => {
      Dispatch({
        type: "SET_CARDNAME_INFO",
        payload: {
          "CardName": cardname,
        }
      })
    },

    SetBookingExpiredate: (expiredate) => {
      Dispatch({
        type: "SET_EXPIREDATE_INFO",
        payload: {
          "ExpireDate": expiredate,
        }
      })
    },

    SetBookingCvv: (cvv) => {
      Dispatch({
        type: "SET_CVV_INFO",
        payload: {
          "CVV": cvv,
        }
      })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment)