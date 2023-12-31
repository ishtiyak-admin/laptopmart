import React from 'react'

const Footer = () => {
    return (

        <footer>
            <div className="container-fluid py-5">
                <div className="row gy-5  justify-content-center align-items-baseline py-3">
                    <div className="col-lg-4 col-md-6">
                        <img className=" icon" src="images/lmlogo.png" alt="laptopmart" />
                        <p className="small text-light py-4 text-md-start text-center">Jaipur Shashtri Nagar Rajasthan</p>
                        <a className="text-white bold fs-2 text-md-start text-decoration-none text-center" href="tel:+9710528842304">+91-7976157614
                        </a> <br />
                    </div>
                    
                    <div className="col-lg-4 col-md-6 text-md-start text-center">
                        <h4 className="text-white text-center">ABOUT US</h4>
                        <p className="text-light text-center  ">
                            We have combined your favorite electronics such as laptops, Desktops, All in one many more products on the way! Whether open-box or pre-owned stock we provide you with certified products that have been through intensive quality checks. Our commitment to you doesn’t end after you purchase at Laptopmart. It extends beyond with up 6 to 12 months warranty.
                        </p>
                        
                    </div>
                </div>
            </div>
            <div className="EnquiryButton">
                <a href="https://api.whatsapp.com/send?phone=7976157614"><img className="whatsapp-icon-2" src="images/whatsapp.png" alt="laptopmart" /></a>
            </div>
        </footer>

    )
}
export default Footer;