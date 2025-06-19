
import { useEffect, useState } from "react";
import "../style/albums.scss";
export default function Realeases() {
    const [cinemas, setCinemas] = useState([]);

    useEffect(() => {
        fetch('/releases.json')
            .then(response => response.json())
            .then(data => setCinemas(data))
            .catch(error => console.error('Error fetching cinemas:', error));
    }, []);

    return (
        <div className='cinemas'>
           <div className="content-div">
          <h2>New releases</h2>
            <p>View all</p>
           </div>
            <ul className="newrealeases-ul">
                {cinemas.map((cinema, index) => (
                    <li key={index}>
                        <img className='placeholders' src={cinema.picture} alt={`${cinema.name} Picture`} />
                        <div className="cinema__div">  <h2 className='cinemaname'>{cinema.name}</h2>
                            <p className='cinematext'> {cinema.duration}</p></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
