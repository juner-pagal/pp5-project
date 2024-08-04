import React from 'react';
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';

const Dashboard = () => {

        const url = "http://localhost/kodego/pp5-activity/activitypp5.php";
        const [arr, setArr] = useState([]);
        const [cartLength, setCartLength] = useState(0);
        const navigate = useNavigate();
 
        useEffect(() => {
            // if (sessionStorage.getItem('login')){
            //     axios.get(url).then((response)=>{
            //         setArr(response.data)
            //     });
            // }else{
            //     navigate('/login');
            // }
            // setCartLength(JSON.parse(localStorage.getItem('orders')).length);
            // setCartLength(localStorage.getItem('orders').length);
            axios.get(url).then((response) => {
                setArr(response.data)
            });

        }, []);

        const Logout = () => {
            sessionStorage.removeItem('login');
            navigate('/login');
        }

    return (
        <div className='m-auto p-5'>
            <h1>Cart:{cartLength} </h1>
            <button className='btn btn-secondary ms-3' onClick={Logout}>Logout</button><br></br>
            <Card arr={arr} setArr={setArr} setCartLength={setCartLength} />
        </div>
    )
}
 
export default Dashboard;