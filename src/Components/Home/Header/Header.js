import React from 'react';
import './Header.css';
import home from '../../../images/home.png';
import {useSpring, animated} from 'react-spring'

const Header = () => {
    return (
        <section className="home">
            <div className="container">
                <div className="row home-section-separator">
                    <div className="col-md-12 px-0">
                        <div className="row">
                            <div className="col-md-5">
                                <animated.div className="home-inner">
                                    <h1>Let’s Grow Your Brand To The Next Level</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat duis laoreet maecenas.</p>
                                    <button className="btn btn-primary btn-fill">Hire Us</button>
                                </animated.div>
                            </div>
                            <animated.div  className="col-md-7"> 
                                <img src={home} alt="" className="img-fluid"/>
                            </animated.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;