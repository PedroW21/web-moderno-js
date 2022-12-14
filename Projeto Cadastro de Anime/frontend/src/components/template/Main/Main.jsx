import './Main.css';
import Header from '../Header/Header';

const Main = props =>
    <>
        <Header {...props} /> {/* as props serão passadas ao header */}
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>

export default Main;
