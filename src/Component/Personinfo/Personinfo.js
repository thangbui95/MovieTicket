import React, { Component } from 'react'
import './Personinfo.scss'

export default class Personinfo extends Component {
    constructor() {
        super();
        this.state = {
            isInfo: true,
            lsUser: [],
            lsTicket: [],
            fn: '',
            date: '',
        }
    }
    componentDidMount() {
        fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/user/user`)
            .then(res => res.json())
            .then(dt => {
                this.setState({
                    lsUser: dt

                })
                // console.log(this.state.lsUser);
            })
        fetch(`https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/cinema/Ticket`)
            .then(res => res.json())
            .then(dt1 => {
                this.setState({
                    lsTicket: dt1
                })
            })

    }

    render() {
        const personal = () => {
            this.setState({
                isInfo: true
            })
        }

        const ticketbought = () => {
            this.setState({
                isInfo: false
            })
        }

        const HandleInput = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

        return (
            <div className='personinfo'>
                {
                    // JSON.stringify(this.state.lsTicket)

                }
                <div className='content'>
                    <div className='up'>
                        <h3 onClick={personal}>THONG TIN THANH VIEN</h3>
                        <h3 onClick={ticketbought}>GIAO DICH CUA TOI</h3>
                    </div>
                    {
                        this.state.isInfo ?
                            this.state.lsUser.map(n => {
                                return n.Email === localStorage.getItem('acc') ?
                                    <div className='personal'>
                                        <div className='row'>
                                            <p>Ho & Ten:</p>
                                            <input value={n.Name} />
                                        </div>
                                        <div className='row'>
                                            <p>Email:</p>
                                            <input value={n.Email} />
                                        </div>
                                    </div>
                                    :
                                    ""
                            })

                            :
                            <div className='ticketbought'>
                                <input name='fn' onChange={HandleInput} placeholder='Film Name' style={{ fontSize: '14px', padding: '5px', borderRadius: '5px', marginBottom: '5px', border: '1px solid gray' }} /> <br />
                                {/* <input name='date' onChange={HandleInput} placeholder='Date' style={{fontSize: '14px', padding: '5px', borderRadius: '5px', marginBottom: '5px', border: '1px solid gray'}}/>  */}
                                <select onChange={HandleInput} name='date' style={{ fontSize: '14px', padding: '5px', borderRadius: '5px', marginBottom: '5px', border: '1px solid gray' }}>
                                    <option hidden>Select date...</option>
                                    {
                                        this.state.lsTicket
                                        .filter(n => n.FilmName.includes(this.state.fn))
                                        .map(m => {
                                            return m.Email === localStorage.getItem('acc') ?
                                                <option value={m.ShowTime.substr(0, 10)}>{m.ShowTime.substr(0, 10)}</option>
                                                : ''
                                        })
                                    }
                                </select>
                                <table border={1}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Ngay</th>
                                            <th>Gio</th>
                                            <th>Phim</th>
                                            <th>Rap</th>
                                            <th>Ghe</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.lsTicket
                                                .filter(n => n.FilmName.includes(this.state.fn))
                                                .filter(n => n.ShowTime.substr(0, 10).includes(this.state.date))
                                                .map(m => {
                                                    return m.Email === localStorage.getItem('acc') ?
                                                        <tr>
                                                            <td>{m.ShowCode}</td>
                                                            <td>{m.ShowTime.substr(0, 10)}</td>
                                                            <td>{m.ShowTime.substr(11, 5)}</td>
                                                            <td>{m.FilmName}</td>
                                                            <td>{m.CinemaName}</td>
                                                            <td>{m.SeatCode}</td>
                                                        </tr>
                                                        :
                                                        ""

                                                })
                                        }
                                    </tbody>
                                </table>
                            </div>


                    }


                </div>
            </div>
        )
    }
}
