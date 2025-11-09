import { Link } from "react-router-dom";
import { useState } from "react";
import WarningIcon from '@mui/icons-material/Warning';
import DangerousIcon from '@mui/icons-material/Dangerous';

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== "" && password !== "") {
      window.location = "/menu/tableau-de-bord"
      setWarning("");
      setError("");
    } else {
        setWarning("Remplir tous les champs");
    }
  }

  return (
    <div>
      <form action="" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Link>Mot de passse oublié ?</Link>
        </div>
        <div>
          {warning && <div className="warning"><WarningIcon />{warning}</div>}
          {error && <div className="error"><DangerousIcon />{error}</div>}
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default FormLogin;
