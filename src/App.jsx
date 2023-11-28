import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./Pages/Inicio";
import CrearEmpresa from "./Pages/CrearEmpresa";
import FortaleceTuEmpresa from "./Pages/FortaleceTuEmpresa";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./Pages/Login";



const App = () => {
  return (
    <>
      <Header></Header>
      
      <Routes>
        <Route element={<Inicio />} path="/"> </Route>
        <Route element={<CrearEmpresa />} path="/CrearEmpresa"></Route>
        <Route element={<FortaleceTuEmpresa />} path="/FortaleceTuEmpresa"></Route>
        <Route element={<Login />} path="/login"></Route>


      </Routes>
      <Footer></Footer>
    </>
  )
}
export default App;