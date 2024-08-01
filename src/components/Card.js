import React from 'react';
import View from './View';
import Edit from './Edit';
import Delete from './Delete';


function Card({arr, setArr}) {

    return(
        <>
        {arr.map((item) => {
                return(
                <>
                    <div className='d-inline-block m-auto p-3'>  
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <h5 className="card-title">{item.email}</h5>
                            
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                        <button id={"view"+item.id} className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target={"#viewModal"+item.id}>View</button>
                        <button id={"edit"+item.id} className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target={"#editModal"+item.id}>Edit</button>
                        <button id={"del"+item.id} className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={"#delModal"+item.id}>Delete</button>
                        </div>
                        <View id={item.id} name={item.name} email={item.email} />
                        <Edit id={item.id} name={item.name} email={item.email} password={item.password} arr={arr} setArr={setArr} />
                        <Delete id={item.id} name={item.name} email={item.email} password={item.password} arr={arr} setArr={setArr} />
                    </div>
                    
                </>
                )
            })}
        </>
    )

}

export default Card;