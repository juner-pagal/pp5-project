import React from 'react';


const View = ({id, name, email}) => {
    return(
        <div>
           

            {/* <!-- View Modal --> */}
            <div className="modal fade" id={"viewModal"+id} tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="viewModalLabel">View</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {name}<br></br>
                    {email}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default View;