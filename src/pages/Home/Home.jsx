import React, { useState } from "react";

import "./style.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const googleColabUrl = "https://colab.research.google.com/drive/15Vvh8AYFG4ncD5OpiHdzM0XIwE2HaDeN#scrollTo=8uZ5OhHVfjug";
  const [outputImageUrl, setOutputImageUrl] = useState("");
  const [speed_fpm, setSpeed_fpm] = useState("");
  const [pulse_react, setPulse_react] = useState("");
  const [pulse_percussive, setPulse_percussive] = useState(true);
  const [pulse_harmonic, setPulse_harmonic] = useState(false);
  const [motion_react, setMotion_react] = useState("");
  const [motion_percussive, setMotion_percussive] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(true);
  
  /*function generateImage_and_getImageUrl() {
    const fetchApi = async () => {
      const response = await fetch(
        `${url}/generate_image/?speed_fpm=${speed_fpm}&pulse_react=${pulse_react}&pulse_percussive=${pulse_percussive}&pulse_harmonic=${pulse_harmonic}&motion_react=${motion_react}&motion_percussive=${motion_percussive}`
      ).then((response) => {
        setOutputImageUrl(response.url);
        setIsLoading(false);
      });
    };
    fetchApi();
  }*/

  

  function upload() {
    const fetchUp = async () => {
      let form = new FormData();
      form.append("file", selectedFile);
      const response = await fetch(`${url}/upload_mp3/`, {
        method: 'POST',
        body: form
      })
      const fetchApi = async () => {
        const response = await fetch(
          `${url}/generate_image/?speed_fpm=${speed_fpm}&pulse_react=${pulse_react}&pulse_percussive=${pulse_percussive}&pulse_harmonic=${pulse_harmonic}&motion_react=${motion_react}&motion_percussive=${motion_percussive}`
        ).then((response) => {
          console.log(response.url);
          setOutputImageUrl(response.url);
          setIsLoading(false);
        });
      };
      fetchApi();
    };
    fetchUp();
    
  }

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
          onChange={(event) => {
            setUrl(event.target.value)
            event.preventDefault();
            }
          }
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
          type="file"
          name="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
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
          <div>
          <label for="speed_fpm">Speed FPM</label>
              <input
                type="text"
                id = "speed_fpm"
                onChange={(event) => setSpeed_fpm(event.target.value)}
                value={speed_fpm}
              ></input>
          </div>
          <div>
            <label for="pulse_react">Pulse React</label>
            <input
              type="text"
              id = "pulse_react"
              onChange={(event) => setPulse_react(event.target.value)}
              value={pulse_react}
            ></input>
          </div>
          <div>
            <label for="pulse_percussive">Pulse Percussive</label>
            <input
              type="text"
              id = "pulse_percussive"
              onChange={(event) => setPulse_percussive(event.target.value)}
              value={pulse_percussive}
            ></input>
          </div>
          <div>
            <label for="pulse_harmonic">Pulse Harmonic</label>
            <input
              type="text"
              id = "pulse_harmonic"
              onChange={(event) => setPulse_harmonic(event.target.value)}
              value={pulse_harmonic}
            ></input>
          </div>
          <div>
            <label for="motion_react">Motion React</label>
            <input
              type="text"
              id = "motion_react"
              onChange={(event) => setMotion_react(event.target.value)}
              value={motion_react}
            ></input>
          </div>
          <div>
            <label for="motion_percussive">Motion Percussive</label>
            <input
              type="text"
              id = "motion_percussive"
              onChange={(event) => setMotion_percussive(event.target.value)}
              value={motion_percussive}
            ></input>
          </div>
        </div>
        <button onClick={(e) => {
                  e.preventDefault();
                  setIsLoading(true);
                  upload()
                }
              }>Enviar</button>
      </div>
    </div>
  );
};

export default Home;
