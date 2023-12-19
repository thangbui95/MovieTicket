import React, { Component } from 'react'
import './Movie.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class Movie extends Component {
    render() {
        return (
            <div className='movie'>
                <p className='route'>Trang chủ - Đặt vé -
                    <span>SHAZAM! FURY OF THE GOD</span>
                </p>
                <div className='belowcover'>
                    <div className='left'>
                        <div className='overallcover'>
                            <img
                                style={{
                                    width: '25%',
                                    height: '100%'
                                }}
                                src='https://cdn.galaxycine.vn/media/2023/2/10/shazam-3_1675998610941.jpg'
                            />
                            <div className='overallcontent'>
                                <div className='namecover'>
                                    <p>SHAZAM! FURY OF THE GODS</p>
                                    <p className='vn'>SHAZAM! CƠN THỊNH NỘ CỦA CÁC VỊ THẦN</p>
                                </div>

                                <div className='rating'>
                                    <span>
                                        <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                                    </span>

                                    <span>
                                        <div>7.5/10</div>
                                        <div>207</div>
                                    </span>
                                    <span className='review'>
                                        ĐÁNH GIÁ
                                    </span>
                                </div>

                                <div className='otherinfo'>
                                    <span className='type'>C13</span>
                                    <span>
                                        <FontAwesomeIcon icon={faClock} />    130 phút
                                    </span>
                                    <span></span>
                                    <span className='like'>Thích</span>
                                    <span className='share'>Chia sẻ</span>
                                </div>

                                <p>Đạo diễn: <span>David F.Sandberg</span></p>
                                <p>Diễn viên: <span>Zachary Levi, Helen Mirren</span></p>
                                <p>Quốc gia: <span>My</span></p>
                                <p>Nhà sản xuất: <span>Warner Bros</span></p>
                                <p>Thể loại: <span>Hanh dong</span></p>
                                <p>Ngày khởi chiếu: <span>16/3/2023</span></p>

                            </div>
                        </div>

                        <div className='description'>
                            <h3>NỘI DUNG PHIM</h3>
                            <p>
                                Trong lần trở lại này, cậu chàng Shazam vẫn trăn trở cho rằng mình “không xứng đáng với năng lực này”. Thế giới có The Flash nhanh như chớp với bộ suit đỏ đặc trưng, Aquaman to cao lực lưỡng và cả Batman siêu ngầu. Trong khi đó, Shazam vẫn chỉ là Shazam chẳng có năng lực gì khác biệt… hoặc là Billy Batson, một cậu nhóc trung học trong thân hình một siêu anh hùng cao to già đời, không thể kiểm soát sức mạnh của mình. Nếu như các siêu anh hùng khác khiến khán giả không khỏi trầm trồ vì những năng lực siêu phàm có thể cứu thế giới thì “cậu nhóc” Shazam, mỗi khi dùng siêu năng lực vẫn hậu đậu như một “chú hề” lừng danh khiến người xem phải bật cười.
                            </p>
                        </div>
                        <div className='show'>
                            <h3>LỊCH CHIẾU</h3>
                            <div className='location'>
                                <select>
                                    <option>Cả nước</option>
                                    <option>Cà Mau</option>
                                    <option>Bến Tre</option>
                                </select>
                                <input type="date" />
                                <select>
                                    <option>Tất cả rạp</option>
                                    <option>Galaxy Nguyễn Du</option>
                                </select>
                            </div>
                            <div className='locationdetail'>
                                <div className='theatername'>
                                    <span>Galaxy Nguyễn Du</span>
                                    <div className='type_time'>
                                        <p className='type'>2D - Phụ đề</p>
                                        <div className='timecover'>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                            <p className='time'>22:00</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='right'>
                        <div className='discount'>
                            <h3>Nhận khuyến mãi</h3>
                            <div className='register'>
                                <input placeholder='Email' />
                                <button>Đăng ký</button>
                            </div>
                        </div>
                        <div className='showing'>
                            <h3>Phim đang chiếu</h3>
                            <div className='movie'>
                                <img
                                    style={{
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    src='https://cdn.galaxycine.vn/media/2023/2/10/shazam-2_1675998615953.jpg'
                                />
                                <p className='eng'>SHAZAM! FURY OF THE GODS</p>
                                <p className='vn'>SHAZAM! Cơn thịnh nộ của các vị thần</p>
                            </div>
                            <div className='movie'>
                                <img
                                    style={{
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                    src='https://cdn.galaxycine.vn/media/2023/2/10/shazam-2_1675998615953.jpg'
                                />
                                <p className='eng'>SHAZAM! FURY OF THE GODS</p>
                                <p className='vn'>SHAZAM! Cơn thịnh nộ của các vị thần</p>
                            </div>
                            <button>xem thêm</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
