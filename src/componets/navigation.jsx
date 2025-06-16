import { RiMovie2Line } from "react-icons/ri";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { MdPerson } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import '../style/footer.scss'; 
export default function Navigation() {



    return (
        <>

            <footer className="footer">
                <ul>
                    <li> <Link to={`/`}><IoMdHome /></Link></li>
                    <li> <Link to={`/Explore`}><RiMovie2Line /></Link></li>
                    <li><Link to={`/front-page`}><CiBookmark /></Link></li>
                    <li><Link to="/?"><MdPerson /></Link></li>
                      <li><Link to={`/settings`}><MdPerson /></Link></li>

                </ul>
            </footer>
        </>
    );
}