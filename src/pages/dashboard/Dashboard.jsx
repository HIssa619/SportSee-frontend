import { useState, useEffect } from "react";
import userService from "../../services/userService";

import BarChartComponent from "../../components/bar-chart/BarChartComponent";
import LineChartComponent from "../../components/line-chart/LineChartComponent";
import RadarChartComponent from "../../components/radarChartComponent/RadarChartComponent";
import KeyDataComponent from "../../components/key-data/KeyDataComponent";
import PieChartComponent from "../../components/pie-chart/PieChartComponent";

const Dashboard = () => {
  const userId = 18;
  const [user, setUser] = useState(null);
  const [userActivities, setUserActivities] = useState(null);
  const [userSessions, setUserSessions] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [error, setError] = useState(null); // ✅ Ajout de l’état d’erreur

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userData = await userService.fetchUserData(userId);
        setUser(userData);
      } catch (err) {
        setError("Impossible de charger les informations de l'utilisateur.");
      }
    };

    const getUserActivity = async () => {
      try {
        const userActivityData = await userService.fetchUserActivity(userId);
        setUserActivities(userActivityData);
      } catch (err) {
        setError("Erreur lors du chargement des activités.");
      }
    };

    const getUserSessions = async () => {
      try {
        const userSessionsData = await userService.fetchUserSessions(userId);
        setUserSessions(userSessionsData.sessions);
      } catch (err) {
        setError("Erreur lors du chargement des sessions moyennes.");
      }
    };

    const getUserPerformance = async () => {
      try {
        const userPerformanceData = await userService.fetchUserPerformance(userId);
        setUserPerformance(userPerformanceData);
      } catch (err) {
        setError("Erreur lors du chargement des performances.");
      }
    };

    getUserDetails();
    getUserActivity();
    getUserSessions();
    getUserPerformance();
  }, [userId]);

  // ✅ Affiche une erreur s’il y en a une
  if (error) {
    return (
      <main className="w-full m-[55px] max-w-[1126px] text-red-600 text-xl">
        <h1>{error}</h1>
      </main>
    );
  }

  if (user) {
    return (
      <main className="w-full m-[50px] mb-auto  max-w-[1126px] pb-12">
        <h1 className="text-5xl font-bold mb-8">
          Bonjour <span className="text-red-500">{user.userInfos.firstName}</span>
        </h1>
        <p className="congratulation">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className="flex flex-col xl:flex-row mt-10 gap-10">
          <div className="w-full xl:w-3/4">
            <div className="bg-lightgray pb-10 pt-4 rounded-md">
              {userActivities && (
                <BarChartComponent activities={userActivities} />
              )}
            </div>
            <div className="flex mt-8 gap-6">
              <div className="w-1/3">
                {userSessions && <LineChartComponent sessions={userSessions} />}
              </div>
              <div className="w-1/3">
                {userPerformance && (
                  <RadarChartComponent userPerformance={userPerformance} />
                )}
              </div>
              <div className="w-1/3 bg-lightgray rounded-md">
                {user.score && <PieChartComponent score={user.score} />}
              </div>
            </div>
          </div>
          <aside className="flex-wrap w-full xl:w-1/4 flex flex-row xl:flex-col justify-between">
            {user.keyData && <KeyDataComponent keyData={user.keyData} />}
          </aside>
        </div>
      </main>
    );
  } else {
    return (
      <main className="w-full m-[55px] mb-auto ml-[100px] max-w-[1126px]">
        <h1>Chargement...</h1>
      </main>
    );
  }
};

export default Dashboard;
