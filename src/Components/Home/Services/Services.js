import React, { useEffect } from 'react';
import SingleService from './SingleService';
import './Services.css'
import { useState } from 'react';


const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:7000/services")
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data)
        })
    }, [])

    return (
        <section className="services-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <h1 className="title">Provide awesome <span>services</span></h1>
                        <div className="service-inner">
                            <div className="row">
                                {
                                    services.map(service => <SingleService service={service} key={service._id}></SingleService>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;