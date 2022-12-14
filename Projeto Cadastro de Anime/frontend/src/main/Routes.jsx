import {Routes, Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import AnimesCrud from '../components/Animes/AnimesCrud';
import AnimesWatched from '../components/Animes/AnimesWatched';

//exact na linha 10 é para dizer que somente se for / ele ira pro componente, se fosse /algumaCoisa não funcionaria
//Ex: se eu colocasse exact em /animesToWatch
// qualquer coisa q eu colocasse depois (.../1) não funcionaria, não iria para o componente

const RoutesApp = props => 
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/animesToWatch' element={<AnimesCrud />}/>
        <Route exact path='/animesWatched' element={<AnimesWatched />}/>
        <Route exact path='*' element={<Home />}/>
    </Routes>

export default RoutesApp;