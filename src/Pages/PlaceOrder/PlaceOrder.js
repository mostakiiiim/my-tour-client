import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./PlaceOrder.css"

const PlaceOrder = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/myOrders'
    useEffect(() => {
        fetch(`https://haunted-hollow-87054.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [serviceId])

    const { register, handleSubmit, reset } = useForm({ defaultValues: { status: "Pending" } });
    const onSubmit = data => {

        console.log(data);
        axios.post('https://haunted-hollow-87054.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    history.push(redirect_uri)
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>Review Order</h1>
            <h3>Package Name: <span className="fw-bold fs-1">{service.name}</span></h3>

            <div className="add-service">

                <form onSubmit={handleSubmit(onSubmit)}>

                    {service.name && <input readOnly={true} {...register("name")} defaultValue={service.name} placeholder="name" />}
                    <input {...register("user")} defaultValue={user.displayName} placeholder="name" />
                    <input  {...register("email")} defaultValue={user.email} />
                    <input {...register("address", { required: true })} placeholder="address" />
                    <input  {...register("number", { required: true })} placeholder="Phone Number" />
                    {service.price && <input readOnly={true} {...register("price")} defaultValue={service.price} />}
                    <input className="d-none" readOnly={true} {...register("status")} defaultValue="pending" />




                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;