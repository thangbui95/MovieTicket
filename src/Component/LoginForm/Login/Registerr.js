import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom'


export default function Registerr() {
    const nav = useNavigate();
    const [acc,setAcc] = useState('')
    const [pas,setPas] = useState('')
    const [name,setName] = useState('')
    const [role,setRole] = useState('')
    const HandleAdd = ()=>{
        fetch('https://teachingserver.org/U2FsdGVkX19vV1e+G2Dt1h63IVituNJD+GdHSpis9+rOtKy+FbHJqg==/user/user',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "Email": acc,
                "Name": name,
                "Password": pas,
                "Role": role
            })
        })
        .then(res =>{
            if (res.status===200) {
                alert('Dang ki thanh cong')
                localStorage.setItem("acc",acc)
                nav("/")

                
            }
            else{
                alert('Không thành công')
            }
        })
    }
  return (
    <div>
                            <div className='registeroption'>
                            <div className='row'>
                                <input name='Name' onChange={(e)=>{setName(e.target.value)}} placeholder='ho ten' className='w-100'/>
                            </div>
                            <div className='row'>
                                <input name='Email' onChange={(e)=>{setAcc(e.target.value)}} placeholder='email' className='w-100'/>
                            </div>
                            <div className='row'>
                                <input type='password' name='Password' onChange={(e)=>{setPas(e.target.value)}} placeholder='pass' className='w-100'/>
                            </div>
                            <div className='row'>
                                <input name='Role' onChange={(e)=>{setRole(e.target.value)}} placeholder='Role' className='w-100'/>
                            </div>
                            <p>Toi da doc va dong y voi chinh sach cua chuong trinh</p>
                            <button onClick={HandleAdd} className='w-100'>DANG KY</button>
                        </div>

    </div>
  )
}
