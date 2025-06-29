import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import './Home.css';

function Home(){
    const navigate = useNavigate();

    const handleViewCatalog = () => {
        navigate('/catalogue');
    };

    const handleSubmit = () => {
        navigate('/submissions');
    };
    
    return(
        <>
        <div className='intro'>
                <h1 className='welcome'>Welcome to TechTimes</h1>
                <p className='intro-desc'>
                   Explore groundbreaking innovations from the past century. Browse through our catalog of historic tech marvels or contribute by submitting one we've missed!
                </p>
                <div className='buttons'>
                    <button className='view-catalog' onClick={handleViewCatalog}>View Catalog</button>
                    <button className='submit' onClick={handleSubmit}>Submit</button>

                </div>


            </div>
        </>);
}

export default Home