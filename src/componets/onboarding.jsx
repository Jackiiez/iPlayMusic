import { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure correct import for react-router
import '../style/onboarding.scss'; 
import { FaHeart } from 'react-icons/fa';
import { IoIosMusicalNote, IoIosRadio } from 'react-icons/io';

function Onboarding() {
    const [name, setName] = useState('Where Words Fail Music Speaks');
    const [activeButton, setActiveButton] = useState("radio"); 

    const skipButtonStyle = (name === 'Peace.LoveMusic') ? { display: 'grid' } : { display: 'none' };

    return (
        <>
            <img className='onboarding-image' src="/Asset.png" alt="" />
            <h1 className='onboarding-heading'>{name}</h1>
           
            <p className='onboarding-text'>Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
            <div className='buttons-div'>
                <button 
                    className={activeButton === 'radio' ? 'active' : ''} 
                    onClick={() => {
                        setName('Where Words Fail Music Speaks');
                        setActiveButton('radio'); 
                    }}
                >
                    <IoIosRadio className='onboarding-svg' />
                </button>
                <button 
                    className={activeButton === 'heart' ? 'active' : ''} 
                    onClick={() => {
                        setName('No Music No Life');
                        setActiveButton('heart');
                    }}
                >
                    <FaHeart className='onboarding-svg' />
                </button>
                <button 
                    className={activeButton === 'note' ? 'active' : ''} 
                    onClick={() => {
                        setName('Peace.LoveMusic');
                        setActiveButton('note');
                    }}
                >
                    <IoIosMusicalNote className='onboarding-svg' />
                </button>
            </div>
            <Link className='skip' to={`/dinmor`}>
                <button className='skipbutton' style={skipButtonStyle}>skip</button>
            </Link>
        </>
    );
}

export default Onboarding;
