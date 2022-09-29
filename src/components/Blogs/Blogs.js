import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2 className='blog-header'>Blogs</h2>
            <div className='blogs'>
                <div className='blog'>
                    <p className='bold'>How does React JS work?</p>
                    <p className='author'>Golam Hasnain Soyad</p>
                    <p>React JS is an open-source, component-based front end library responsible only for the view layer of the application. ReactJS divides the UI into isolated reusable pieces of code known as components. We can create as many components as necessary without cluttering the code. React allows you to effectively re-construct the DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
                </div>
                <div className='blog'>
                    <p className='bold'>Difference between Props and State</p>
                    <p className='author'>Golam Hasnain Soyad</p>
                    <p>Props are read-only and immutable means we cannot change the data. Props allows to pass data from one component to other components as an argument. Props can be accessed by the child component. Props makes components reusable. On the other hand States update able and mutable. States holds information about the components. It can be used for rendering dynamic changes with the component. Components without states are called stateless component. </p>
                </div>
                <div className='blog'>
                    <p className='bold'>Uses of useEffect except data load</p>
                    <p className='author'>Golam Hasnain Soyad</p>
                    <p>useEffect is a React Hook, We use this to tell React that our component needs to do something after render. React will remember the function that we have passed, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;