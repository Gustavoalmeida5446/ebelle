import "./App.css";
import { FaBoxOpen, FaCalendar, FaChartLine, FaUsers } from "react-icons/fa";
import phone from "./assets/Free_Hand_Holding_iPhone_16_Pro_Mockup.png";
import Footer from "./components/Footer";
import logo from "./assets/logo-horizontal.svg";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <img className="logo" src={logo} alt="e-belle" />
          <div className="hero-box">
            <h1 className="hero-headline">
              Administre seu negócio de beleza com mais controle, agilidade e
              praticidade.
            </h1>
            <p className="hero-paragraph">
              O e-belle é uma plataforma completa para salões, clínicas e
              estúdios. Gerencie agenda, equipe, produtos e finanças de forma
              online, em um só lugar.
            </p>
            <p className="hero-paragraph">
              <strong>Experimente grátis por 30 dias!</strong>
            </p>
          </div>
          <div className="hero-buttons">
            <button className="button-primary" onClick={handleClick}>
              Cadastrar empresa
            </button>
            <button
              className="button-secondary"
              onClick={() => navigate("./login")}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="info-section">
          <div className="info-box">
            <FaCalendar />
            <h2 className="info-title">Agenda</h2>
            <p className="info-description">
              Mantenha a agenda online, permita que seus clientes façam o
              próprio agendamento, libere o acesso para seus profissionais
              através de smartphones ou tablets, faça agendamentos periódicos,
              controle bloqueios e liberações.
            </p>
          </div>
          <div className="info-box">
            <FaUsers />
            <h2 className="info-title">Parceiros</h2>
            <p className="info-description">
              Gerencie todos os seus parceiros de negócio: clientes,
              profissionais, fornecedores. Conheça suas preferências, acesse o
              histórico completo, acompanhe débitos e créditos, e notifique
              através de e-mail, SMS e/ou redes sociais.
            </p>
          </div>
          <div className="info-box">
            <FaBoxOpen />
            <h2 className="info-title">Produtos e Serviços</h2>
            <p className="info-description">
              Cadastre produtos e serviços, determine preços e comissões
              diferenciadas, gerencie pacotes com várias sessões, controle o
              estoque, defina promoções e convênios, acompanhe a participação de
              cada item ou grupo no faturamento.
            </p>
          </div>
          <div className="info-box">
            <FaChartLine />
            <h2 className="info-title">Financeiro</h2>
            <p className="info-description">
              Programe contas recorrentes, defina formas de pagamento, comissões
              e faturamento. Promova a gestão descomplicada do seu negócio:
              acesse tudo de qualquer lugar, em qualquer dispositivo, a qualquer
              hora, com total segurança.
            </p>
          </div>
        </div>
      </div>
      <div className="plans-section">
        <div className="plans-content">
          <h1 className="plans-headline">
            Administre seu negócio de beleza com mais controle, agilidade e
            praticidade.
          </h1>
          <p className="hero-paragraph">
            O e-belle é uma plataforma completa para salões, clínicas e
            estúdios. Gerencie agenda, equipe, produtos e finanças de forma
            online, em um só lugar.
          </p>
          <button className="button-plans" onClick={handleClick}>
            Cadastrar empresa
          </button>
        </div>
      </div>
      <div className="access-section">
        <div className="access-box">
          <img className="access-image" src={phone} alt="e-belle" />
        </div>
        <div className="access-box">
          <p className="access-paragraph">
            O e-belle é uma solução online, que pode ser acessada de qualquer
            lugar do mundo, através de diversos dispositivos, simplificando a
            gestão do seu negócio. Controle Clientes, Profissionais, Produtos,
            Serviços, Comissões, Convênios, Promoções, Estoque, Fluxo de Caixa,
            e muito mais.
          </p>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
}

export default App;
