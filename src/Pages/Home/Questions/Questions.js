import React from 'react';

const Questions = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="faq">
                        <h1 className="text-center fw-bold my-5 py-5">Frequently Asked <span className="text-info">
                            Questions</span>
                        </h1>
                        <div className="row py-5">
                            <div className="col-md-6">
                                <img className="img-fluid" src="https://image.freepik.com/free-vector/eco-tourism-concept_23-2148628567.jpg" alt="" />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <div className="accordion " id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item mb-3  ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                                <button className="accordion-button fw-bold text-dark bg-transparent "
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                                    aria-controls="panelsStayOpen-collapseOne ">

                                                    Why do you need to turn off all your electronic devices before an airplane takes off and lands?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne"
                                                className="accordion-collapse collapse show"
                                                labelled="panelsStayOpen-headingOne">
                                                <div className="accordion-body  text-muted">
                                                    We've been taught to fear the interference of our portable devices and an airplane's sensitive electronic systems. And despite being told to turn off our darn phones, four out of ten passengers, it seems, disregard these warnings, since there's little hard evidence behind claims that electromagnetic emissions from devices can muddle airplane computers.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3 ">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseTwo">
                                                    Do you have to be rich to travel the world?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingTwo">
                                                <div className="accordion-body  text-muted">
                                                    The beauty of travel is that it’s accessible to everyone, in some form. You don't have to go far to experience a new culture. Plus there are several ways to make most flights affordable, whether by being flexible, searching on new websites like Skypicker and Fareness, or just by planning ahead.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseThree">
                                                    What are some common items savvy travelers bring with them (that less-savvy travelers don’t)?
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingThree">
                                                <div className="accordion-body  text-muted">
                                                    Don’t forget a small power strip—ideal for sharing a crowded outlet in an airport, and a simple way to keep all devices close by once at a hotel. (Combine that with a Zolt—which powers a laptop and two devices with a charger the size of a lipstick—and it’s even handier.)
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-3">
                                            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                                <button
                                                    className="accordion-button collapsed fw-bold text-dark bg-transparent"
                                                    type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                                    aria-controls="panelsStayOpen-collapseFour">
                                                    What are some things airline pilots won’t tell you?

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                                labelled="panelsStayOpen-headingFour">
                                                <div className="accordion-body  text-muted">
                                                    There’s no better Bible of in-flight secrets than Air Babylon, a rollicking romp through 24 hours at an airport compiling anonymous tell-alls from a raft of staff. One sample tidbit: Aviation law decrees that after an onboard death (more common than you’d imagine), planes must land at the nearest airport.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </div>
    );
};

export default Questions;