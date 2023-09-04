import logo from "../assets/react.svg";
import "../styles/Logo.css"

function Logo() {
  return (
    <>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </>
  );
}

export default Logo
