import React from 'react';
import NavigationBar from '../../Navigation/NavigationBar';
import ReactToPdf from "react-to-pdf";
import { Button } from 'react-bootstrap';

const ref = React.createRef();

const Blog = () => {

    return (
        <div>
            <NavigationBar />
            <div className='mt-5'>
                <div className='text-center'>
                    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                        {({ toPdf }) => (
                            <Button className='bg-info' onClick={toPdf}>Blog pdf</Button>
                        )}
                    </ReactToPdf>
                </div>

                <div className='m-5 p-5 w-50' ref={ref}>

                    <div className="shadow-lg p-3  mb-5 bg-body rounded">
                        <h5 className='mb-3'>Q1 : Tell us the differences between uncontrolled and controlled components.</h5>
                        <p className='mb-3'>Ans : In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className='mb-3'>Q2 : How to validate React props using PropTypes</h5>
                        <p className='mb-3'>Ans : PropTypes.any : The prop can be of any data type.
                            PropTypes.bool : The prop should be a Boolean. PropTypes.number : The prop should be a number. PropTypes.string : The prop should be a string. PropTypes.func : The prop should be a function.PropTypes.array : The prop should be an array.</p>
                    </div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className='mb-3'>Q3 : Tell us the difference between nodejs and express js</h5>
                        <p className='mb-3'>Ans : Node. js is an open-source and cross-platform that is used to execute JavaScript code outside of a browser. Express. js is used to develop complete web applications such as single-page, multi-page, and hybrid web applications and APIs.</p>
                    </div>
                    <div className="shadow-lg p-3 mb-5 bg-body rounded">
                        <h5 className='mb-3'>Q4 : What is a custom hook, and why will you create a custom hook?</h5>
                        <p className='mb-3'>Ans : Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blog;