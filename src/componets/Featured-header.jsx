import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';

export default function FeaturedHeader({ defaultTitle }) {
    const { page } = useParams(); 
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const displayedTitle = page || defaultTitle;

    return (
        <>
            <header>
                <ul className="header-ul">
                    <li>
                        <Link to={`/`}>
                            <FaArrowLeft onClick={goBack} className="back-button" />
                        </Link>
                    </li>
                    <li>
                        <Link to={`/`}>{displayedTitle}</Link>
                    </li>
                    <li>
                        <Link to={`/front-page`}><FaSearch /></Link>
                    </li>
                </ul>
            </header>
            <h2 className="general-heading">{displayedTitle}</h2> 
        </>
    );
}


