import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Reg = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const url = "http://localhost/kodego/pp5-activity/activitypp5.php";
    const navigate = useNavigate();

    const formSubmit = (e) =>{
        // console.log(name, email, password);
        e.preventDefault();
        let getData = new FormData();
        getData.append('name', name);
        getData.append('email', email);
        getData.append('password', password);
        getData.append('function','insert');

        axios({method : 'POST',
            data : getData,
            url : url,
            config: {header:'Content-Type: multipart/form-data'}
        }).then((res) => {
            sessionStorage.setItem('login',email);
            alert("Congrats, You're successfully Registered");
            setEmail("");
            setName("");
            setPassword("");
            navigate('/dashboard');
        });
    }
    return (
        <>
        <div className='m-auto p-4 text-center'> 
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4 m-5'>
                    <h1> Register:</h1><br></br>
                    <form>
                        Name: <br></br>
                        <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'/><br></br>
                        Email: <br></br>
                        <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' /><br></br>
                        Password: <br></br>
                        <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                    </form>
                    <div className='d-grid gap-2 mt-4'>
                        <button type='submit' onClick={formSubmit} className='btn btn-primary'>Register</button>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div>
        </div>
        </>
    )
}

export default Reg;

