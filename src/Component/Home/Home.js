import React from 'react'
import './Home.scss'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Buyticket from '../BuyTicket/Buyticket'
import Movie from '../Movie/Movie'
import Theater from '../Theater/Theater'
import BannerInfor from '../PaymentStep/BannerInfor/BannerInfor'
import TicketFood from '../PaymentStep/TicketFood/TicketFood'
import Seat from '../PaymentStep/Seat/Seat'
import Payment from '../PaymentStep/Payment/Payment'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'
import { RiArrowDownSLine } from 'react-icons/ri'
import Login from '../LoginForm/Login'
import Personinfo from '../Personinfo/Personinfo'
import Loginn from '../LoginForm/Login/Loginn'
import Registerr from '../LoginForm/Login/Registerr'
import { MdPrivacyTip } from 'react-icons/md'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import BuyTicketCinema from '../BuyTicketCinema/BuyTicketCinema'
// import GiaoDich from '../GiaoDich'

export default function 
Home() {
  const nav = useNavigate
  return (
    <div className='home'>
      <BrowserRouter>
        <div className='headercover'>
          <div className='headercover2'>
            <div className='headercover3'>
              <Header/>
            </div>
          </div>
          <div className='option'>
            <a href='/buyticket' style={{fontSize: "15px"}} onClick={() => nav('/buyticket')}>Click here for ticket</a>
            {/* <a onClick={() => nav('/movie')}>Phim <RiArrowDownSLine /></a>|
            <a>Goc dien anh <RiArrowDownSLine /></a>|
            <a>SU kien <RiArrowDownSLine /></a>|
            <a onClick={() => nav('/theater')}>Rap/Gia ve</a>|
            <a>Ho tro</a>|
            <a>Thanh vien</a> */}
          </div>
          {/* <Link to={'/buyticket'}>BuyTicket</Link>-----
          <Link to={'/movie'}>Movie</Link>-----
          <Link to={'/theater'}>Theater</Link>-----
          <Link to={'/bannerinfor'}>BannerInfor</Link>-----
          <Link to={'/bannerinfor/ticket_food'}>Ticket_food</Link>-----
          <Link to={'/bannerinfor/seat'}>Seat</Link>-----
          <Link to={'/bannerinfor/payment'}>Payment----</Link>
          <Link to={'/personinfo'}>Infor</Link> */}
        </div>

        <Routes>
          <Route path='' element={<Banner />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/buyticket' element={
            // <PrivateRoute>
                <Buyticket/>
            // </PrivateRoute>
          } />
          {/* <Route path='/personinfo' element={
            <PrivateRoute>
                <Personinfo/>
            </PrivateRoute>
          } /> */}
          <Route path='/buyticketcinema' element={<BuyTicketCinema/>}/>
          <Route path='/movie' element={<Movie />} />
          <Route path='/theater' element={<Theater />} />
          <Route path='/loginn' element={<Loginn />} />
          <Route path='/register' element={<Registerr />} />

          <Route path='bannerinfor' element={<BannerInfor />}>
            <Route path='ticket_food' element={<TicketFood />} />
            <Route path='seat' element={<Seat />} />
            <Route path='payment' element={<Payment />} />
          </Route>
        </Routes>

        <div className='footercover'>
          <div className='footercover2'>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
