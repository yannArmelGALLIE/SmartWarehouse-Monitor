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
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge, { badgeClasses } from "@mui/material/Badge";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import profil from "../../assets/profil.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const Menu = () => {
  const [activePage, setActivePage] = useState("tableau-de-bord");
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  const showProfil = () => {
    setVisible(!visible);
  };

  const showNotifications = () => {
    setIsVisible(!isVisible);
  }

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
        <div>
          <div>
            <h1>Surveillance des Entrepôts</h1>
          </div>
          <div>
            <div>
              <IconButton onClick={showNotifications}>
                <NotificationsIcon style={{ color: "white", fontSize: 35 }} />
                <CartBadge
                  badgeContent={2}
                  overlap="circular"
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#ef4444",
                      color: "white",
                    },
                  }}
                />
              </IconButton>
            </div>
            {isVisible && <div className={isVisible === true ? "" : "hidden"}>
              <p>Notifications</p>
              <div></div>
              <div>
                <div>
                  <div>
                    <WarningAmberIcon style={{ color: "#fff59d" }} />
                  </div>
                  <div>
                    <p>Maintenance programmée - Capteur #22</p>
                    <p>Il y a 12 min</p>
                  </div>
                </div>
                <div>
                  <div>
                    <WarningAmberIcon style={{ color: "#fff59d" }} />
                  </div>
                  <div>
                    <p>Maintenance programmée - Capteur #22</p>
                    <p>Il y a 12 min</p>
                  </div>
                </div>
              </div>
            </div>}
          </div>
          <div>
            <button onClick={showProfil}>
              <div>
                <img src={profil} />
              </div>
              <div>
                <p>GALLIE Koffi Yann-Armel</p>
                <p>Administrateur</p>
              </div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </button>
            {visible && (
              <div className={visible === true ? "" : "hidden"}>
                <Link>
                  <PersonIcon />
                  <p>Profil</p>
                </Link>
                <Link>
                  <LogoutIcon />
                  <p>Déconnexion</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div>
          <Outlet />
          {}
        </div>
      </div>
    </div>
  );
};

export default Menu;
