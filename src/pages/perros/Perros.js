import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {getAll} from "../../components/perros/perros";
import Razas from "../../components/perros/Razas"
import './Perros.css';

function Perros(){
    const perros=getAll()
return(
    <div>
        <Header />
        <Navbar />
        <div className="container"> 
        <h2 class="tittle-section text-center my-4">Lista de Perros</h2>
        <div className="row  row-cols-1 row-cols-md-3 g-4">
            {
                perros.map(p=>(
                    <Razas p1={p.id}
                    p2={p.thumbnail}
                    p3={p.raza}
                    p4={p.descripcion}
                    p5={p.acercade}
                    p6={p.imagen}
                    p7={p.pais}
                    p8={p.vida}
                    p9={p.tamaño}/>
                ))
            }
        </div>
        </div>
        <Footer />
    </div>
    )
}

export default Perros;
