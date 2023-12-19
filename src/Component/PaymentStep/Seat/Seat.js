import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import './Seat.scss'

function Seat(props) {
    const [seatlist, Setseatlist] = useState(null)

    //Build danh sach ghe
    useEffect(() => {
        fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/booking/detail')
            .then(res => res.json())
            .then(dt => {
                Setseatlist(dt)
            })
    }, [])

    //console ls ghe da ban final
    // useEffect(() => {
    //     fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/Ticket')
    //         .then(res => res.json())
    //         .then(dt1 => {
    //             dt1.map((n, i) => {
    //                 return n.ShowCode === props.paymentinfoState.allpaymentinfo.ShowCode ?
    //                     console.log(n.SeatCode)
    //                     : ''
    //             })
    //         })
    // }, [])

    //take list ghe da ban
    useEffect(() => {
        // dang dung
        let a = [];
        props.seatchoosingState.lsseatsoldraw.forEach((n, i) => {
            let x = (n.match(/\,/g) || []).length; //check có bao nhiêu dấu phẩy
            for (let i = 0; i <= x; i++) {
                if (i < x) {
                    a.push(n.substr(0, n.indexOf(',')))
                    n = n.replace(n.substr(0, (n.indexOf(',')) + 1), '');
                } else {
                    a.push(n.substr(0, n.length))
                }
            }
        })
        a.map((n, i) => {
            return n.charAt(0) === 'O' ? props.SetSeatSold(1 + 1 + n.replace(n.charAt(0), ''))
                : n.charAt(0) === 'N' ? props.SetSeatSold(2 + 1 + n.replace(n.charAt(0), ''))
                    : n.charAt(0) === 'M' ? props.SetSeatSold(3 + 1 + n.replace(n.charAt(0), ''))
                        : n.charAt(0) === 'L' ? props.SetSeatSold(4 + 1 + n.replace(n.charAt(0), ''))
                            : n.charAt(0) === 'K' ? props.SetSeatSold(5 + 1 + n.replace(n.charAt(0), ''))
                                : n.charAt(0) === 'J' ? props.SetSeatSold(6 + 1 + n.replace(n.charAt(0), ''))
                                    : n.charAt(0) === 'I' ? props.SetSeatSold(7 + 1 + n.replace(n.charAt(0), ''))
                                        : n.charAt(0) === 'H' ? props.SetSeatSold(8 + 1 + n.replace(n.charAt(0), ''))
                                            : n.charAt(0) === 'G' ? props.SetSeatSold(10 + 1 + n.replace(n.charAt(0), ''))
                                                : n.charAt(0) === 'F' ? props.SetSeatSold(11 + 1 + n.replace(n.charAt(0), ''))
                                                    : n.charAt(0) === 'E' ? props.SetSeatSold(12 + 1 + n.replace(n.charAt(0), ''))
                                                        : n.charAt(0) === 'D' ? props.SetSeatSold(13 + 1 + n.replace(n.charAt(0), ''))
                                                            : n.charAt(0) === 'C' ? props.SetSeatSold(14 + 1 + n.replace(n.charAt(0), ''))
                                                                : n.charAt(0) === 'B' ? props.SetSeatSold(15 + 1 + n.replace(n.charAt(0), ''))
                                                                    : n.charAt(0) === 'A' ? props.SetSeatSold(16 + 1 + n.replace(n.charAt(0), ''))
                                                                        : props.SetSeatSold(n)
        })
    }, [])

    /* Hàm convert chuỗi nhiều ghế thành từng phần tử 
        //cai nay dung ne
        let a = [];
        let b = "N3,N4,N5";
        let c = (b.match(/\,/g) || []).length;
                    for (let i = 0; i <= c; i++) {
                        if (i<c) {
                            
                            a.push(b.substr(0,b.indexOf(',')));
                            b = b.replace(b.substr(0,(b.indexOf(','))+1),'');
                        } else {
                            a.push(b.substr(0,b.length));
                        }
                    }
        console.log(a)

*/

    const GetSeatId = (row, id) => {
        //function of ghế đơn
        let seatrow = '';
        if (row === 1) {
            seatrow = 'O'
        } else if (row === 2) {
            seatrow = 'N'
        } else if (row === 3) {
            seatrow = 'M'
        } if (row === 4) {
            seatrow = 'L'
        } else if (row === 5) {
            seatrow = 'K'
        } else if (row === 6) {
            seatrow = 'J'
        } else if (row === 7) {
            seatrow = 'I'
        } else if (row === 8) {
            seatrow = 'H'
        } else if (row === 10) {
            seatrow = 'G'
        } else if (row === 11) {
            seatrow = 'F'
        } else if (row === 12) {
            seatrow = 'E'
        } else if (row === 13) {
            seatrow = 'D'
        } else if (row === 14) {
            seatrow = 'C'
        } else if (row === 15) {
            seatrow = 'B'
        } else if (row === 16) {
            seatrow = 'A'
        }

        let seatname = seatrow + id
        let byrowindex = (row + 1) + id

        if (props.seatchoosingState.seatqty === 0) {
            alert('Vui lòng chọn số lượng ghế đơn ở mục chọn vé')
        } else {
            //Lấy tên ghế
            if (props.seatchoosingState.seat.length + 1 <= props.seatchoosingState.seatqty) {
                props.SetSeatChoosing(seatname)
            } else {
                props.SetRemoveSeat(seatname)
            }
    
            //Lấy stt hàng
            if (props.seatchoosingState.rowindex.length + 1 <= props.seatchoosingState.seatqty) {
                props.SetRowIndex(byrowindex)
            } else {
                props.SetRemoveRow(byrowindex)
            }
        }
    }

    //function of ghế đôi, set danh sach ghe doi dang chon
    const GetDoubleSeat = (seatid) => {
        let a = 0
        let b = 0
        if (seatid % 2 != 0) {
            a = 'P' + (seatid)
            b = 'P' + (seatid + 1)
        } else {
            a = 'P' + (seatid - 1)
            b = 'P' + (seatid)
        }

        if (props.seatchoosingState.doubleseatqty === 0) {
            alert('Vui lòng chọn số lượng ghế đôi ở mục chọn vé')
        } else {
            if (props.seatchoosingState.doubleseat.length + 1 <= props.seatchoosingState.doubleseatqty) {
                props.SetDoubleSeatStore(`${a}-${b}`)
            } else {
                props.SetRemoveDoubleSeat(`${a}-${b}`)
            }
        }
        /*  let a = 'P5-P6'
            a.substr(0,a.indexOf('-')) lay dc P5
            a.substr(a.indexOf('-')+1) lay dc P6
            a.substr(1,a.indexOf('-')-1) lay dc so 5
            a.substr(a.indexOf('-')+2) lay dc so 6
        */
    }

    return (
        <div className='seat'>
            {/* {props.seatchoosingState.doubleseat + "doubleseat choosing store"} <br /> */}
            {/* {props.seatchoosingState.rowindex + 'row index ghe dang chon'}<br /> */}
            {/* {props.seatchoosingState.seat + 'ghe dang chon'}<br /> */}
            {/* {JSON.stringify(props.seatchoosingState.lsseatsoldraw) + "raw ghe da ban"} <br />
            {JSON.stringify(props.seatchoosingState.seatsold) + 'final ghe da ban'}<br />
            {JSON.stringify(props.paymentinfoState.allpaymentinfo.ShowCode) + 'showcode'}<br />
            {JSON.stringify(props.seatchoosingState.seatqty) + 'so luong ve don'} <br /> */}
            {/* {props.seatchoosingState.doubleseatqty + 'so luong doubleseat'} <br /> */}

            <div className='left'>
                <div className='text_time'>
                    <h3>Choose seat: {[...props.seatchoosingState.seat, ...props.seatchoosingState.doubleseat].map(n=>n.length>0?n:null).filter(n=>n).toString()}</h3>
                </div>
                <div className='insidecover'>
                    <div className='seatinside'>
                        {
                            /* Hàng đôi */
                            seatlist?.seatPlan.seatLayoutData.areas[1].rows.map((n, i) => {
                                return <div key={i} className='row'>
                                    <p>{n.physicalName}</p>
                                    <div className='seatcover'>
                                        {
                                            n.seats.map((v, y) => {
                                                return props.seatchoosingState.doubleseat?.includes(`P${(v.id) - 4}-P${(v.id) - 3}`) === true ?
                                                    <p key={y} className={`eachseat style${v.seatStyle} choosingseat`}>{(v.id) - 4}</p>
                                                    : props.seatchoosingState.doubleseat?.includes(`P${(v.id) - 5}-P${(v.id) - 4}`) === true ?
                                                        <p key={y} className={`eachseat style${v.seatStyle} choosingseat`}>{(v.id) - 4}</p>
                                                        : props.seatchoosingState.seatsold?.includes(`P${(v.id) - 4}-P${(v.id) - 3}`) === true ?
                                                            <p key={y} className={`eachseat style${v.seatStyle} choseseat`}>{(v.id) - 4}</p>
                                                            : props.seatchoosingState.seatsold?.includes(`P${(v.id) - 5}-P${(v.id) - 4}`) === true ?
                                                                <p key={y} className={`eachseat style${v.seatStyle} choseseat`}>{(v.id) - 4}</p>
                                                                : <p key={y} className={`eachseat style${v.seatStyle}`} onClick={() => GetDoubleSeat(v.id - 4)}>{(v.id) - 4}</p>
                                            })
                                        }
                                    </div>
                                    <p>{n.physicalName}</p>
                                </div>
                            })
                        }

                        {
                            /* Hàng đơn và trống */
                            seatlist?.seatPlan.seatLayoutData.areas[0].rows.map((n, i) => {
                                return n.physicalName ?
                                    <div key={i} className='row'>
                                        <p className={n.physicalName}>{n.physicalName}</p>
                                        <div className='seatcover'>
                                            {
                                                n.seats.map((v, y) => {
                                                    return props.seatchoosingState.seatsold.includes((v.position.rowIndex + 1) + (v.id)) === true ?
                                                        <p key={y} className='eachseat choseseat'>{v.id}</p>
                                                        :
                                                        props.seatchoosingState.rowindex.includes((v.position.rowIndex + 1) + (v.id)) === true ?
                                                            <p key={y} className='eachseat choosingseat'>{v.id}</p>
                                                            :
                                                            <p key={y} className='eachseat' onClick={() => GetSeatId(v.position.rowIndex, v.id)}>{v.id}</p>
                                                })

                                            }
                                        </div>
                                        <p>{n.physicalName}</p>
                                    </div>
                                    :
                                    <div key={i} className='row'>
                                        <p className='null'>O</p>
                                        <div className='seatcover null'>
                                            o
                                        </div>
                                        <p className='null'>O</p>
                                    </div>
                            })
                        }
                    </div>
                    <div className='screen'>
                        <p>Màn hình</p>
                        <hr />
                    </div>
                    <div className='status'>
                        <div className='eachstatus'>
                            <span className='color'>a</span>
                            <span className='actualstatus'>Ghế đang chọn</span>
                        </div>
                        <div className='eachstatus'>
                            <span className='color2'>a</span>
                            <span className='actualstatus'>Ghế đã bán</span>
                        </div>
                        <div className='eachstatus'>
                            <span className='color3'>a</span>
                            <span className='actualstatus'>Có thể chọn</span>
                        </div>
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
        seatchoosingState: globalState.seatchoosingManage,
        paymentinfoState: globalState.paymentinfoManage,
    }
}

const mapDispatchToProps = (Dispatch) => {
    return {
        SetSeatChoosing: (seat) => {
            Dispatch({
                type: "SET_SEAT_CHOOSING",
                payload: seat
            })
        },
        SetRemoveSeat: (seat) => {
            Dispatch({
                type: "SET_REMOVE_SEAT",
                payload: seat
            })
        },
        SetRowIndex: (row) => {
            Dispatch({
                type: "SET_ROW_INDEX",
                payload: row
            })
        },
        SetRemoveRow: (row) => {
            Dispatch({
                type: "SET_REMOVE_ROW",
                payload: row
            })
        },
        SetSeatSold: (seat) => {
            Dispatch({
                type: "SET_SEAT_SOLD",
                payload: seat
            })
        },
        SetDoubleSeatStore: (seat) => {
            Dispatch({
                type: "SET_DOUBLE_SEAT_STORE",
                payload: seat
            })
        },
        SetRemoveDoubleSeat: (seat) => {
            Dispatch({
                type: "SET_REMOVE_DOUBLE_SEAT",
                payload: seat
            })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Seat)