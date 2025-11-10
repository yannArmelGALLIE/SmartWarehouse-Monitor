import ThermostatIcon from "@mui/icons-material/Thermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import SensorsIcon from "@mui/icons-material/Sensors";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import WarehouseIcon from "@mui/icons-material/Warehouse";

const TableauDeBord = () => {
  const items = [
    {
      id: "temperature",
      icon: <ThermostatIcon />,
      title: "Température moyenne",
      value: "22,5",
      unit: "°C",
      diff: -2,
    },
    {
      id: "humidite",
      icon: <WaterDropIcon />,
      title: "Humidité moyenne",
      value: "65",
      unit: "%",
      diff: 2,
    },
    {
      id: "presence",
      icon: <AccessibilityIcon />,
      title: "Présence détectée moyenne",
      value: "3",
      unit: "zones",
      diff: -2,
    },
    {
      id: "capteurs",
      icon: <SensorsIcon />,
      title: "Capteurs actifs",
      value: "22",
      unit: "/24",
      diff: 2,
    },
  ];

  const entrepots = [
    {
      id: "a",
      name: "Entrepôt A",
      temperature: "23",
      humidity: "65",
      presence: "Oui",
      status: "Normal",
    },
    {
      id: "b",
      name: "Entrepôt B",
      temperature: "23",
      humidity: "65",
      presence: "Non",
      status: "Attention",
    },
    {
      id: "c",
      name: "Entrepôt C",
      temperature: "23",
      humidity: "65",
      presence: "Oui",
      status: "Normal",
    },
    {
      id: "d",
      name: "Entrepôt D",
      temperature: "23",
      humidity: "65",
      presence: "Non",
      status: "Critique",
    },
  ];

  return (
    <div className="tableau-de-bord">
      <div>
        {items.map((item) => (
          <div key={item.id}>
            <div>
              <div>{item.icon}</div>
              {item.diff < 0 ? (
                <p>
                  <ArrowDownwardIcon style={{ color: "#ef4444" }} /> {item.diff}
                  %
                </p>
              ) : (
                <p>
                  <ArrowUpwardIcon style={{ color: "#22c55e" }} /> {item.diff}%
                </p>
              )}
            </div>
            <div>
              <p>{item.title}</p>
              <p>
                <span>{item.value}</span> {item.unit}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div>
          <h2>Etats des entrepôts</h2>
          <div>
            {entrepots.map((entrepot) => (
              <div>
                <div>
                  <div>
                    <WarehouseIcon />
                  </div>
                  <div>
                    <p>{entrepot.name}</p>
                    <div>
                      <div>{entrepot.temperature}°C</div> <div>{entrepot.humidity}%</div> <div>Présence:{" "}
                      {entrepot.presence}</div>
                    </div>
                  </div>
                </div>
                <div style={{ backgroundColor: entrepot.status === "Normal" ? "rgba(34, 197, 94, 0.4)" : entrepot.status === "Attention" ? "rgba(250, 204, 21, 0.4)" : "rgba(239, 68, 68, 0.4)" }}>
                    {entrepot.status}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default TableauDeBord;
