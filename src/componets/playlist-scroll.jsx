import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import '../style/playlist.scss'; 

import { useEffect, useRef, useState } from 'react';


const jsonData = [
    {
        title: "Item 1", 
        description: "Description for Item 1",
        imageUrl: "photo-1545224144-b38cd309ef69.png" 
    },
    {
        title: "Item 2",
        description: "Description for Item 2", 
        imageUrl: "photo-1545224144-b38cd309ef69.png"
    },
    {
        title: "Item 3",
        description: "Description for Item 3", 
        imageUrl: "photo-1545224144-b38cd309ef69.png" 
    }
];

export default function PlaylistScroll() {
    //state til at finde det aktive index af billedet
    const [activeCard, setActiveCard] = useState(0);
    
    
    const cardContainerRef = useRef(null);

    // funktion til at scrolle og opdatere nuværende index af billede
    const handleScroll = () => {
        const scrollLeft = cardContainerRef.current.scrollLeft; //nuværende scroll position
        const cardWidth = cardContainerRef.current.offsetWidth; // finde width på billedet
        const index = Math.round(scrollLeft / cardWidth); // index af det aktive kort
        setActiveCard(index); 
    };

    return (
        <>
            <div className="picture-container">
                <div
                    className="card-scroll-container"
                    onScroll={handleScroll}
                    ref={cardContainerRef}
                    style={{ display: 'flex' }}
                >
                    {jsonData.map((item, index) => (
                        <div key={index} className={`card ${activeCard === index ? 'active' : ''}`} style={{ minWidth: '100%', textAlign: 'center' }}>
                            <div className="logo">
                                <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: 'auto', marginBottom: "5rem" }} /> 
                            </div>
                            <h3 className='card-scroll-heading'>{item.title}</h3> 
                            <p className='card-scroll-text'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


