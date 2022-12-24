import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Animes from '../pages/Animes';
import Series from '../pages/Series';
import Filmes from '../pages/Filmes';

export default props =>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/animes' element={<Animes />}/>
        <Route path='/series' element={<Series />}/>
        <Route path='/filmes' element={<Filmes />}/>
        <Route path='*' element={<Home />}/>
    </Routes>