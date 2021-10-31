import React from 'react';
import './Banner.css'
import asiaBanner from './../../../images/asia.png'
const Banner = () => {
    return (
        <div className="banner-content">
            <div className="row">
                <div className="col-md-6 col-12 mt-5 d-flex justify-content-center align-contents-center align-items-center ">
                    <h1> Welcome to  <br /> <span className="fw-bold">MALAY TRAVELS</span> <br />
                        <a target="_blank." href='https://youtu.be/oOQ1SbkU_c4'><button className="btn btn-danger text-white mt-5 ">Visit Malaysia</button>
                        </a>


                    </h1>
                </div>
                <div className="col-md-6 col-12  mt-5 d-flex justify-content-center align-contents-center align-items-center ">
                    <img src={asiaBanner} alt="" className="img-fluid" />
                </div>
            </div>

        </div>
    );
};

export default Banner;