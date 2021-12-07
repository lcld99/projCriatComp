import React, { useState } from "react";

import "./style.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");

  return (
    <div class="body-page">
      <div class="container">
        <div>
          <h2>Tutorial</h2>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </span>
        </div>
        <button onClick={() => {}}>Entrar no Colab</button>
        
        <div>
          <h3>Colocar link do ngrok</h3>
          <span>
            Aqui, colocar o link do ngrok.
          </span>
        </div>
        <input
          type="text"
          onChange={(event) => setUrl(event.target.value)}
          value={url}
        ></input>

        <div>
          <h3>Fazer Upload do arquivo .mp3</h3>
          <span>
            Fazer a conexão com a API do Drive e colocar campo de upload de
            arquivo. Após upload do arquivo, pegar a url e enviar para o colab
          </span>
        </div>
        <input
          type="text"
          onChange={(event) => setUrl(event.target.value)}
          value={url}
        ></input>

        <div>
          <span>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </span>
        </div>
        <div class="parameters">
          <h3 style={{ textAlign: "center" }}>Parâmetros:</h3>
          <input
            type="text"
            onChange={(event) => setUrl(event.target.value)}
            value={url}
          ></input>
          <input
            type="text"
            onChange={(event) => setUrl(event.target.value)}
            value={url}
          ></input>
          <input
            type="text"
            onChange={(event) => setUrl(event.target.value)}
            value={url}
          ></input>
        </div>
        <button onClick={() => {}}>Enviar</button>
      </div>
    </div>
  );
};

export default Home;
