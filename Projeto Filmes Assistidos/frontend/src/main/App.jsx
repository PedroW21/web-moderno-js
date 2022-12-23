import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../components/templates/Logo/Logo';
import Nav from '../components/templates/Nav/Nav';
import Footer from '../components/templates/Footer/Footer';
import Routes from './Routes';

import { BrowserRouter } from 'react-router-dom';

const App = props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Routes />
            <Nav />
            <Footer />
        </div>
    </BrowserRouter>
export default App;