import React from 'react'
import './Footer.scss'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillApple } from 'react-icons/ai'
import { BsFacebook, BsGooglePlay, BsYoutube } from 'react-icons/bs'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


export default function Footer() {
    const nav = useNavigate()
    return (
        <div className='footer'>
            <div className='upcontent'>
                <div className='column'>
                    <div className='upcolumn'>
                        <span>|</span>
                        Introduction
                    </div>
                    <p> <AiOutlineDoubleRight className='icon' /> About us</p>
                    <p> <AiOutlineDoubleRight className='icon' /> Usage rule</p>
                    <p> <AiOutlineDoubleRight className='icon' /> Operation rule</p>
                    <p> <AiOutlineDoubleRight className='icon' /> Private</p>
                </div>
                <div className='column'>
                    <div className='upcolumn'>
                        <span>|</span>
                        Movie
                    </div>
                    <p> <AiOutlineDoubleRight className='icon' /> Kind of film</p>
                    <p> <AiOutlineDoubleRight className='icon' /> Film comment</p>
                    <p> <AiOutlineDoubleRight className='icon' /> blog</p>
                    {/* <p> <AiOutlineDoubleRight className='icon'/> phim hay thang</p> */}
                </div>
                <div className='column'>
                    <div className='upcolumn'>
                        <span>|</span>
                        Help
                    </div>
                    <p> <AiOutlineDoubleRight className='icon' /> comment</p>
                    <p> <AiOutlineDoubleRight className='icon' /> sale & services</p>
                    {/* <p> <AiOutlineDoubleRight className='icon'/> rap / gia ve</p> */}
                    {/* <p> <AiOutlineDoubleRight className='icon'/> tuyen dung</p> */}
                </div>
                <div className='lastcolumn'>
                    <div className='upcolumn'>
                        <span>|</span>
                        Connect
                    </div>
                    <div className='app_icon' onClick={() => nav('/')}>
                        <AiFillFacebook />
                        <AiFillYoutube />
                        <AiFillInstagram />
                    </div>
                    <div className='upcolumn' >
                        <span>|</span>
                        Download App
                    </div>
                    <div className='app_icon' onClick={() => nav('/')}>
                        <AiFillApple />
                        <BsGooglePlay />
                    </div>
                    {/* <div className='img'>
                    <img 
                        src='https://www.galaxycine.vn/website/images/glx_trade.png'
                        style={{width: '80%'}}
                    />
                </div> */}
                </div>
            </div>
            <hr />
            <div className='downcontent'>
                <img
                    src='https://www.galaxycine.vn/_next/static/media/galaxy-logo-footer.7a918263.svg'
                    alt='Hinh anh'
                />
                <p>
                    Công Ty Cổ Phần Phim Thiên Ngân, Tầng 3, Toà Nhà Bitexco Nam Long, 63A Võ Văn Tần, P. Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh
                </p>
            </div>
        </div>
    )
}
