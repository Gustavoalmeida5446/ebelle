import "./App.css";
import { FaCalendar } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
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
            <button className="button button-primary">Cadastrar empresa</button>
            <button className="button button-secondary">Entrar</button>
          </div>
        </div>
      </div>
      <div>
        <section className="info-section">
          <div className="info-grid">
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
            <div className="info-box">Box 2</div>
            <div className="info-box">Box 3</div>
            <div className="info-box">Box 4</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
