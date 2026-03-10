import "./Login.css";

function Login() {
  return (
    <div className="loginContainer">

      <section className="login">

        <h2 className="login__titulo">Iniciar Sesion</h2>

        <form className="login__form">
          <label>Usuario</label>
          <input type="text" placeholder="Ingresa tu usuario" />

          <label>Contraseña</label>
          <input type="password" placeholder="Ingresa tu contraseña" />

          <button className="login__btn login__btn--acceder">
            Acceder
          </button>
        </form>

      </section>

    </div>
  );
}

export default Login;