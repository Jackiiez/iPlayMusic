   import { Link } from 'react-router';
import '../style/header.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
   
export default function Featuredheader() {
   return(
   <header>
                <ul className="header-ul">
                    <li> <Link to={`/`}><FaArrowLeft /></Link></li>
                    <li> <Link to={`/Explore`}>Featured</Link></li>
                    <li><Link to={`/front-page`}><FaSearch /></Link></li>
                   
          

                </ul>
            </header>)}