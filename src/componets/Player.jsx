import { useEffect, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { IoCaretBackSharp, IoCaretForwardSharp, IoPlayBack, IoPlayBackSharp, IoPlayForwardSharp, IoPlaySharp, IoPlaySkipBackSharp } from "react-icons/io5";




export default function Player() {
     const [cards, setCards] = useState([]);
  
      useEffect(() => {
          fetch('/songs.json')
              .then(response => response.json())
              .then(data => {
                  console.log('Fetched data:', data); 
                  setCards(data.cards); 
              })
              .catch(error => console.error('Error fetching cards:', error));
      }, []);

    const handleDurationChange = (event) => {
        setDuration(event.target.value);
    };

    return (

       
     <>
     <div className="player-div">
        <img src="/player.png" alt="" />
     </div>
      <div className='cards'>
  
        
                {cards.map((card, index) => (
                    <div  key={index}>
                       
                        <div >
                            <h2 >{card.title}</h2>
                            <p >{card.text}</p>
                        </div>
                           <input
                type="range"
                id="duration"
                name="duration"
                min="0"
                max={card.duration}
                value={card.duration}
                step="1"
                onChange={handleDurationChange}
            />
             <p >{card.duration}</p>

             <div>
                <ul className="player-ul">
                    <li><IoPlayBackSharp /></li>
                    <li><IoCaretBackSharp /></li>
                    <li><FaPlayCircle/></li>
                    <li><IoCaretForwardSharp /></li>
                    <li><IoPlayForwardSharp /></li>
                </ul>
             </div>
                    </div>
                    
                ))}
       
        </div>
     </>
    );
}