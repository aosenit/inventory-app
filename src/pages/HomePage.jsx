import React from "react";
import "./HomePage.css";
import LoginPage from "./LoginPage";
import CreateUser from "./createUser/CreateUser";

const HomePage = ({ isLogin = true }) => {
  return (
    <div className="home">
      <div className="homeTexts">
        <div className="homeRoutes">
          {isLogin ? <LoginPage /> : <CreateUser />}
        </div>
      </div>

      <div className="backCover"></div>
    </div>
  );
};

export default HomePage;
