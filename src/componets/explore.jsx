import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import FeaturedHeader from './Featured-header';
import Navigation from './navigation';

export default function Explore() {
 


    return (
        <>
             <FeaturedHeader defaultTitle="Explore" defaultText="explore" />
               <Navigation/>
        </>
    );
}