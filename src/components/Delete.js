import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Delete = ({id, name, email, setArr}) => {

    const url = "http://localhost/kodego/pp5-activity/activitypp5.php";

    const delBtn = (e) => {
        let getData = new FormData();
        getData.append('delid', e.currentTarget.title);
        getData.append('function', 'delete');

        axios(
            {method : 'POST',
            data : getData,
            url : url,
            config: {header:'Content-Type: multipart/form-data'}
        }).then((res) => {
            alert("1 Record Deleted Successfully!");
            axios.get(url).then((response) => {
                setArr(response.data)
            });
        });
    }
    return (
        <div>
           

            {/* <!-- Delete Modal --> */}
            <div className="modal fade" id={"delModal"+id} tabindex="-1" aria-labelledby="delModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="delModalLabel">Are you sure to delete the record for: <br></br> {name}?</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {name}<br></br>
                    {email}
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                    <button type="submit" className="btn btn-danger" title={id} onClick={delBtn} data-bs-dismiss="modal">Yes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Delete;