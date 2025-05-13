import logoIcon from "./assets/logo-icon.svg";
// import { useNavigate } from "react-router";
import Footer from "./components/Footer";
import {
  FaBoxOpen,
  FaChartLine,
  FaUsers,
  FaExclamationTriangle,
  FaCalendarCheck,
  FaTags,
  FaPercent,
  FaMoneyBill,
} from "react-icons/fa";

function Register() {
  // const navigate = useNavigate();
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="register-container">
        <div className="register-content">
          <img className="logo-icon" src={logoIcon} alt="e-belle" />
          <h1 className="uppercase">Cadastrar empresa</h1>
        </div>

        <div className="columns">
          <div className="column image-column">
            <div className="image-background"></div>
          </div>

          <div className="column">
            <div className="alert-box">
              <FaExclamationTriangle className="alert-icon" />
              <p>
                Se você é um profissional de uma empresa que já utiliza o
                e-belle, <a href="./login">clique aqui para entrar</a>
              </p>
            </div>

            <div className="block">
              <h2>Funcionalidades</h2>
              <ul className="features-list">
                <li>
                  <FaCalendarCheck className="feature-list-icon" /> Agenda
                  Completa
                </li>
                <li>
                  <FaChartLine className="feature-list-icon" /> Fluxo de Caixa
                </li>
                <li>
                  <FaTags className="feature-list-icon" /> Promoções
                </li>
                <li>
                  <FaBoxOpen className="feature-list-icon" /> Controle de
                  Estoque
                </li>
                <li>
                  <FaPercent className="feature-list-icon" /> Comissão
                </li>
                <li>
                  <FaUsers className="feature-list-icon" /> Clientes
                </li>
                <li>
                  <FaMoneyBill className="feature-list-icon" /> Reduza Custos
                </li>
              </ul>
            </div>
            <div className="form">
              <div className="field">
                <label className="label">Nome da empresa</label>
                <input
                  className="input"
                  placeholder="Ex: Studio Bella"
                  type="text"
                  name="username"
                />
              </div>
              <div className="field">
                <label className="label">Telefone</label>
                <input
                  className="input"
                  placeholder="(31) 91234-5678"
                  type="text"
                  name="username"
                />
              </div>
              <div className="field">
                <label className="label">Nome do responsável</label>
                <input
                  className="input"
                  placeholder="Ex: Ana Souza"
                  type="text"
                  name="username"
                />
              </div>
              <div className="field">
                <label className="label">E-mail</label>
                <input
                  className="input"
                  placeholder="seuemail@exemplo.com"
                  type="text"
                  name="username"
                />
              </div>
              <div className="forgot-wrapper">
                <button
                  className="button-login"
                  onClick={handleClick}
                  type="submit"
                >
                  Começar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Register;
