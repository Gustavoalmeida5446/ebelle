import logoFooter from "../assets/logoFooter.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <img
        src={logoFooter}
        alt="Logo e-belle"
        className="footer-logo"
        onClick={() => navigate("/ebelle")}
      />
      <p>
        &copy; 2025{" "}
        <a
          style={{ color: "var(--white)" }}
          href="http://vilarika.com.br/"
          target="_blank"
        >
          Vilarika
        </a>
        . Todos os direitos reservados.
      </p>
    </footer>
  );
}
export default Footer;
