import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './TicketFodd.scss'


function TicketFood(props) {
    // Nguoi lon
    const [adult, Setadult] = useState(0)
    const [totaladult, totalSetadult] = useState(0)

    // Ve 2D Thanh Vien
    const [member, Setmember] = useState(0)
    const [totalmember, totalSetmember] = useState(0)

    // Ghe doi
    const [doubleseat, Setdoubleseat] = useState(0)
    const [totaldoubleseat, totalSetdoubleseat] = useState(0)

    // iCombo Friends 1 Big
    const [HOFAM1BIGONLINE, setHOFAM1BIGONLINE] = useState(0)
    const [totalHOFAM1BIGONLINE, totalsetHOFAM1BIGONLINE] = useState(0)

    // iCombo Friends 2 Big
    const [HOFAM2NEWBONINE, setHOFAM2NEWBONINE] = useState(0)
    const [totalHOFAM2NEWBONINE, totalsetHOFAM2NEWBONINE] = useState(0)

    // iCombo 1 Big Extra
    const [HOICOMBO1BEXTRA, setHOICOMBO1BEXTRA] = useState(0)
    const [totalHOICOMBO1BEXTRA, totalsetHOICOMBO1BEXTRA] = useState(0)

    // iCombo 2 Big Extra
    const [HOICOMBO2BEXTRA, setHOICOMBO2BEXTRA] = useState(0)
    const [totalHOICOMBO2BEXTRA, totalsetHOICOMBO2BEXTRA] = useState(0)

    
    const Minusadult = (adult, total) => {
        Setadult(adult-1)
        totalSetadult(total)
        if(adult-1 > -1) {
            props.SetSeatQty(adult-1,member)
        }
    }
    const Plusadult = (adult, total) => {
        Setadult(adult+1)
        totalSetadult(total)
        props.SetSeatQty(adult+1, member)
    }
    const Minusmember = (member, total) => {
        Setmember(member-1)
        totalSetmember(total)
        if(member-1 > -1) {
            props.SetSeatQty(member-1, adult)
        }
    }
    const Plusmember = (member, total) => {
        Setmember(member+1)
        totalSetmember(total)
        props.SetSeatQty(member+1, adult)

    }
    const Minusdoubleseat = (doubleseat, total) => {
        Setdoubleseat(doubleseat-1)
        totalSetdoubleseat(total)
        if(doubleseat-1 > -1) {
            props.SetDoubleSeatQty(doubleseat-1)
        }
    }
    const Plusdoubleseat = (doubleseat, total) => {
        Setdoubleseat(doubleseat+1)
        totalSetdoubleseat(total)
        props.SetDoubleSeatQty(doubleseat+1)
    }

    // iCombo Friends 1 Big
    const getcombo1 = (description, quantity) => {
        let combo1 = '';
        if((quantity) > 0) {
            combo1 = description + '('+ quantity +')'
        } else {
            combo1 = ''
        }
        props.SetCombo1(combo1)
    }
    const MinusHOFAM1BIGONLINE = (HOFAM1BIGONLINE, total, description) => {
        setHOFAM1BIGONLINE(HOFAM1BIGONLINE-1)
        totalsetHOFAM1BIGONLINE(total)
        getcombo1(description, (HOFAM1BIGONLINE-1))
    }
    const PlusHOFAM1BIGONLINE = (HOFAM1BIGONLINE, total, description) => {
        setHOFAM1BIGONLINE(HOFAM1BIGONLINE+1)
        totalsetHOFAM1BIGONLINE(total)
        getcombo1(description, (HOFAM1BIGONLINE+1))
    }

    //iCombo Friends 2 Big
    const getcombo2 = (description, quantity) => {
        let combo2 = '';
        if((quantity) > 0) {
            combo2 = description + '('+ quantity +')'
        } else {
            combo2 = ''
        }    
        props.SetCombo2(combo2)
    }
    const MinusHOFAM2NEWBONINE = (HOFAM2NEWBONINE, total, description) => {
        setHOFAM2NEWBONINE(HOFAM2NEWBONINE-1)
        totalsetHOFAM2NEWBONINE(total)
        getcombo2(description, (HOFAM2NEWBONINE-1))
    }
    const PlusHOFAM2NEWBONINE = (HOFAM2NEWBONINE, total, description) => {
        setHOFAM2NEWBONINE(HOFAM2NEWBONINE+1)
        totalsetHOFAM2NEWBONINE(total)
        getcombo2(description, (HOFAM2NEWBONINE+1))

    }

    //iCombo 1 Big Extra
    const getcombo3 = (description, quantity) => {
        let combo3 = '';
        if((quantity) > 0) {
            combo3 = description + '('+ quantity +')'
        } else {
            combo3 = ''
        }    
        props.SetCombo3(combo3)
    }
    const MinusHOICOMBO1BEXTRA = (HOICOMBO1BEXTRA, total, description) => {
        setHOICOMBO1BEXTRA(HOICOMBO1BEXTRA-1)
        totalsetHOICOMBO1BEXTRA(total)
        getcombo3(description, (HOICOMBO1BEXTRA-1))
    }
    const PlusHOICOMBO1BEXTRA = (HOICOMBO1BEXTRA, total, description) => {
        setHOICOMBO1BEXTRA(HOICOMBO1BEXTRA+1)
        totalsetHOICOMBO1BEXTRA(total)
        getcombo3(description, (HOICOMBO1BEXTRA+1))
    }

    //iCombo 2 BIG Extra
    const getcombo4 = (description, quantity) => {
        let combo4 = '';
        if((quantity) > 0) {
            combo4 = description + '('+ quantity +')'
        } else {
            combo4 = ''
        }    
        props.SetCombo4(combo4)
    }
    const MinusHOICOMBO2BEXTRA = (HOICOMBO2BEXTRA, total, description) => {
        setHOICOMBO2BEXTRA(HOICOMBO2BEXTRA-1)
        totalsetHOICOMBO2BEXTRA(total)
        getcombo4(description, (HOICOMBO2BEXTRA-1))
    }
    const PlusHOICOMBO2BEXTRA = (HOICOMBO2BEXTRA, total, description) => {
        setHOICOMBO2BEXTRA(HOICOMBO2BEXTRA+1)
        totalsetHOICOMBO2BEXTRA(total)
        getcombo4(description, (HOICOMBO2BEXTRA+1))
    }

    useEffect(() => {
        //Initial giá trị các combo = rỗng
        props.SetCombo1('')
        props.SetCombo2('')
        props.SetCombo3('')
        props.SetCombo4('')

    }, [])
    useEffect(() => {
        if (adult < 0) {
            Setadult(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
        props.SetTicketPrice(totaladult+totalmember+totaldoubleseat)
    },[adult])
    useEffect(() => {
        if (member < 0) {
            Setmember(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
        props.SetTicketPrice(totaladult+totalmember+totaldoubleseat)
    },[member])
    useEffect(() => {
        if (doubleseat < 0) {
            Setdoubleseat(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
        props.SetTicketPrice(totaladult+totalmember+totaldoubleseat)
    },[doubleseat])
    useEffect(() => {
        if (totaladult < 0) {
            totalSetadult(0)
        }
    },[totaladult])
    useEffect(() => {
        if (totalmember < 0) {
            totalSetmember(0)
        }
    },[totalmember])
    useEffect(() => {
        if (totaldoubleseat < 0) {
            totalSetdoubleseat(0)
        }
    },[totaldoubleseat])
    useEffect(() => {
        if (HOFAM1BIGONLINE < 0) {
            setHOFAM1BIGONLINE(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
    },[HOFAM1BIGONLINE])
    useEffect(() => {
        if (HOFAM2NEWBONINE < 0) {
            setHOFAM2NEWBONINE(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
    },[HOFAM2NEWBONINE])
    useEffect(() => {
        if (HOICOMBO1BEXTRA < 0) {
            setHOICOMBO1BEXTRA(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
    },[HOICOMBO1BEXTRA])
    useEffect(() => {
        if (HOICOMBO2BEXTRA < 0) {
            setHOICOMBO2BEXTRA(0)
        }
        props.SetTotalPrice(totaladult + totalmember + totaldoubleseat + totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA)
    },[HOICOMBO2BEXTRA])
    useEffect(() => {
        if (totalHOFAM1BIGONLINE < 0) {
            totalsetHOFAM1BIGONLINE(0)
        }
    },[totalHOFAM1BIGONLINE])
    useEffect(() => {
        if (totalHOFAM2NEWBONINE < 0) {
            totalsetHOFAM2NEWBONINE(0)
        }
    },[totalHOFAM2NEWBONINE])
    useEffect(() => {
        if (totalHOICOMBO1BEXTRA < 0) {
            totalsetHOICOMBO1BEXTRA(0)
        }
    },[totalHOICOMBO1BEXTRA])
    useEffect(() => {
        if (totalHOICOMBO2BEXTRA < 0) {
            totalsetHOICOMBO2BEXTRA(0)
        }
    },[totalHOICOMBO2BEXTRA])

    useEffect(()=> {
        //Ghe da bán
        fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/Ticket')
        .then(res=>res.json())
        .then(dt1 => {
            dt1.map((n,i)=> {
                return n.CinemaName === props.bannertheaterState.theater ? //cinema name
                            n.TheaterName === props.bannertheaterState.theaternumber ? //theater name
                                n.ShowTime.substr(0,10).slice(8,10)+'/'+n.ShowTime.substr(0,10).slice(5,7)+'/'+n.ShowTime.substr(0,10).slice(0,4) === props.bannershowState.show.dateinfo ? //date
                                    n.ShowTime.substr(11,5) === props.bannershowState.show.timeinfo ?
                                        props.SetLsSeatSoldRaw(n.SeatCode)
                            :'':'' :'' :''
                // theatername of sold ticket console.log(n.TheaterName)
                // cinema of sold ticket console.log(n.CinemaName)
                // date of sold ticket console.log(n.ShowTime.substr(0,10).slice(8,10)+'/'+n.ShowTime.substr(0,10).slice(5,7)+'/'+n.ShowTime.substr(0,10).slice(0,4))
                //console.log(n.ShowTime.substr(11,5)) //time of sold ticket
                //  n.ShowCode === props.paymentinfoState.allpaymentinfo.ShowCode ?
                //     props.SetLsSeatSoldRaw(n.SeatCode) 
                //     : ''
            })
        })
    },[])

    let x = {
        "CinemaName": "Galaxy Nguyễn Du",
        "TheaterName": "RAP 1",
        "ShowTime": "2023-04-07T14:15Z"
    }
    return (
        <div className='ticketfood'>
            {/* {props.seatchoosingState.doubleseatqty} */}
            {/* {JSON.stringify(props.bannershowState.show.timeinfo)} */}
            {/* {JSON.stringify(x.ShowTime.substr(11).replace(x.ShowTime.substr(11).charAt(5),''))} <br/> //time of sold ticket */}
            {/* {JSON.stringify(props.bannershowState.show.dateinfo)} //ngay  */}
            {/* {JSON.stringify(x.ShowTime.substr(0,10).slice(8,10)+'/'+x.ShowTime.substr(0,10).slice(5,7)+'/'+x.ShowTime.substr(0,10).slice(0,4))} <br/> //day of sold ticket  */}
            {/* {JSON.stringify(props.bannertheaterState.theater)} //ten rap  */}
            {/* {JSON.stringify(x.CinemaName)} <br/> //cinema name of sold ticket  */}
            {/* {JSON.stringify(props.bannertheaterState.theaternumber)} //so rap */}
            {/* {JSON.stringify(x.TheaterName)} <br/> //theater name of sold ticket  */}
            {/* {JSON.stringify(props.seatchoosingState.lsseatsoldraw) +"raw"} <br/> */}
            
          <div className='left'>
              <h3>CHOOSE TICKET/FOOD</h3>
              <div className='tickettype'>
                  <table>
                      <thead className='typezone'>
                          <tr>
                              <th className='type'>Ticket type</th>
                              <th className='qty'>Quantity</th>
                              <th className='price'>Price (VNĐ)</th>
                              <th className='total'>Sum (VNĐ)</th>
                          </tr>
                      </thead>
                      <tbody>
                            {
                                props.bookingdetailState.bookingdetail.ticket?.map((n,i) => {
                                    return <tr key={i}>
                                                <td className='type'>
                                                    <p className='upcontent'>{n.name}</p>
                                                    <p>{n.description}</p>
                                                </td>
                                                {
                                                    n.ticketTypeCode === '0003' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button onClick={()=>Minusadult(adult, n.displayPrice*(adult-1))}  className='minus'>-</button>
                                                            <input value={adult}/>
                                                            <button  onClick={()=>Plusadult(adult, n.displayPrice*(adult+1))} className='plus'>+</button>
                                                        </td>
                                                        <td className='price' >{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice*adult}</td>
                                                    </>
                                                    :null
                                                }
                                                {
                                                    n.ticketTypeCode === '0729' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button onClick={()=>Minusmember(member, n.displayPrice*(member-1))}  className='minus'>-</button>
                                                            <input value={member}/>
                                                            <button  onClick={()=>Plusmember(member, n.displayPrice*(member+1))} className='plus'>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice*member}</td>
                                                    </>
                                                    :null
                                                }
                                                {
                                                    n.ticketTypeCode === '0341' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button onClick={()=>Minusdoubleseat(doubleseat, n.displayPrice*(doubleseat-1))}  className='minus'>-</button>
                                                            <input value={doubleseat}/>
                                                            <button  onClick={()=>Plusdoubleseat(doubleseat, n.displayPrice*(doubleseat+1))} className='plus'>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice*doubleseat}</td>
                                                    </>
                                                    :null
                                                }                        
                                            </tr>
                                })   
                            }
                            <tr>
                                <td className='lasttype'>
                                    Tổng
                                </td>
                                <td className='qty'>
                                    
                                </td>
                                <td className='price'></td>
                                <td className='lasttotal'>{totaladult+totalmember+totaldoubleseat}</td>
                            </tr>
                      </tbody>
                      <thead className='combozone'>
                          <tr>
                              <th className='type'>Combo</th>
                              <th className='qty'>Quantity</th>
                              <th className='price'>Price (VNĐ)</th>
                              <th className='total'>Sum (VNĐ)</th>
                          </tr>
                      </thead>
                      <tbody>
                            {
                               props.bookingdetailState.bookingdetail && 
                               props.bookingdetailState.bookingdetail.consession[0].concessionItems.map((n,i) => {
                                    return <tr key={i}>
                                                <td className='typecombo'>
                                                    <div className='comboleft'>
                                                        <img
                                                            src={n.imageUrl}
                                                        />
                                                    </div>
                                                    <div className='comboright'>
                                                        <p className='upcontent'>{n.description}</p>
                                                        <p>{n.extendedDescription}</p>
                                                    </div>
                                                </td>
                                                {
                                                    n.headOfficeItemCode == 'HOFAM1BIGONLINE' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button className='minus' onClick={()=>MinusHOFAM1BIGONLINE(HOFAM1BIGONLINE, n.displayPrice*(HOFAM1BIGONLINE-1), n.description)}>-</button>
                                                            <input value={HOFAM1BIGONLINE}/>
                                                            <button className='plus' onClick={()=>PlusHOFAM1BIGONLINE(HOFAM1BIGONLINE, n.displayPrice*(HOFAM1BIGONLINE+1),n.description)}>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice * HOFAM1BIGONLINE}</td>
                                                    </>
                                                    : null
                                                }
                                                {
                                                    n.headOfficeItemCode == 'HOFAM2NEWBONINE' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button className='minus' onClick={()=>MinusHOFAM2NEWBONINE(HOFAM2NEWBONINE, n.displayPrice*(HOFAM2NEWBONINE-1), n.description)}>-</button>
                                                            <input value={HOFAM2NEWBONINE}/>
                                                            <button className='plus' onClick={()=>PlusHOFAM2NEWBONINE(HOFAM2NEWBONINE, n.displayPrice*(HOFAM2NEWBONINE+1), n.description)}>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice * HOFAM2NEWBONINE}</td>
                                                    </>
                                                    : null
                                                }
                                                {
                                                    n.headOfficeItemCode == 'HOICOMBO1BEXTRA' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button className='minus' onClick={()=>MinusHOICOMBO1BEXTRA(HOICOMBO1BEXTRA, n.displayPrice*(HOICOMBO1BEXTRA-1), n.description)}>-</button>
                                                            <input value={HOICOMBO1BEXTRA}/>
                                                            <button className='plus' onClick={()=>PlusHOICOMBO1BEXTRA(HOICOMBO1BEXTRA, n.displayPrice*(HOICOMBO1BEXTRA+1), n.description)}>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice * HOICOMBO1BEXTRA}</td>
                                                    </>
                                                    : null
                                                }
                                                {
                                                    n.headOfficeItemCode == 'HOICOMBO2BEXTRA' ?
                                                    <>
                                                        <td className='qty'>
                                                            <button className='minus' onClick={()=>MinusHOICOMBO2BEXTRA(HOICOMBO2BEXTRA, n.displayPrice*(HOICOMBO2BEXTRA-1), n.description)}>-</button>
                                                            <input value={HOICOMBO2BEXTRA}/>
                                                            <button className='plus' onClick={()=>PlusHOICOMBO2BEXTRA(HOICOMBO2BEXTRA, n.displayPrice*(HOICOMBO2BEXTRA+1), n.description)}>+</button>
                                                        </td>
                                                        <td className='price'>{n.displayPrice}</td>
                                                        <td className='total'>{n.displayPrice * HOICOMBO2BEXTRA}</td>
                                                    </>
                                                    : null
                                                }
                                            </tr>   
                               }) 
                            }
                            <tr>
                                <td className='lasttype'>
                                    Tổng
                                </td>
                                <td className='qty'>
                                    
                                </td>
                                <td className='price'></td>
                                <td className='lasttotal'>{totalHOFAM1BIGONLINE + totalHOFAM2NEWBONINE + totalHOICOMBO1BEXTRA + totalHOICOMBO2BEXTRA}</td>
                            </tr>
                      </tbody>
                  </table>
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
        combochoosingState: globalState.combochoosingManage,
        seatchoosingState: globalState.seatchoosingManage,
        paymentinfoState: globalState.paymentinfoManage,
    }
}
  
  const mapDispatchToProps = (Dispatch) => {
    return {
        SetTotalPrice: (price) => {
            Dispatch({
                type: "SET_TOTAL_PRICE",
                payload: price
            })
        },
        SetTicketPrice: (price1) => {
            Dispatch({
                type: "SET_TICKET_PRICE",
                payload: price1
            })
        },
        SetCombo1: (combo) => {
            Dispatch({
                type: "SET_COMBO1_CHOOSING",
                payload: {
                    combo1: combo
                }
            })
        },
        SetCombo2: (combo) => {
            Dispatch({
                type: "SET_COMBO2_CHOOSING",
                payload: {
                    combo2: combo
                }
            })
        },
        SetCombo3: (combo) => {
            Dispatch({
                type: "SET_COMBO3_CHOOSING",
                payload: {
                    combo3: combo
                }
            })
        },
        SetCombo4: (combo) => {
            Dispatch({
                type: "SET_COMBO4_CHOOSING",
                payload: {
                    combo4: combo
                }
            })
        },
        SetSeatChoosing: (seat) => {
            Dispatch({
                type: "SET_SEAT_CHOOSING",
                payload: seat
            })
        },
        SetSeatQty: (num1, num2) => {
            Dispatch({
                type: "SET_SEAT_QTY",
                payload: num1 + num2
            })
        },
        SetDoubleSeatQty: (num) => {
            Dispatch({
                type: "SET_DOUBLESEAT_QTY",
                payload: num
            })
        },
        SetLsSeatSoldRaw: (seat) => {
            Dispatch({
                type: "SET_LS_SEAT_SOLD_RAW",
                payload: seat
            })
        },
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(TicketFood)