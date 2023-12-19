import React, { useEffect } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { connect } from 'react-redux'
import './Banner.scss'
import { GrView } from 'react-icons/gr'
import { AiOutlineLike } from 'react-icons/ai'
import { AiTwotoneStar } from 'react-icons/ai'

function Banner(props) {
    useEffect(() => {
        props.GetMovieShow()
    }, [])

    // useEffect(()=>{
    //     props.GetMovieCommingSoon()
    // },[])
    const GetMovie = (movienameeng, movienamevn, movieage, moviepicture) => {
        props.SetMovieInfo(movienameeng, movienamevn, movieage)
        props.SetMoviePicture(moviepicture)
    }

    return (
        <div>
            <div className='banner'>
                <div className='bannerpicture'>
                    <img
                        src='https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F11%2F16%2Fnapoleon-2048_1700127710846.jpg&w=3840&q=75'
                        alt='Hinh anh'
                    />
                    {/* <img
                        src='https://cdn.galaxycine.vn/media/2023/3/3/2048x682_1677813232555.jpg'
                        alt='Hinh anh'
                    /> */}
                </div>

                <div className='afterbanner'>
                    <div className='cover'>
                        <div className='movie'>
                            <div className='up'>
                                <p>Movie showing</p>
                            </div>
                            <div className='down'>
                                <div className='contentcover'>
                                    {
                                        // JSON.stringify(props.movieshowState.movieShowing.movieShowing)
                                        props.movieshowState.movieShowing.movieShowing?.map((n, i) => {
                                            return <div key={i} className='moviecover' onClick={() => GetMovie(n.name, n.subName, n.imageLandscape)} >
                                                <img
                                                    src={n.imageLandscape}
                                                />
                                                <p className='vn'>{n.name}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='movie'>
                            <div className='up'>
                                <p>Coming soon</p>
                            </div>
                            <div className='down'>
                                <div className='contentcover'>
                                    {
                                        // JSON.stringify(props.movieshowState.movieShowing.movieCommingSoon)
                                        props.movieshowState.movieShowing.movieShowing?.map((n, i) => {
                                            return <div key={i} className='moviecover' onClick={() => GetMovie(n.name, n.subName, n.imageLandscape)} >
                                                <img
                                                    src={n.imageLandscape}
                                                />
                                                <p className='eng'>{n.subName}</p>
                                                <p className='vn'>{n.name}</p>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>







                        <div className='comment'>
                            <div className='left'>
                                <h3>Movie review</h3>
                                {
                                    props.movieshowState.movieShowing.movieShowing?.map((n, i) => {
                                        return (i < 4) && <div key={i} className='info' onClick={() => GetMovie(n.name, n.subName, n.imageLandscape)}>
                                            <img
                                                src={n.imageLandscape}
                                            />
                                            <div className='content'>
                                                {/* <p>[Review] {n.subName}</p> */}
                                                <p>[Review] {n.name}</p>
                                                {/* <p className='vn'>{n.name}</p> */}
                                                <div>
                                                    <div className='content_like'>
                                                        <span><AiOutlineLike /></span>
                                                        <span>Thich</span>
                                                        <span>{n.totalVotes}</span>
                                                    </div>
                                                    <div className='content_view'>
                                                        <span><GrView /></span>
                                                        <span>{n.views}</span>
                                                    </div>
                                                    <div className='content_start'>
                                                        <span className="star"><AiTwotoneStar /></span>
                                                        <span>{(n.point).toFixed(1)}</span>
                                                        <span className='hidden'>/10</span>
                                                    </div>
                                                    {/* <div className='content_description'>
                                            <p>{n.description}</p>
                                            </div> */}
                                                </div>

                                            </div>
                                        </div>
                                    })
                                }


                            </div>

                            <div className='right'>
                                <h3>Comment</h3>
                                {
                                    // JSON.stringify(props.movieshowState.movieShowing.movieCommingSoon)
                                    props.movieshowState.movieShowing.movieCommingSoon?.map((n, i) => {
                                        return (i < 4) && <div key={i} className='info' onClick={() => GetMovie(n.name, n.subName, n.imageLandscape)} >
                                            <img
                                                src={n.imageLandscape}
                                            />
                                            <div className='content'>
                                                {/* <p>[Review] {n.subName}</p> */}
                                                <p>[Review] {n.name}</p>
                                                {/* <p className='vn'>{n.name}</p> */}
                                                <div>
                                                    <div className='content_like'>
                                                        <span><AiOutlineLike /></span>
                                                        <span>Thich</span>
                                                        <span>{n.totalVotes}</span>
                                                    </div>
                                                    <div className='content_view'>
                                                        <span><GrView /></span>
                                                        <span>{n.views}</span>
                                                    </div>
                                                    <div className='content_start'>
                                                        <span className="star"><AiTwotoneStar /></span>
                                                        <span>{(n.point).toFixed(1)}</span>
                                                        <span className='hidden'>/10</span>

                                                    </div>
                                                    {/* <div className='content_description'>
                                            <p>{n.description}</p>
                                            </div> */}
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }


                            </div>
                        </div>
                        {/* <div className='discount'>
                            <h3>TIN KHUYEN MAI</h3>
                            <div className='downcontent'>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/3/21/combo-dd-digital-500x750_1679373493091.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2022/12/10/combo-u22-digital-300x450-1667285239633_1670637604853.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/3/23/1800_1679562096286.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/2/16/glx-q1-1200x1800_1676516168305.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/3/28/nta-t4-digital-1200x1800_1679991993621.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2022/1/17/300x450-1642060360230_1642391019890.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/3/27/300x450_1679905180188.jpg'
                                    />
                                </div>
                                <div className='picCover'>
                                    <img
                                        src='https://cdn.galaxycine.vn/media/2023/1/17/bangqltv-2023-digital-1200x1800_1673940943642.jpg'
                                    />
                                </div>
                            </div>

                        </div> */}
                        {/* <div className='about'>
                            <h3>GALAXY CINEMA</h3>
                            <p><b>Galaxy Cinema</b> là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem, <b>Galaxy Cinema</b> còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</p>
                            <p>Đến website galaxycine.vn, khách hàng sẽ dễ dàng tham khảo các phim hay nhất, phim mới nhất đang chiếu hoặc sắp chiếu luôn được cập nhật thường xuyên. Lịch chiếu tại tất cả hệ thống rạp chiếu phim của <b>Galaxy Cinema</b> cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ</p>
                            <p>Từ vũ trụ điện ảnh Marvel, người hâm mộ sẽ có cuộc tái ngộ với Người Nhện qua Spider-Man: No Way Home hoặc Doctor Strange 2. Ngoài ra 007: No Time To Die, Turning Red, Minions: The Rise Of Gru..., là những tác phẩm hứa hẹn sẽ gây bùng nổ phòng vé trong thời gian tới.</p>
                            <p>Giờ đây đặt vé tại <b>Galaxy Cinema</b> càng thêm dễ dàng chỉ với vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, hoặc theo ngày. Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của <b>Galaxy Cinema</b>. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của <b>Galaxy Cinema</b> hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.</p>
                            <p>Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của <b>Galaxy Cinema</b> sẽ gửi ngay vào điện thoại và hộp mail của bạn.</p>
                            <p>Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, chỉ việc đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.</p>
                            <p><b>Galaxy Cinema</b> luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho các khách hàng.</p>
                            <p>Trang web galaxycine.vn còn có mục Góc Điện Ảnh - nơi lưu trữ dữ liệu về phim, diễn viên và đạo diễn, những bài viết chuyên sâu về điện ảnh, hỗ trợ người yêu phim dễ dàng hơn trong việc lựa chọn phim và bổ sung thêm kiến thức về điện ảnh cho bản thân. Ngoài ra, vào mỗi tháng, <b>Galaxy Cinema</b> cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng .</p>
                            <p>Hiện nay, <b>Galaxy Cinema</b> đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.</p>

                        </div> */}
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
    }
}
const mapDispatchToProps = (Dispatch) => {
    return {
        GetMovieShow: () => {
            Dispatch({
                type: "GET_MOVIE_SHOW",
            })
        },
        // GetMovieCommingSoon: () => {
        //     Dispatch({
        //         type: "GET_MOVIE_COMMINGSOON",
        //     })
        // },
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner)