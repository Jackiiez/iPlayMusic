import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import '../style/header.scss'; 
import Page from "./Featuredtext";
import Featuredtext from "./Featuredtext";

export default function Top() {



    return (
        <>

         
            <header>
                <ul className="header-ul">
                    <li> <Link to={`/`}><FaArrowLeft /></Link></li>
                    <li> <Link to={`/Explore`}>Current placeholder</Link></li>
                    <li><Link to={`/front-page`}><FaSearch /></Link></li>
                   
          

                </ul>
            </header>
            <Featuredtext />
        </>
    );
}