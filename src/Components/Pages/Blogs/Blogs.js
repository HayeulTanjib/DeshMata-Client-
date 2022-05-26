import React from 'react';

const Blogs = () => {
    return (
        <div className='grid place-items-center'>
            <h2 className='text-3xl py-4'>Blog Section</h2>
            <div class="card w-96 bg-base-100 shadow-xl ">
                <div class="card-body">
                    <h2 class="card-title">Q-1: How will you improve the performance of a React Application?</h2>
                    <p>1. React components should be remembered to avoid unwanted re-renders.</p> <br />
                    <p>2. In React, this is known as windowing or list virtualization.</p> <br />
                    <p>3. In React, lazy image loading is possible.</p> <br />
                    <p>4. React code splitting with dynamic import ()</p> <br />
                    <p>5. When it's required, keep component state local.</p> <br />
                </div>

                <div class="card-body">
                    <h2 class="card-title">Q-2: What are the different ways to manage a state in a React application?</h2>
                    <p>We know we can manage state in react in four different ways:
                        1. Local state
                        2. Global state
                        3. Server state
                        4. URL state
                    </p> <br />
                    <p>1. Local state: The useState hook is most commonly used in React to manage local state.
                        Local state would be required, for example, to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled, and the values of a form's inputs when the form is disabled.</p>
                    <p>2. Global state:  global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
                    <p>3. Server state: Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                    <p>4. URL state: The URL state is generally overlooked as a state category, yet it is an essential one. Many significant aspects of our application rely on URL state access in many circumstances.</p>

                </div>

                <div class="card-body">
                    <h2 class="card-title">Q-3: How does prototypical inheritance work?</h2>
                    <p>I know Prototype inheritance refers to the capacity of one object to access the properties of another. To add new attributes and methods to an existing object constructor, we utilize a JavaScript prototype. We may instruct our JS code to inherit attributes from a prototype in this way. Through a reference pointer function, prototypical inheritance allows us to reuse attributes or methods from one JavaScript object to another.</p>
                </div>

                <div class="card-body">
                    <h2 class="card-title">Q-4: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <img src={'https://i.ibb.co/C2NFhvg/Capture.png'} alt="" />
                </div>

                <div class="card-body">
                    <h2 class="card-title">Q-5: What is a unit test? Why should write unit tests?</h2>
                    <p>Test-driven development (TDD) is a pragmatic technique that takes a thorough approach to producing a product through continuous testing and modification. Unit testing is a component of TDD. This testing approach is also the initial level of software testing, and it comes before other types of testing like integration testing. Unit tests are used to ensure that a unit does not rely on any external code or functionalities. Testing can be done by hand, but it's more common to automate it.</p>
                </div>



            </div>
        </div>
    );
};

export default Blogs;