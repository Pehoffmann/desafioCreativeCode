import React, { useState, useEffect } from "react";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidemenu from "../components/Sidemenu";
import "../App.css";

const Searcher = () => {
  const [userInput, setUserInput] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://api.github.com/users/example");
      setUser(response.data);
    };
    getData();
  }, []);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userInput}`
      );
      setUser(response.data);
    } catch (error) {
      alert("Usuário não encontrado!");
    }
  };
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        <a href="/dashboard" className="header___title">
          <i class="fa fa-github" aria-hidden="true"></i>
          Github searcher
        </a>
      </header>
      {showNav && <Sidemenu />}
      <div className="search">
        <form className="d-flex" id="form-header" onSubmit={handleSubmit}>
          <input
            id="form-header-input"
            className="form-control mr-2"
            type="search"
            name="searchValue"
            placeholder="Usuário do Github"
            aria-label="Usuário do Github"
            required
            onChange={handleSearch}
          />
          <button className="btn btn-outline-success">Buscar</button>
        </form>
      </div>
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
    </div>
  );
};

export default Searcher;
