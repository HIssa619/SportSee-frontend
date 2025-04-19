import React from "react";
import SideBar from "./components/side-bar/SideBar";
import Header from "./components/header/Header";
import Navigation from "./navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

/**
 * Composant racine de l'application.
 * Intègre l’en-tête, la barre latérale et le système de navigation,
 * le tout encapsulé dans un routeur pour gérer les changements de pages.
 *
 * @returns {JSX.Element} Structure principale de l’interface utilisateur.
 */

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="body flex flex-row h-full">
        <SideBar />
        <Navigation />
      </div>
    </BrowserRouter>
  );
};

export default App;
