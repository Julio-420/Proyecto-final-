import { Link } from "react-router-dom";

const Navbar = () => { 
    return(
        <>
     <nav className=" navbar bg border-bottom border-body "
            data-bs-theme="">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                       
                            
                    </a>
                </div>
            </nav>
            <div className="container mb-2">

                <Link className="btn btn-outline-primary" to="/">Inicio</Link>
                <Link className="btn btn-outline-primary" to="/crearEmpresa">blog</Link>
                <Link className="btn btn-outline-primary" to="/fortaleceTuEmpresa">blog2</Link>
               


                
            </div>
        </nav>
     



    
        </>
    )
 }  
 export default Navbar;