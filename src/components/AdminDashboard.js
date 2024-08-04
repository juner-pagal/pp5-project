import React from 'react';
import {useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminServices from './AdminServices';
import axios from 'axios';

const AdminDashboard = () => {

        const url = "http://localhost/kodego/pp5-activity/activitypp5.php";
        const [arr, setArr] = useState([]);
        const navigate = useNavigate();
 
        useEffect(() => {
            if (sessionStorage.getItem('admin-login')){
                axios.get(url).then((response)=>{
                    setArr(response.data)
                });
            }else{
                navigate('/admin-login');
            }
        }, []);
    const Logout = () => {
        sessionStorage.removeItem('admin-login');
        navigate('/admin-login');
    }
    return(
        <>
        
        <div className='container'>
        <div><h1 className='display-5'>JJC Admin Dashboard</h1></div>
            <div className='row'>
                <div className='col-md-2 border-end'>
                    <div className='d-grid gap-2'>
                        <Link to="/admin-services">
                            <div className='d-grid gap-2'>
                                <button type='button' className='btn btn-primary'>Services</button>
                            </div>
                        </Link>
                        <button type='button' className='btn btn-primary'>Roles & Pricing</button>
                        <button type='button' className='btn btn-primary'>View Booking</button>
                        <button type='button' onClick={Logout} className='btn btn-secondary mt-3'>Logout</button>
                    </div>
                </div>
                <div className='col-md-10'>
                    Dashboard Sections
                    <div id='services'>
                        <h1 className='display-6'>Services</h1>
                        
                    </div>
                    <div id='role-pricing'>
                        <h1 className='display-6'>Role & Pricing</h1>
                    </div>
                    <div id='view-booking'>
                        <h1 className='display-6'>Booking</h1>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default AdminDashboard;

