import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import '../style/playlist.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import FeaturedHeader from './Featured-header';
import Navigation from './navigation';
import PlaylistScroll from './playlist-scroll';

export default function Playlist() {
 


    return (
        <>
        <div className='wrapper'>
             <FeaturedHeader defaultTitle="Playlists" defaultText="Playlists" />

<PlaylistScroll/>
               <Navigation/></div>
        </>
    );
}