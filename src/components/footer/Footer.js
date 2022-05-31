import './Footer.css';
import edificio from "../footer/bx-building 1.svg"
function Footer() {
    return (
        //Características del componente
        <footer>
            <div className="box-footer row justify-content-between">
                <div className="col-12 col-md-3 col-xl-2">
                    <div className="text-center m-2">
                        <img src={edificio}></img>
                        <h3 className="text-center m-2">Sedes</h3>
                        <p className="text-center m-2">Sede Kenndey <br />
                            Sede Suba <br />
                            Sede Fontibón <br />
                            Sede Centro </p>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-xl-4">
                    <div className="text-center m-2">
                        <img src={edificio}></img>
                        <h3 className="text-center m-2">Sedes</h3>
                        <p className="text-center m-2">Sede Kenndey <br />
                            Sede Suba <br />
                            Sede Fontibón <br />
                            Sede Centro </p>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-xl-2">
                    <div className="text-center m-2">
                        <img src={edificio}></img>
                        <h3 className="text-center m-2">Sedes</h3>
                        <p className="text-center m-2">Sede Kenndey <br />
                            Sede Suba <br />
                            Sede Fontibón <br />
                            Sede Centro </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;


