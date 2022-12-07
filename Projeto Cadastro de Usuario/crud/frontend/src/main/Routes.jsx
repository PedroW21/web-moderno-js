import { Route, Routes } from "react-router-dom";
import Home from '../components/home/Home';
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Home />} /> 
        <Route />
        {/* qualquer coisa que esta fora de nossas rotas, seria direcionado para o home */}
    </Routes>
