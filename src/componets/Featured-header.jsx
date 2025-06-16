import { Link, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

export default function Featuredheader() {
    const { page } = useParams(); 

    return (
        <>
            <header>
                <ul className="header-ul">
                    <li><Link to={`/`}><FaArrowLeft /></Link></li>
                    <li><Link to={`/Explore`}>{page}</Link></li>
                    <li><Link to={`/front-page`}><FaSearch /></Link></li>
                </ul>
            </header>
            <h2 className="General-heading">{page}</h2> 
        </>
    );
}
