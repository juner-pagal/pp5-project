import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Edit = ({id, name, email, password, setArr}) => {
    const nav = useNavigate();
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const [upassword, setPassword] = useState(password);
    const url = "http://localhost/kodego/pp5-activity/activitypp5.php";

    const formSubmit = (e) =>{
        // console.log(name, email, password);
        // alert(e.currentTarget.title);
        // e.preventDefault();
        let getData = new FormData();
        getData.append('uid', e.currentTarget.title);
        getData.append('uname', uname);
        getData.append('uemail', uemail);
        getData.append('upassword', upassword);
        getData.append('function', 'update');

        axios(
            {method : 'POST',
            data : getData,
            url : url,
            config: {header:'Content-Type: multipart/form-data'}
        }).then((res) => {
            alert("success");
            axios.get(url).then((response) => {
                setArr(response.data)
            });
        });
    }

    return(
        <div>
           

            {/* <!-- Edit Modal --> */}
            <div className="modal fade" id={"editModal"+id} tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="editModalLabel">Edit</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        Name: <br></br>
                        <input type='text' id='name' name='name' value={uname} onChange={(e) => setName(e.target.value)} className='form-control'/><br></br>
                        Email: <br></br>
                        <input type='email' id='email' name='email' value={uemail} onChange={(e) => setEmail(e.target.value)} className='form-control' /><br></br>
                        Password: <br></br>
                        <input type='password' id='password' name='password' value={upassword} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary" title={id} onClick={formSubmit} data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Edit;