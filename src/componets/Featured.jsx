import { useEffect, useState } from "react";
import '../style/featured.scss'; 
export default function Featured() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/featured.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data); 
                setCards(data.cards); 
            })
            .catch(error => console.error('Error fetching cards:', error));
    }, []);

    return (
        <div className='cards'>
  
           {/* vi henter vores array og giver det et parameter(card) */}
                {cards.map((card, index) => (
                    <div className="card" key={index}>
                        <img className='placeholder' src={card.img} alt={`${card.title} Image`} />
                        <div className="card__div">
                            <h2 className='cardtitle'>{card.title}</h2>
                            <p className='cardtext'>{card.text}</p>
                        </div>
                    </div>
                ))}
       
        </div>
    );
};
