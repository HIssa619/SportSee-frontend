import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

/**
 * Composant responsable du routage principal.
 *
 * Ce composant associe les chemins définis aux vues correspondantes à l’aide de React Router.
 *
 * @component
 * @returns {JSX.Element} Composant de gestion des routes de l’application.
 */

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Navigation;
