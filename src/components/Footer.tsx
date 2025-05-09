import logoFooter from "../assets/logoFooter.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo e-belle" className="footer-logo" />
      <p>&copy; 2025 Vilarika. Todos os direitos reservados.</p>
    </footer>
  );
}
export default Footer;
