import logoIcon from "./assets/logo-icon.svg";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router";
import Footer from "./components/Footer";

function ForgotPassword() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img className="logo-icon" src={logoIcon} alt="e-belle" />
          <h1 className="uppercase">Entrar</h1>
          <div className="input-wrapper">
            <input
              className="input"
              placeholder="usuario@email.com"
              type="text"
              name="username"
            />
            <FaUser className="icon" />
          </div>
          <div className="forgot-wrapper">
            <button
              className="button-login"
              onClick={handleClick}
              type="submit"
            >
              Enviar
            </button>
          </div>
          <div className="divider"></div>
          <div className="align-left">
            <p className="login-link" onClick={() => navigate("/ebelle/login")}>
              Voltar para login
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ForgotPassword;
