import React from 'react';
import { Link } from 'react-router-dom';
import bgImg from '../../../Assets/bg.jpg'

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen " style={{backgroundImage: `url(${bgImg})` }}>
                <div class="hero-overlay bg-opacity-30"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-white">Hello there</h1>
                        <p class="mb-5 text-white">We are DeshMata Agronomic Tool and Manufacturing Inc. The leading Agronomic Tool and Manufacturing Company based in Dhaka, Bangladesh </p>
                        <Link to={'/allproducts'} class="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;