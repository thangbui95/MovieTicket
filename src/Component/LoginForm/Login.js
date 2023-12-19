import React, { Component } from 'react'
import './Login.scss'
import Loginn from './Login/Loginn'
import Registerr from './Login/Registerr'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            isLogin: true,
        }
    }
  render() {
    const Login = () => {
        this.setState({
            isLogin: true
        })
    }

    const Register = () => {
        this.setState({
            isLogin: false
        })
    }

    return (
      <div className='login'>
            <div className='cover'>
                <div className='option'>
                    <h3 onClick={Login}>DANG NHAP</h3>
                    /
                    <h3 onClick={Register} style={{marginLeft: '20px'}}>DANG KY</h3>
                    <a href='/'>X</a>
                </div>
                {
                    this.state.isLogin ? 
                        <div className='loginoption'>
                            <Loginn/>
                        </div>
                    :
                        <div className='registeroption'>
                            <Registerr/>
                            </div>

                }
            </div>
      </div>
    )
  }
}
