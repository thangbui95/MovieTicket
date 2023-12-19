import React from 'react'
import './Header.scss'
import {MdSearch} from 'react-icons/md'
import {RiAccountCircleFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const nav = useNavigate()
  const Logout=()=>{
    localStorage.removeItem('acc')
    nav('/')
  }
  return (
    <div className='header'>
        <div className='headercontain'>
            <div className='headerlogo'>
                <img className='logo' onClick={() => nav('/')} 
                src='https://www.galaxycine.vn/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgalaxy-logo-mobile.074abeac.png&w=256&q=75' 
                alt="hinh anh"/> 
            </div>
            <div className='headercontent'> 
                  <div className='search'>
                    <input placeholder='Search your film'/>
                    <MdSearch className='icon-search'/>
                  </div>
                  <div className='nav-account'>
                        <div className='login'>
                            <RiAccountCircleFill className='logo_acc'/>
                            Welcome to our movie booking service
                            {/* {
                              localStorage.getItem('acc')== null ? <a href='/login'>Dang Nhap/ Dang Ky</a> : <p>{localStorage.getItem('acc')}</p> 
                            }
                            {
                              localStorage.getItem('acc')== null ? "" :  <div className='dropdown' >  <a  href='/personinfo'>Thong Tin</a>   <button onClick={Logout}>Dang Xuat</button> </div>
                            } */}
    
                        </div>
                        {/* <div className='language'> 
                            <span>VN</span> | <span>EN</span>
                        </div> */}
                  </div>
            </div>
        </div>
      
      
        
    </div>
  )
}
