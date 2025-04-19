import { Rectangle } from "recharts";

/**
 * Curseur personnalisé pour les graphiques en ligne.
 *
 * Affiche un effet visuel lors du survol des données dans un graphique (ligne verticale semi-transparente).
 * Ne s'affiche que si les coordonnées de points sont disponibles.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {Array} props.points - Coordonnées des points du graphique
 * @param {number} props.width - Largeur du curseur
 * @param {number} props.height - Hauteur du graphique
 *
 * @returns {JSX.Element|null} Élément JSX du curseur ou null si aucune donnée.
 */

const CustomCursor = ({ points, width, height }) => {
  if (!points || points.length === 0) return null;
  const { x } = points[0];
  return (
    <Rectangle
      x={x}
      y={0}
      width={width}
      height={height * 2}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

export default CustomCursor;
