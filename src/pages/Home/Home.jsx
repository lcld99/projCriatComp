import React, { useState, Component, useMemo } from "react";
import ReactPlayer from 'react-player'
import Select from 'react-select'
import "./style.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [content, setContent] = useState("");
  const googleColabUrl = "https://colab.research.google.com/drive/15Vvh8AYFG4ncD5OpiHdzM0XIwE2HaDeN#scrollTo=8uZ5OhHVfjug";
  const [outputImageUrl, setOutputImageUrl] = useState("");
  const [start, setStart] = useState("");
  const [duration, setDuration] = useState("");
  const [speed_fpm, setSpeed_fpm] = useState("");
  const [pulse_react, setPulse_react] = useState("");
  const [pulse_percussive, setPulse_percussive] = useState(true);
  const [pulse_harmonic, setPulse_harmonic] = useState(false);
  const [motion_react, setMotion_react] = useState("");
  const [motion_percussive, setMotion_percussive] = useState(false);
  const [motion_harmonic, setMotion_harmonic] = useState(true);
  const [selectedFile, setSelectedFile] = useState();
  const [videoFile, setVideoFile] = useState("");
  const [style, setSelectedStyle] = useState(null);
  const [isLoading, setIsLoading] = useState();
  const result = useMemo(() => {
    if (isLoading) {
      return <div className="loading-text">Loading...</div>;
    }else if(!isLoading && videoFile){
      return <video src={`https://drive.google.com/uc?export=download&id=${videoFile}`} type='video/mp4' controls></video>;
    }else{
      return null
    }
  }, [isLoading, videoFile]);
  const options = [{ value: 'abstract photos', label: 'abstract photos' }, { value: 'wikiart faces', label: 'wikiart faces' }, { value: 'pokemon', label: 'pokemon' }, { value: 'anime portraits', label: 'anime portraits' }, { value: 'church', label: 'church' }, { value: 'fireworks', label: 'fireworks' }, { value: 'figure drawings', label: 'figure drawings' }, { value: 'my little pony', label: 'my little pony' }, { value: 'abstract art', label: 'abstract art' }, { value: 'ukiyoe faces', label: 'ukiyoe faces' }, { value: 'microscope images', label: 'microscope images' }, { value: 'cat', label: 'cat' }, { value: 'maps', label: 'maps' }, { value: 'panda', label: 'panda' }, { value: 'doors', label: 'doors' }, { value: 'obama', label: 'obama' }, { value: 'butterflies', label: 'butterflies' }, { value: 'grumpy cat', label: 'grumpy cat' }, { value: 'modern art', label: 'modern art' }, { value: 'fursona', label: 'fursona' }, { value: 'floor plans', label: 'floor plans' }, { value: 'ukiyo-e faces', label: 'ukiyo-e faces' }, { value: 'anime faces', label: 'anime faces' }, { value: 'imagenet', label: 'imagenet' }, { value: 'wikiart', label: 'wikiart' }, { value: 'celeba hq faces', label: 'celeba hq faces' }, { value: 'painting faces', label: 'painting faces' }, { value: 'lsun cats', label: 'lsun cats' }, { value: 'wildlife', label: 'wildlife' }]

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
          `${url}/generate_image/?song=${selectedFile.name}&style=${style.label}&start=${start}&duration=${duration}&speed_fpm=${speed_fpm}&pulse_react=${pulse_react}&pulse_percussive=${pulse_percussive}&pulse_harmonic=${pulse_harmonic}&motion_react=${motion_react}&motion_percussive=${motion_percussive}`
        ).then((response) => {
          response.text().then(res => {
            //console.log(res);
            setVideoFile(res);
          })
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
        <div style={{ border: "1px solid" }}>
          <div>
            <h2>Primeiro Passo:</h2>
            <br />
            <span style={{ color: "blue" }}>
              Clique no link para o collab e siga as instruções informadas la para a geração do seu video.
            </span>
          </div>
          <br />
          <button onClick={() => { window.open('https://colab.research.google.com/drive/12adkRTQ-EAtFBo-wWZkBpUAQ3b6zcoPL?authuser=1#scrollTo=iY0B2IfVuVkR', "_blank") }}>Entrar no Colab</button>
          <br />
          <br />
          <div>
            <h3>Colocar link do ngrok gerado no collab</h3>
          </div>
          <input
            type="text"
            onChange={(event) => {
              let temp = event.target.value.substring(4)
              setUrl("https" + temp)
              event.preventDefault();
            }
            }
            value={url}
          ></input>
          <br />
          <br />
        </div>
        <br />
        <div style={{ border: "1px solid" }}>
          <br />
          <div>
            <h3>Selecionar um arquivo .mp3</h3>
          </div>
          <input
            type="file"
            name="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            style={{ padding: "10px", width: "fit-content" }}
          ></input>
          <br />
          <br />
        </div>
        <br />
        <div style={{ border: "1px solid" }}>
          <br />
          <div>
            <h3 style={{ textAlign: "center" }}>Parâmetros:</h3>
            <br />
            <span style={{ color: "blue" }}>
              Passe o Mouse por cima dos campos para saber o que eles significam para a geração do seu video, e a entrada default, que corresponde também ao seu tipo:
            </span>
          </div>
          <br />
          <div class="parameters">
            <div style={{ border: "1px solid red" }}>
              <br />
              <label>Escolha a biblioteca de arte em que o video será gerado:</label>
              <br />
              <Select options={options} value={style}
                onChange={setSelectedStyle} style={{ width: "300px" }} />
              <br />
            </div>
            <br />
            <div style={{ border: "1px solid red" }}>
              <div>
                <label for="start" title=" (Default: 0) - Starting timestamp in seconds.">Start Time</label>
                <input
                  type="text"
                  id="start"
                  onChange={(event) => setStart(event.target.value)}
                  value={start}
                ></input>
              </div>
              <div>
                <label for="duration" title=" (Default: 2) - Video duration in seconds.">Duration</label>
                <input
                  type="text"
                  id="duration"
                  onChange={(event) => setDuration(event.target.value)}
                  value={duration}
                ></input>
              </div>
              <div>
                <label for="speed_fpm" title="(Default: 12) - FPM stands for 'Frames per Minute'. This determines how many images are initialized - the more there are, the faster the visuals morph. If speed_fpm=0, then only one image is initialized, and that single image reacts to the audio. In this case, there will be no motion during silent parts of the audio.">Speed FPM</label>
                <input
                  type="text"
                  id="speed_fpm"
                  onChange={(event) => setSpeed_fpm(event.target.value)}
                  value={speed_fpm}
                ></input>
              </div>
            </div>
            <br />
            <div style={{ border: "1px solid red" }}>
              <div>
                <label for="pulse_react" title="(Default: 0.5) - The ‘strength’ of the pulse. It is recommended to keep this between 0 and 2. 
">Pulse React</label>
                <input
                  type="text"
                  id="pulse_react"
                  onChange={(event) => setPulse_react(event.target.value)}
                  value={pulse_react}
                ></input>
              </div>
              <div style={{ display: "flex" }}>
                <label for="pulse_percussive" title="(Default: True) - If True while 'pulse_harmonic' is False, pulse
reacts to the audio's percussive elements.
">Pulse Percussive</label>
                <input
                  type="checkbox"
                  defaultChecked={pulse_percussive}
                  id="pulse_percussive"
                  onChange={() => setPulse_percussive(!pulse_percussive)}
                  value={pulse_percussive}
                ></input>
              </div>
              <div style={{ display: "flex" }} title="(Default: False) - If True while 'pulse_percussive' is False, pulse
reacts to the audio's harmonic elements">
                <label for="pulse_harmonic">Pulse Harmonic</label>
                <input
                  type="checkbox"
                  defaultChecked={pulse_harmonic}
                  id="pulse_harmonic"
                  onChange={() => setPulse_harmonic(!pulse_harmonic)}
                  value={pulse_harmonic}
                ></input>
              </div>
              <div style={{ margin: "10px", marginBottom: "10px" }}>
                <label >Obs.: Harmonic and Percussive cannot be true at the same time</label>
              </div>
            </div>
            <br />
            <div style={{ border: "1px solid red" }}>
              <div>
                <label for="motion_react" title="(Default: 0.5)">Motion React</label>
                <input
                  type="text"
                  id="motion_react"
                  onChange={(event) => setMotion_react(event.target.value)}
                  value={motion_react}
                ></input>
              </div>
              <div style={{ display: "flex" }}>
                <label for="motion_percussive" title="(Default: False)">Motion Percussive</label>
                <input
                  type="checkbox"
                  defaultChecked={motion_percussive}
                  id="motion_percussive"
                  onChange={() => setMotion_percussive(!motion_percussive)}
                  value={motion_percussive}
                ></input>
              </div>
              <div style={{ display: "flex" }}>
                <label for="motion_harmonic" title="(Default: True)">Motion Harmonic</label>
                <input
                  type="checkbox"
                  defaultChecked={motion_harmonic}
                  id="motion_harmonic"
                  onChange={() => setMotion_harmonic(!motion_harmonic)}
                  value={motion_harmonic}
                ></input>
              </div>
              <div style={{ margin: "10px", marginBottom: "10px" }}>
                <label >Obs.: Simply the "motion" equivalents of the pulse parameters above.
                </label>
              </div>
            </div>
          </div>
          <br />
          <button onClick={(e) => {
            e.preventDefault();
            setIsLoading(true);
            upload()
          }
          }>Gerar Video</button>
          <br />
          <br />
        </div>
        <section className="white-card">
          {result}
        </section>
      </div>
    </div>
  );
};

//{videoFile ? <video src={`https://drive.google.com/uc?export=download&id=${videoFile}`} type='video/mp4' controls></video> : null}
export default Home;
