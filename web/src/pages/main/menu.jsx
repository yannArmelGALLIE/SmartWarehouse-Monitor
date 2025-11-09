import logo from "../../assets/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SensorsIcon from "@mui/icons-material/Sensors";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ConstructionIcon from "@mui/icons-material/Construction";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Menu = () => {
  const [activePage, setActivePage] = useState("tableau-de-bord");

  const menuItems = [
    {
      id: "tableau-de-bord",
      icon: <DashboardIcon />,
      label: "Tableau de bord",
    },
    { id: "entrepots", icon: <WarehouseIcon />, label: "Entrepôts" },
    { id: "capteurs", icon: <SensorsIcon />, label: "Capteurs" },
    { id: "analyses", icon: <QueryStatsIcon />, label: "Analyses" },
    { id: "entretien", icon: <ConstructionIcon />, label: "Entretien" },
    { id: "alertes", icon: <NotificationImportantIcon />, label: "Alertes" },
    { id: "rapports", icon: <AssessmentIcon />, label: "Rapports" },
    { id: "parametres", icon: <SettingsIcon />, label: "Paramètres" },
  ];

  useEffect(() => {
    const path = location.pathname.split("/")[2];
    if (path) setActivePage(path);
  }, [location]);

  return (
    <div className="menu">
      <div>
        <div>
          <img src={logo} />
        </div>
        <div>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={activePage === item.id ? "active" : ""}
            >
              <Link
                to={`/menu/${item.id}`}
                onClick={(e) => setActivePage(item.id)}
              >
                {item.icon} {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Outlet />{}
      </div>
    </div>
  );
};

export default Menu;
