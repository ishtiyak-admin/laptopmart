import React from 'react';

export default function Alert({ alert }) {

    return (
        <div style={{ height: "50px" }} className='alert-container'>
            <div className='alert alert-warning alert-dismissible fade show alert-message' role="alert">
                <strong>{alert} </strong>
                <p>If You Want to Buy this Product Click on Whatsapp and Massage Product Name Then I will Give You More details..</p>
                <div className=" navbar-collapse" id="navbarSupportedContent">
                    <a href="https://api.whatsapp.com/send?phone=7976157614"><img src="images/whatsapp.png" className='alert-whastsapp' alt="" /></a>
                </div>
            </div>
        </div>

    );
}
