import { useEffect, useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import "./score.css";

/**
 * Composant graphique : diagramme circulaire du score utilisateur.
 *
 * Représente visuellement la progression de l’utilisateur vers son objectif
 * sous forme de graphique en secteurs. Le score est exprimé en pourcentage.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {number} props.score - Valeur du score (comprise entre 0 et 1)
 *
 * @returns {JSX.Element} Affichage circulaire du taux de progression.
 */

const PieChartComponent = ({ score }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { name: "Achieved", value: score, color: '#ff0101' },
      { name: "Remaining", value: 1 - score, color: 'transparent' },
    ]);
  }, []);
  return (
    <>
      <div className="score-chart text-gray-900">
        <h2 className="text-base font-semibold z-10 absolute ml-5 mt-4 size-3.5">Score</h2>
        <div className="score-center">
          <p className="score-percentage">{`${Math.round(score * 100)}%`}</p>
          <p className="score-label">
            de votre
            <br />
            objectif
          </p>
        </div>
        <ResponsiveContainer width="100%" height={263}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
              paddingAngle={5}
              cornerRadius={10}
            >
              {data.map((elm, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={elm.color}
                  stroke={elm.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PieChartComponent;
