import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const url ="http://localhost/kodego/pp5-activity/activitypp5.php";
    const navigate = useNavigate();

    const check = (arr) => {
        return (arr.email == email && arr.password == password && arr.role == 'admin');
    }

    const adminlogin = () => {
        let getData = new FormData();
        getData.append('email', email);
        getData.append('password', password);
        getData.append('function', 'adminlogin');
        axios({
            method: 'POST',
            data: getData,
            url: url
        }).then(
            axios.get(url).then((res) => {
                // console.log(res.data);
                
                //console.log((res.data).filter(check));
                                
                    if((res.data).filter(check).length >= 1){
                        sessionStorage.setItem('admin-login', email);
                        navigate('/admin-dashboard');
                        // console.log('ok');
                    }else{
                        navigate('/admin-login');
                        // console.log('wrong');
                        alert("Wrong Email and Password");
                    }                
            })
        )
            
        
    }

    return(
        <>
        <div className='mt-5'>
            <div className='row text-center'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <h1 className='display-6 mb-5'>Login</h1>
                    <form method='post'>
                        Email: <br></br>
                        <input type='email' name='email' className='form-control' onChange={(e) => setEmail(e.currentTarget.value)} /><br></br>
                        Password: <br></br>
                        <input type='password' name='password' className='form-control' onChange={(e) => setPassword(e.currentTarget.value)} /><br></br>
                        <div className='d-grid gap-2'>
                            <button type='button' className='btn btn-primary' onClick={adminlogin} >Login</button>
                        </div>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>
            
        </div>
        
        </>
    )
}

export default AdminLogin;