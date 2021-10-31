import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import "./Review.css"

const Reviews = () => {
    return (
        <div >
            <div className="container">

                <h1>What the Clients Say About Us</h1>
                <div className="row row-cols-1 row-cols-md-4 my-5 gap-3 d-flex justify-content-center">
                    <div className="col mb-3">
                        <div className="card h-100">
                            <img width="150px" src="https://image.freepik.com/free-photo/young-hopeful-woman-with-blond-hair-holding-hands-together-smiling-politely-waiting-opportunity-ready-help-client-standing-against-white-wall_176420-38910.jpg" className="card-img-top w-50 my-5 mx-auto rounded-circle"
                                alt="..." />
                            <div className="card-body text-start">
                                <p className=" my-2 fw-bold">Melinda James</p>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <h3 className="p-3">"Must Try Agency"</h3>
                                <p className="card-text text-muted">I found the service and response of this travel agency to be excellent. Easily 5-stars. My emails were promptly responded to, and everyone showed up when they were supposed to. The $110 charged for my sedan ride to Bangkok for my family seemed like very good value.</p>


                            </div>
                        </div>


                    </div>
                    <div className="col  mb-3">
                        <div className="card h-100">
                            <img width="150px" src="https://image.freepik.com/free-photo/attractive-redhead-adult-man-showing-thumbs-up-smiling-happy-satisfied-with-quality-praise-agree-making-compliment-well-done-great-job-gesture_176420-38436.jpg" className="card-img-top w-50 my-5 mx-auto rounded-circle"
                                alt="..." />
                            <div className="card-body text-start ">
                                <p className=" my-2 fw-bold">Scarlet Jhonson</p>
                                <i className="fas fa-star text-success "></i>
                                <i className="fas fa-star text-success "></i>
                                <i className="fas fa-star text-success "></i>
                                <i className="fas fa-star text-success "></i>
                                <i className="fas fa-star text-secondary "></i>

                                <h3 className="p-3">"Professional and Affordable"</h3>
                                <p className="card-text text-muted">Trip was well managed .hotel was just good..Do not expect luxury . Food was passable.Be more vigilant about booking with travel agents..Clarify each and every inclusion before making payments to ....</p>
                            </div>
                        </div>


                    </div>
                    <div className="col mb-3">
                        <div className="card h-100">
                            <img width="150px" src="https://image.freepik.com/free-photo/pleasant-gorgeous-friendly-looking-african-american-girlfriend-wearing-modern-stylish-blouse-holding-smartphone-smiling-broadly-nice-outgoing-attitude-edit-selfie-using-internet-app_176420-35383.jpg" className="card-img-top w-50 my-5 mx-auto rounded-circle"
                                alt="..." />
                            <div className="card-body text-start">
                                <p className=" my-2 fw-bold">Dina Parker</p>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <i className="fas fa-star text-success"></i>
                                <h3 className="p-3">"Awesome Service and Very Friendly"</h3>
                                <p className="card-text text-muted">Thoroughly Enjoyed the Trip.Its Beautifully planned by Malay Travels on such a short Notice.Thanks for all the Prompt response and guidance.</p>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="review-content">
                <div className="row m-5 pt-3">
                    <div className="col-md-6 d-flex flex-column justify-content-center fw-bold">
                        <h1>Happy Travelers</h1>
                        <h1>99.6% </h1><span>Positive Reviews</span>
                    </div>
                    <div className="col-md-6">

                        <span className="fw-bold ">Excellent</span><ProgressBar animated now={70} /><br />
                        <span className="fw-bold ">Very Good</span><ProgressBar animated now={75} /><br />
                        <span className="fw-bold ">Good</span><ProgressBar animated now={40} /><br />
                        <span className="fw-bold ">Poor</span> <ProgressBar animated now={10} /><br />
                        <span className="fw-bold ">Bad</span> <ProgressBar animated now={5} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;