import React, { useEffect, useState } from 'react';

import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Services = () => {
    const [services, setServices] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://haunted-hollow-87054.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    })
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    return (
        <>

            <Container>
                <Row className="activities-div " id="srv">
                    <h1 className="fw-bold mt-5">Our Packages</h1>
                    <Row xs={1} md={3} className="g-4">
                        {

                            services.map(service =>
                                <Col>
                                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                                        <Card.Img variant="top" src={service.img} className="img-fluid" />
                                        <Card.Body>

                                            <Card.Text className="text-start">


                                                <h3 className="fw-bold"> {service.name}</h3>
                                                <p><h3 className="text-danger">${service.price}</h3><span className="text-muted">/per person</span></p>
                                                <p className="bg-light p-2 text-muted">3 Days  {service.name}, Malaysia</p>
                                                <p> {service.description.slice(0, 140)}...</p>
                                                <Link to={`/placeOrders/${service._id}`}><button className="btn btn-warning w-100">Book Now</button></Link>

                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )

                        }



                    </Row>
                </Row>
            </Container>
        </>
    );
};

export default Services;