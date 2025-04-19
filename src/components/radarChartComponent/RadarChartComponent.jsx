import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Correspondance entre les identifiants numériques et les types d’activités physiques.
 *
 * @type {Object.<number, string>}
 */

const kinds = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
}

/**
 * Composant graphique : radar des performances.
 *
 * Affiche un graphique en toile d’araignée représentant les différents axes de performance d’un utilisateur,
 * tels que l’endurance, la vitesse ou la force. Les valeurs sont mappées avec des libellés explicites via un objet de correspondance.
 *
 * @component
 * @param {Object} props - Propriétés passées au composant
 * @param {Object} props.userPerformance - Données détaillées des performances utilisateur
 *
 * @returns {JSX.Element} Visualisation radar des capacités physiques.
 */

const RadarChartComponent = ({ userPerformance }) => {
  // Ajoute les libellés textuels aux types de performance à partir de leurs identifiants
  const formattedData = userPerformance.data.map((item) => ({
    ...item,
    kind: kinds[item.kind],
  }));

  return (
    <ResponsiveContainer width="100%" height={263}>
      <RadarChart
          margin={{
            right: 30,
            left: 30,
          }}
      outerRadius="60%"
        data={formattedData}
        style={{ backgroundColor: "#282D30", borderRadius: "6px" }}
      >
        <PolarGrid  gridType="polygon" radialLines={false} stroke="#ffff" />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 11, fill: '#ffffff'}} />

        <Radar
          name="Performance"
          dataKey="value"
          fill="#FF0101"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
