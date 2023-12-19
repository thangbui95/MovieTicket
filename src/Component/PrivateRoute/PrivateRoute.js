import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute(props) {
    const nav = useNavigate()
    useEffect(()=>{
        let acc = localStorage.getItem('acc')
        // let info =localStorage.getItem('info')
        console.log(props.children);
        if (!acc) {
            nav('/login')
        }
    },[nav])
  return (
    <>
    {/* {console.log(props)} */}
        {props.children}
    </>
  )
}
