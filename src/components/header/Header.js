import './Header.css';
import Logo from './logo.jpg'
function Header(){
    return(
        //Características del componente
        <header>
            <div className="row justify-content-between align-items-center text-center pb-3">
                <div className="header-logo col-12 col-md-4 col-xl-1">
            <img src={Logo}></img>
                </div>
                <div className="header-buttons col-12 col-md-4 col-xl-auto me-2">
                    <a href="src/pages/login.html"><button type="button" className="btn btn-primary"><i className="bi bi-power"></i> Ingresar</button></a>
                    <button type="button" className="btn btn-outline-primary"><i className="bi bi-person-plus-fill"></i> Registrarse</button>
                </div>
            </div>
        </header>
    );
}
export default Header;