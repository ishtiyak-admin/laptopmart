import React from 'react'

export const Brand = () => {
    return (
        <div className="container-fluid brand-sections py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-12 text-center">
                    <h3 className="text-light">Choose Repair Service
                        By Brand</h3>
                    <p className="text-white">There are dozens of reasons why our clients choose Fixoria as their computer
                        service provider of choice.</p>
                </div>
                <div className="col-md-2 col-6 my-1">
                    <div className="logos-image">
                        <img src="images/aaple1.png" className="w-100" alt="laptopmart" />
                    </div>
                </div>
                <div className="col-md-2 col-6 my-1 ">
                    <div className="logos-image">
                        <img src="images/acer-inc-desktop-computers-logo-acer-aspire-one-sony-ed76ad2074de0cd45f1855e2cb1ee0c0.png" className="w-100" alt="laptopmart" />
                    </div>
                </div>
                
                <div className="col-md-2 col-6 my-1 ">
                    <div className="logos-image">
                        <img src="images/dell.png" className="w-100" alt="laptopmart" />
                    </div>
                </div>
                <div className="col-md-2 col-6 my-1 ">
                    <div className="logos-image">
                        <img src="images/hp.png" className="w-100" alt="laptopmart" />
                    </div>
                </div>
                <div className="col-md-2 col-6 my-1 ">
                    <div className="logos-image">
                        <img src="images/vaio.png" className="w-100" alt="laptopmart" />
                    </div>
                </div>
            </div>
        </div>
    )
}
