import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="" id="" />
        </div>
        <div>
          <Link>Mot de passse oublié ?</Link>
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default FormLogin;
