import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../pages/authentication/login";
import Menu from "../pages/main/menu";
import TableauDeBord from "../pages/main/contents/TableauDeBord";
import Entrepots from "../pages/main/contents/Entrepots";
import Capteurs from "../pages/main/contents/Capteurs";
import Analyses from "../pages/main/contents/Analyses";
import Entretien from "../pages/main/contents/Entretien";
import Alertes from "../pages/main/contents/Alertes";
import Rapports from "../pages/main/contents/Rapports";
import Parametres from "../pages/main/contents/Parametres";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="tableau-de-bord" element={<TableauDeBord />} />
          <Route path="entrepots" element={<Entrepots />} />
          <Route path="capteurs" element={<Capteurs />} />
          <Route path="analyses" element={<Alertes />} />
          <Route path="entretien" element={<Entretien />} />
          <Route path="alertes" element={<Alertes />} />
          <Route path="rapports" element={<Rapports />} />
          <Route path="parametres" element={<Parametres />} />
        </Route>
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
