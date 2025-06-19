import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import '../style/playlist.scss'; 

import { useEffect, useRef, useState } from 'react';

const jsonData = [
    {
        "title": "Item 1",
        "description": "Description for Item 1",
        "imageUrl": "photo-1545224144-b38cd309ef69.png",
        "songs": [
            {"title": "Song 1", "artist": "Artist 1", "duration": "3:45"},
            {"title": "Song 2", "artist": "Artist 2", "duration": "4:05"},
            {"title": "Song 3", "artist": "Artist 3", "duration": "2:50"},
            {"title": "Song 4", "artist": "Artist 4", "duration": "3:30"},
            {"title": "Song 5", "artist": "Artist 5", "duration": "4:15"},
            {"title": "Song 6", "artist": "Artist 6", "duration": "3:20"},
            {"title": "Song 7", "artist": "Artist 7", "duration": "2:40"},
            {"title": "Song 8", "artist": "Artist 8", "duration": "4:00"},
            {"title": "Song 9", "artist": "Artist 9", "duration": "3:10"},
            {"title": "Song 10", "artist": "Artist 10", "duration": "5:00"}
        ]
    },
    {
        "title": "Item 2",
        "description": "Description for Item 2",
        "imageUrl": "photo-1545224144-b38cd309ef69.png",
        "songs": [
            {"title": "Song 11", "artist": "Artist 11", "duration": "3:55"},
            {"title": "Song 12", "artist": "Artist 12", "duration": "4:25"},
            {"title": "Song 13", "artist": "Artist 13", "duration": "2:55"},
            {"title": "Song 14", "artist": "Artist 14", "duration": "3:35"},
            {"title": "Song 15", "artist": "Artist 15", "duration": "4:20"},
            {"title": "Song 16", "artist": "Artist 16", "duration": "3:15"},
            {"title": "Song 17", "artist": "Artist 17", "duration": "2:45"},
            {"title": "Song 18", "artist": "Artist 18", "duration": "4:10"},
            {"title": "Song 19", "artist": "Artist 19", "duration": "3:05"},
            {"title": "Song 20", "artist": "Artist 20", "duration": "5:10"}
        ]
    },
    {
        "title": "Item 3",
        "description": "Description for Item 3",
        "imageUrl": "photo-1545224144-b38cd309ef69.png",
        "songs": [
            {"title": "Song 21", "artist": "Artist 21", "duration": "3:50"},
            {"title": "Song 22", "artist": "Artist 22", "duration": "4:00"},
            {"title": "Song 23", "artist": "Artist 23", "duration": "2:30"},
            {"title": "Song 24", "artist": "Artist 24", "duration": "3:40"},
            {"title": "Song 25", "artist": "Artist 25", "duration": "4:30"},
            {"title": "Song 26", "artist": "Artist 26", "duration": "3:25"},
            {"title": "Song 27", "artist": "Artist 27", "duration": "2:55"},
            {"title": "Song 28", "artist": "Artist 28", "duration": "4:15"},
            {"title": "Song 29", "artist": "Artist 29", "duration": "3:12"},
            {"title": "Song 30", "artist": "Artist 30", "duration": "5:05"}
        ]
    }
];

export default function PlaylistScroll() {
    //state til at finde det aktive index af billedet
    const [activeCard, setActiveCard] = useState(0);
    
    const cardContainerRef = useRef(null);

  // funktion til at scrolle og opdatere nuværende index af billede
    const handleScroll = () => {
        const scrollLeft = cardContainerRef.current.scrollLeft;  //nuværende scroll position
        const cardWidth = cardContainerRef.current.offsetWidth; // finde width på billedet
        const index = Math.round(scrollLeft / cardWidth);// index af det aktive kort
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


                            
                            <div className="song-list">

                                {item.songs.map((song) => (

                                    <div  className="song-item">

                                        <p>{song.title} - {song.artist} - {song.duration}</p>

                                    </div>


                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}



