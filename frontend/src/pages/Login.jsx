import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    email && senha === "admin"
      ? history.push("/dashboard")
      : alert("Ops... Você não é administrador!");
  };

  return (
    <>
      <section className="formularios">
        <div className="signInAdmin">
          <div className="titleAdminLogin">
            <h2>Login do administrador</h2>
          </div>
          <div className="bodyFormAdmin">
            <form>
              <div className="form-row">
                <div className="form-group col-md-9">
                  <label for="inputLogin">EMAIL:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLogin"
                    name="inputLogin"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword">SENHA:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    name="inputPassword"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  ></input>
                </div>
              </div>
              <div id="formLoginAdm">
                <button className="btnsAdmin" onClick={handleSubmit}>
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
