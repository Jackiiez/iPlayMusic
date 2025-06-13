import React, { useState, useEffect } from 'react';
import '../style/login.scss'; 
import { IoIosFingerPrint } from 'react-icons/io';

function Login() {
    const [name, setName] = useState('');
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !password) {
            alert("Please fill out all fields.");
            return;
        }

        const booked = JSON.parse(localStorage.getItem('bookers')) || [];
        booked.push({ email: name, password });
        localStorage.setItem('sponsors', JSON.stringify(booked));
        localStorage.removeItem("totalPrice");

        setName('');
        setPassword('');
    };

    return (
        <>
            <h1 className={`${visible ? 'fade-in' : 'fade-out'}`}>Login</h1>
            <div className="checkout-container">
                <form className={`payment-details splash-screen ${visible ? 'fade-in' : 'fade-out'}`} onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username" // Added id attribute
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password" // Added id attribute
                        type="password" // Corrected input type
                        name="password"
                        placeholder="****"
                        maxLength="16"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="pay-btn">
                        Login
                    </button>
                    <IoIosFingerPrint />
                </form>
            </div>
        </>
    );
}

export default Login;
