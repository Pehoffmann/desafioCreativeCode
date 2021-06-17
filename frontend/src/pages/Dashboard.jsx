import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidemenu from "../components/Sidemenu";
import "../App.css";

const Dashboard = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        <a href="/dashboard" className="header___title"><i class="fa fa-github" aria-hidden="true"></i>
           Github searcher
        </a>
      </header>
      {showNav && <Sidemenu />}
      <div className="dashboard">
        <h1 className="dashboard___title">Bem vindo de volta administrador!</h1>
        <p className="dashboard___subTitle">
          Para continuar usando nosso Github searcher, acesse nosso sidemenu e
          escolha a página que você deseja visitar!
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
