import './Nav.css';
import { Link } from 'react-router-dom';
// o Link não causa recarregamento da pagina

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/animesToWatch">
                <i className="fa fa-tv"></i> Animes para ver
            </Link>
            <Link to="/animesWatched">
                <i className="fa fa-check"></i> Animes assistidos
            </Link>
        </nav>
    </aside>

export default Nav;