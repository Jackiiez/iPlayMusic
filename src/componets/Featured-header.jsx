import { Link, useNavigate, useParams } from 'react-router-dom'; 
import '../style/header.scss'; 
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
//vi giver FeaturedHeader 2 parameter
export default function FeaturedHeader({ defaultTitle,defaultText }) {
    const { page } = useParams(); 
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    //page "featured" som står i vores search params og vis vi bruger den her i et andet componet med de
    //  samme parameter så ka vi definere hvad der ska stå på den nye page da den ik checker params i det nye componet
    const displayedTitle = page || defaultTitle;
      const displayedText = page || defaultText;

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
            <h2 className="general-heading">{displayedText}</h2> 
        </>
    );
}


