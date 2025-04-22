import axios from "axios";
import mockedData from "../mock/mockedData.json";

/**
 * Point de base pour les requêtes vers l’API.
 * @type {string}
 */
const API_BASE_URL = "http://localhost:3000";

// Indique si les données doivent provenir du mock ou du backend réel
const IS_MOCK = import.meta.env.VITE_IS_MOCK === "true";

/**
 * Récupère les données principales de l'utilisateur (score, nom, etc.).
 *
 * @async
 * @param {*} userId - Identifiant de l’utilisateur
 * @returns {Promise<Object>} Informations de base de l’utilisateur
 */
const fetchUserData = async (userId) => {
  // Si IS_MOCK est désactivé, on interroge l’API ; sinon on retourne les données simulées
  if (!IS_MOCK) {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
    const userData = response.data.data;
    userData.score = userData.todayScore ?? userData.score;
    return userData;
  } else {
    mockedData.UserInformation[0].score =
      mockedData.UserInformation[0].todayScore;
    return mockedData.UserInformation[0];
  }
};

/**
 * Récupère les données d’activité de l’utilisateur (ex : calories brûlées).
 *
 * @async
 * @param {*} userId - Identifiant de l’utilisateur
 * @returns {Promise<Object>} Données d'activité
 */
const fetchUserActivity = async (userId) => {
  if (!IS_MOCK) {
    const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
    return response.data.data;
  } else {
    return mockedData.UserActivity[0];
  }
};

/**
 * Récupère les sessions moyennes de l'utilisateur (entraînement, suivi…).
 *
 * @async
 * @param {*} userId - Identifiant de l’utilisateur
 * @returns {Promise<Object>} Liste des sessions
 */
const fetchUserSessions = async (userId) => {
  if (!IS_MOCK) {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/average-sessions`
    );
    return response.data.data;
  } else {
    return mockedData.UserAverageSessions[0];
  }
};

/**
 * Récupère les statistiques de performance de l'utilisateur (force, vitesse, etc.).
 *
 * @async
 * @param {*} userId - Identifiant de l’utilisateur
 * @returns {Promise<Object>} Données de performance
 */
const fetchUserPerformance = async (userId) => {
  if (!IS_MOCK) {
    const response = await axios.get(
      `${API_BASE_URL}/user/${userId}/performance`
    );
    return response.data.data;
  } else {
    return mockedData.UserPerformance[0];
  }
};

// Export des fonctions de récupération des données utilisateur
export default {
  fetchUserData,
  fetchUserActivity,
  fetchUserPerformance,
  fetchUserSessions,
};


/**
 *  else {
  const user = mockedData.UserInformation.find((u) => u.id === userId);
  user.score = user.todayScore ?? user.score;
  return user;
}



return mockedData.UserActivity.find((activity) => activity.userId === userId);



return mockedData.UserAverageSessions.find((session) => session.userId === userId);

return mockedData.UserPerformance.find((perf) => perf.userId === userId);

 */