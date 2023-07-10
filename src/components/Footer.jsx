import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "50px",
        marginBottom: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      <p>&copy; Luigi Di Fraia</p>
      <a
        href="https://www.linkedin.com/in/luigi-di-fraia-full-stack-developer/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <FaLinkedin size={20} color="white" />
      </a>
      <a
        href="https://github.com/Luigi160397"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginLeft: "10px", marginRight: "10px" }}
      >
        <FaGithub size={20} color="white" />
      </a>
    </div>
  );
};

export default Footer;
