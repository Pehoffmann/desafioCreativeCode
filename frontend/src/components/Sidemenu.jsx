import React from "react";
import "../App.css";

const Sidemenu = () => {
  return (
    <div className="sidenav active">
      <ul>
        <li>
          <a href="/perfiladm">
            <i class="fa fa-user" aria-hidden="true"></i> Perfil do admin
          </a>
        </li>
        <li>
          <a href="/searcher">
            <i class="fa fa-search" aria-hidden="true"></i> Buscador de perfis
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-sign-out" aria-hidden="true"></i> Sair
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidemenu;
