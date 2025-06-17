import { RiMovie2Line, RiSignalTowerFill } from "react-icons/ri";
import { CiBookmark, CiSearch } from "react-icons/ci";
import { Link } from "react-router";
import { MdPerson } from "react-icons/md";
import { IoIosMicrophone, IoIosSettings, IoMdHome } from "react-icons/io";
import '../style/footer.scss'; 
import { IoRadio } from "react-icons/io5";
import { LuAudioLines } from "react-icons/lu";
import { TbPercentage50 } from "react-icons/tb";
export default function Navigation() {



    return (
        <>

            <footer className="footer">
                <ul>
                    <li> <Link to={`/categories`}><LuAudioLines /></Link></li>
                    <li> <Link to={`/featured`}><IoIosMicrophone /></Link></li>
                    <li><Link to={`/playing`}><RiSignalTowerFill /></Link></li>
                    <li><Link to={`/playlists`}><TbPercentage50 /></Link></li>
                      <li><Link to={`/settings`}><IoIosSettings /></Link></li>

                </ul>
            </footer>
        </>
    );
}