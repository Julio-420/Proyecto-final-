import logito from "../assets/images.png"
const Login = () => { 
    return(
        <>
        <form className="flex flex-col px-96">
    <img className="mb-4 flex justify-center" src={logito} alt="" width="72" height="57"/>
    <h1 className="h3 mb-3 fw-normal">Ingreso</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
      <label for="floatingInput">Email </label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
      <label for="floatingPassword">contraseña </label>
    </div>

    <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault">
        Recordar 
      </label>
    </div>
    <button className="btn btn- w-100 py-2 bg-green-400" type="submit">Entrar </button>
    <p className="mt-5 mb-3 text-body-secondary">© 2023</p>
  </form>
        </>
    )
 }
 export default Login;