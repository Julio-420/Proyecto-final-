import { Link } from "react-router-dom";
import logito from "../assets/images.png"
const Header = () => { 
    return(
        <>
        <header className="p-3 text-bg-light">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-black text-decoration-none">
         <img src={logito} alt="" width="60px" height="60px" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="#" className="nav-link px-2 text-black" to="/">Home</Link></li>
          <li><Link href="#" className="nav-link px-2 text-black"to="/crearEmpresa">Soluciones</Link></li>
          <li><Link href="#" className="nav-link px-2 text-black"to="/fortaleceTuEmpresa">Sobre Nosotros</Link></li>
        
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-light" placeholder="Buscar..." aria-label="Search"/>
        </form>

        <div className="text-end space-x-3">
          
          <Link className="btn btn- bg-green-400 text-gray-50" to="/Login">Ingresa</Link>
          <button type="button" className="btn btn- bg-blue-400  text-gray-50"> Resgistrate </button>
        </div>
      </div>
    </div>
  </header>
  
        </>
    )
 }
 export default Header;