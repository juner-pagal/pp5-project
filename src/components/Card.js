import React, { useState } from 'react';
import View from './View';
import Edit from './Edit';
import Delete from './Delete';


function Card({arr, setArr, setCartLength}) {

    const [prod, setProd] = useState();
    const [price, setPrice] = useState();

    const [orders, setOrders] = useState([]);

    const addTocart = (e) => {
        // alert(e.currentTarget.id);
        setProd(document.getElementById("prod"+e.currentTarget.id).innerText);
        setPrice(document.getElementById("price"+e.currentTarget.id).innerText);
        orders.push({
            item: (document.getElementById("prod"+e.currentTarget.id).innerText), 
            price :(document.getElementById("price"+e.currentTarget.id).innerText)
    });
        setOrders(orders);
        localStorage.setItem('orders', JSON.stringify(orders));
        setCartLength(JSON.parse(localStorage.getItem('orders')).length);
}  
    return(
        <>
        {arr.map((item) => {
                return(
                <>
                    <div className='d-inline-block m-auto p-3'>  
                        <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title" id={"prod"+item.id}>{item.name}</h5>
                            <h5 className="card-title" id={"price"+item.id}>{item.email}</h5>
                            
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div className='card-footer text-center'>
                        <button id={"view"+item.id} className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target={"#viewModal"+item.id}>View</button>
                        {/* <button id={"edit"+item.id} className="btn btn-success m-2" data-bs-toggle="modal" data-bs-target={"#editModal"+item.id}>Edit</button>
                        <button id={"del"+item.id} className="btn btn-danger m-2" data-bs-toggle="modal" data-bs-target={"#delModal"+item.id}>Delete</button> */}
                        <button className='btn btn-warning' id={item.id} onClick={addTocart}>Add to Cart</button>
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