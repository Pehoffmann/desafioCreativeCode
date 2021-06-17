import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidemenu from "../components/Sidemenu";
import "../App.css";

const Perfiladm = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.github.com/users/Pehoffmann"
      );
      setUser(response.data);
    };
    getData();
  }, []);

  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        <a href="/dashboard" className="header___title">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github searcher
        </a>
      </header>
      {showNav && <Sidemenu />}
      <h1 className="title___adm">Perfil do administrador</h1>
      <div>
        <div className="card">
          <img src={user.avatar_url} className="card-img-top" alt="Carregando!" />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.login}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{user.followers} Seguidores</li>
            <li className="list-group-item">{user.following} Seguindo</li>
            <li className="list-group-item">
              {user.public_repos} Repositórios
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Perfiladm;
