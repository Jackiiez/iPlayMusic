import React, { useState, useEffect, useRef } from 'react';
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


    useEffect(() => {
        const storedPrice = localStorage.getItem("totalPrice");
        if (storedPrice) {
            setPrice(parseFloat(storedPrice));
        }
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !password ) {
            alert("Please fill out all fields.");
            return;
        }

     


      

        const booked = JSON.parse(localStorage.getItem('bookers')) || [];
        booked.push({ email, password});
        localStorage.setItem('sponsors', JSON.stringify(booked));
        localStorage.removeItem("totalPrice");



        setName('');
       
        setPassword('');
       
      
    };

    return (
        <>
        <h1 className={` ${visible ? 'fade-in' : 'fade-out'}`}>Login</h1>
        <div className="checkout-container">
            



            <form  className={`payment-details splash-screen ${visible ? 'fade-in' : 'fade-out'}`}  onSubmit={handleSubmit}>
            

                <label>Username</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="passoword"
                    name="cardNumber"
                    placeholder="****"
                   
                    maxLength="16"
                    onChange={(e) => setPassword(e.target.value)}
                />




                <button className="pay-btn" >
                    login
                </button><IoIosFingerPrint />
            </form>
      


        </div></>
    );
}

export default Login;