import "./App.css";

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
    </>
  );
}

export default App;
