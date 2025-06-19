import React, { useEffect, useState } from 'react';
import '../style/Splashscreen.scss'; 

function SplashScreen() {
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500); 


  }, []);

  return (
    <div 
      className={`splash-screen ${visible ? 'fade-in' : 'fade-out'}`} 
     
    >
      <img src="Group-434.png" alt="Logo" className="splash-image" />
    </div>
  );
};

export default SplashScreen;
