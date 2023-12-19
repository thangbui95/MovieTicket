import React, { Component } from 'react'
import './Theater.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default class Theater extends Component {
  render() {
    return (
      <div className='theater'>
        <p className='route'>Trang chủ - Rạp chiếu phim -
          <span>Galaxy Nguyễn Du</span>
        </p>

        <div className='theaterimg'>
          <div className='img'>
            <img
              style={{
                width: '100%',
                height: 'auto',
              }}
              src='https://cdn.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-nguyen-du-1_1557134449561.jpg'
            />
          </div>
          <div className='img'>
            <img
              style={{
                width: '100%',
                height: 'auto',
              }}
              src='https://cdn.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-nguyen-du-1_1557134449561.jpg'
            />
          </div>
        </div>

        <div className='belowcover'>
          <div className='left'>
            <h3>PHIM ĐANG CHIẾU</h3>
            <div className='location'>
              <input type="date" />
              <select>
                <option>Tất cả rạp</option>
                <option>Galaxy Nguyễn Du</option>
              </select>
            </div>

            <div className='showcover'>
                <div className='show'>
                  <img
                    style={{
                      width: '20%',
                      height: '100%'
                    }}
                    src='https://cdn.galaxycine.vn/media/2023/3/3/300x450_1677813440300.jpg'
                  />
                  <div className='showinfo'>
                    <p>Siêu Lừa Gặp Siêu Lầy</p>
                    <span>2023</span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span>112 phút</span>
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
                <div className='show'>
                  <img
                    style={{
                      width: '20%',
                      height: '100%'
                    }}
                    src='https://cdn.galaxycine.vn/media/2023/3/3/300x450_1677813440300.jpg'
                  />
                  <div className='showinfo'>
                    <p>Siêu Lừa Gặp Siêu Lầy</p>
                    <span>2023</span>
                    <span>
                      <FontAwesomeIcon icon={faClock} />
                    </span>
                    <span>112 phút</span>
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
              <div className='ticketprice'>
                  <h3>GIÁ VÉ</h3>
                  <img
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                    src='https://cdn.galaxycine.vn/media/2023/1/18/nguyen-du-100_1674015247628.jpg'
                  />
              </div>
              <div className='detailinfo'>
                  <h3>THÔNG TIN CHI TIẾT</h3>
                  <p className='address'>Địa chỉ: <span>116 Nguyễn Du, Quận 1, Tp.HCM</span></p>
                  <p className='phone'>Số điện thoại: <span>1900 2224</span></p>
                  <p>
                  Là rạp chiếu đầu tiên và đông khách nhất trong hệ thống, Galaxy Nguyễn Du chính thức đi vào hoạt động từ ngày 20/5/2005 và được xem là một trong những cụm rạp mang tiêu chuẩn quốc tế hiện đại bậc nhất đầu tiên xuất hiện tại Việt Nam. Galaxy Nguyễn Du là một trong những rạp chiếu phim tiên phong mang đến cho khán giả những trải nghiệm phim chiếu rạp tốt nhất.    Galaxy Nguyễn Du gồm 5 phòng chiếu với hơn 1000 chỗ ngồi, trong đó có 1 phòng chiếu phim 3D và 4 phòng chiếu phim 2D, với hơn 1000 chỗ ngồi được thiết kế tinh tế giúp khách hàng có thể xem những bộ phim hay một cách thoải mái và thuận tiện nhất. Chất lượng hình ảnh rõ nét, âm thanh Dolby 7.1 cùng màn hình chiếu kỹ thuật 3D và Digital vô cùng sắc mịn, mang đến một không gian giải trí vô cùng sống động.   Bên cạnh đó, với lợi thế gần khu vực sầm uất bậc nhất ở trung tâm thành phố, bãi để xe rộng rãi, có tiệm cafe ngoài trời – đây là nơi cực thu hút bạn trẻ đến xem phim và check-in.
                  </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
