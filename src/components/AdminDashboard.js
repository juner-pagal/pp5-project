import React from 'react';

const AdminDashboard = () => {

    return(
        <>
        
        <div className='container'>
        <div><h1 className='display-3'>Admin Dashboard</h1></div>
            <div className='row'>
                <div className='col-md-2 border-end'>
                    <button type='button' className='btn btn-primary'>Services</button>
                </div>
                <div className='col-md-10'>
                    Dashboard Sections
                </div>
            </div>
        </div>
        </>
    )
}

export default AdminDashboard;

