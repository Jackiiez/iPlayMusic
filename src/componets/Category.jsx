import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import '../style/category.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import FeaturedHeader from './Featured-header';
import Navigation from './navigation';
import Categories from './Categories-dropdown';

export default function Category() {
 


    return (
        <>
        <FeaturedHeader defaultTitle="Categories" defaultText="Categories" />
        <Categories/>
                    <Navigation/>
        </>
    );
}