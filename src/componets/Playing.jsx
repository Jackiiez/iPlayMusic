import { Link, useNavigate, useParams } from 'react-router-dom'; 

import '../style/category.scss'; 
import '../style/playing.scss'; 

import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import FeaturedHeader from './Featured-header';
import Navigation from './navigation';
import Categories from './Categories-dropdown';
import Player from './Player';

export default function Playing() {
 


    return (
        <>
        <FeaturedHeader defaultTitle="Music" defaultText="Playing" />
       <Player/>
        </>
    );
}