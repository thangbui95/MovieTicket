import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'



export default function Loginn() {
    const [acc,setAcc]=useState('')
    const [pass,setPass]=useState('')
    const nav = useNavigate()

    const HandleSubmit = ()=>{
        fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/user/Login',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "Email": acc,
                "Password": pass
            })
        })
        .then(res =>{
            if (res.status===200) {
                localStorage.setItem('acc',acc)
                nav('/')
                alert('đăng nhâp thành công')
            }
            else{
                alert('đăng nhâp không thành công')
            }
        })
        .then(data=>{

        })
    }
  return (
    <div>
                            <div className='loginoption'>
                            <p>Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội nhận thêm nhiều ưu đãi từ chương trình thành viên Galaxy Cinema.</p>
                            <input onChange={(e)=>{setAcc(e.target.value)}} placeholder='email'/>
                            <input type='password' onChange={(e)=>{setPass(e.target.value)}} placeholder='password'/>
                            <p>Quen mat khau?</p>
                            <button onClick={HandleSubmit}>DANG NHAP</button>
                        </div>

    </div>
  )
}
