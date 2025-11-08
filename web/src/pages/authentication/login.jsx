import Carousel from "../widgets/Carousel";
import slide1 from "../../assets/slide_1.png";
import slide2 from "../../assets/slide_2.png";
import slide3 from "../../assets/slide_3.png";
import logo from "../../assets/logo.png"
import FormLogin from "../widgets/FormLogin";

const Login = () => {
  const slides = [
    { img: slide1, label: "Surveillance environnementale en temps réel" },
    { img: slide2, label: "Transmission et supervision via la 5G" },
    { img: slide3, label: "Analyse prédictive et maintenance intelligente" },
  ];

  return (
    <div className="login-page">
      <div className="login-main">
          <Carousel slides={slides} />
        <div>
            <div>
                <img src={logo} />
            </div>
            <div>
                <h2>Bienvenue à nouveau !</h2>
                <h3>Connectez-vous pour accéder à votre tableau de bord.</h3>
                <FormLogin />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
