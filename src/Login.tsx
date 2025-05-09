import logoIcon from "./assets/logo-icon.svg";
import fb from "./assets/fb.png";
import { FaUser, FaLock } from "react-icons/fa";

function Login() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img className="logo-icon" src={logoIcon} alt="e-belle" />
        <h1>Entrar</h1>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="usuario@email.com"
            type="text"
            name="username"
          />
          <FaUser className="icon" />
        </div>
        <div className="input-wrapper">
          <input
            className="input"
            placeholder="********"
            type="password"
            name="password"
          />
          <FaLock className="icon" /> <br />
        </div>
        <div className="login-wrapper">
          <div>
            <input type="checkbox" />
            <label className="login-remember">Lembrar-me</label>
          </div>
          <button className="button-login" onClick={handleClick} type="submit">
            Entrar
          </button>
        </div>
        <div className="divider"></div>
        <img src={fb} onClick={handleClick} />
        <div className="login-wrapper">
          <p className="login-link" onClick={handleClick}>
            Esqueci minha senha
          </p>
          <p className="login-link" onClick={handleClick}>
            Quero me cadastrar
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
