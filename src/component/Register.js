import React,{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Register() {
    const navigate=useNavigate()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const [email,setEmail]=useState(true)
    const [pass,setPass]=useState(true)
    const handleEmail=(e)=>{
      setEmail( e.target.value)
       
    }
    const handlePass=(e)=>{
        setPass(e.target.value)
    }
    const handleSubmit=()=>{
        if( !regex.test(email)){
            return setEmail(false)
        }
        if(pass.length<=7){
            return setPass(false)
        }
        else{

            alert('đăng kí thành công bắt đầu mua hàng')
            navigate('/')
        }
        
    }
  return (
    <div className='register'>
        <h3>Log Into Your Account</h3>
        <div  className='register-form'>
            <div className={email ? 'email-wrap' :'email-wrap email-err'}>
                <input type="text" placeholder='nhập email...' onChange={handleEmail}/>
                <p style={{fontSize:'10px',color:"red"}}>cú pháp email không hợp lệ</p>
            </div>
            <div className={pass ? 'btn-wrap' :"btn-wrap btn-err"}>
                <input type="text" placeholder='nhập mật khẩu...' onChange={handlePass}/>
                <p style={{fontSize:'10px',color:"red"}}> độ dài mật khẩu phải lớn hơn 7 </p>

            </div>
        <button onClick={handleSubmit}>login</button>
        </div>
    </div>
  )
}

export default Register