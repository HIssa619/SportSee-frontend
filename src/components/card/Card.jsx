import React from "react";
import { Link } from "react-router-dom";

/**
 * Composant visuel de type "carte".
 *
 * Affiche une icône ou une image cliquable redirigeant vers une autre section de l’application.
 *
 * @component
 * @param {Object} props - Propriétés du composant
 * @param {string} props.image - Chemin vers l’image à afficher
 * @param {string} props.link - URL de redirection associée
 *
 * @returns {JSX.Element} Élément interactif représentant un raccourci.
 */

const Card = ({ image, link }) => {
  return (
    <>
      <Link to={link}>
        <div className="flex justify-center items-center bg-white w-[64px] h-[64px]
         rounded-md ">
          <img src={image} alt="Shortcut" />
        </div>
      </Link>
    </>
  );
};

export default Card;
