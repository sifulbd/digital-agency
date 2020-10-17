import React, { useEffect } from 'react';
import Service from './Service';
import './Services.css'
import { useState } from 'react';


const Services = () => {
    const [services , setServices] = useState([]);
    useEffect(() => {
        fetch("https://pacific-bayou-95420.herokuapp.com/services")
        .then(res => res.json())
        .then(data => {
            setServices(data);
        })
    }, [])

    return (
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <h1 className="title">Provide awesome <span>services</span></h1>
                        <div className="service-inner">
                            <div className="row">
                                {
                                    services.map(service => <Service service={service} key={service._id}></Service>)
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