import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = props =>
    <aside className='menu-area'>
        <nav>
            <Link to="/">
                <i className='fa fa-home'></i> Home
            </Link>
            <Link to="/filmes">
                <i className='fa fa-film'></i> Filmes
            </Link>
            <Link to="/series">
                <i className='fa fa-diamond'></i> Series
            </Link>
            <Link to="/animes">
                <i className="fa fa-tv"></i> Animes
            </Link>
        </nav>
    </aside>

export default Nav;