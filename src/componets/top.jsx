import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import '../style/header.scss'; 
import Page from "./Featuredtext";
import Featuredtext from "./Featuredtext";
import Featuredheader from "./Featured-header";

export default function Top() {



    return (
        <>

         
         <Featuredheader/>
            <Featuredtext />
        </>
    );
}