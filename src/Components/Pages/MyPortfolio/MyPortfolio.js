import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='grid place-items-center font-semibold'>
            <h1 className='text-3xl pt-4'>My Portfolio</h1>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Hayeul Tanjib</h2>
                    <p>Email: tanjib.cse@gmail.com</p>
                    <p>Educational Background: Bsc in CSE from Daffodil International University</p>
                    <p>Tech Skills : </p>
                    <div class="tabs p-4 tabs-boxed gap-4 ">
                        <a class="tab tab-active">HTML</a>
                        <a class="tab tab-active">CSS</a>
                        <a class="tab tab-active">SASS</a>
                        <a class="tab tab-active">BootStrap 5</a>
                        <a class="tab tab-active">Tailwind CSS</a>
                        <a class="tab tab-active">JavaScript</a>
                        <a class="tab tab-active">React JS</a>
                        <a class="tab tab-active">Express - Node JS</a>
                        <a class="tab tab-active">MongoDB Atlas</a>
                        <a class="tab tab-active">Firebase</a>
                    </div>
                    <p>Some of My Projects Live Links : </p>
                    <a href="https://car-house-f74ee.web.app" className='link link-secondary' target={'_blank'}>Car house</a>
                    <a href="https://johan-wild-tales.web.app" className='link link-secondary' target={'_blank'}>Johan's Wild Photography</a>
                    <a href="https://tanjib-watch-world.netlify.app/" className='link link-secondary' target={'_blank'}>Tanjib Watch World</a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;