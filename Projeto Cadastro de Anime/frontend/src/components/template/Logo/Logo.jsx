import './Logo.css';
import logo from '../../../assets/imgs/anime_logo-no_bg.png';
import { Link } from 'react-router-dom';

const Logo = props => 
    <aside className='logo'>
        <Link to="/" className="logo">
            <img src={logo} alt="Imagem escrito anime com um olho estilizado" />
        </Link>
    </aside>

export default Logo;