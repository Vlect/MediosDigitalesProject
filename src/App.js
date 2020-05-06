import React from 'react';
import logo from './logo.svg';
import './App.css';
import banner from './assets/18296.jpg'; 
import c1 from './assets/caracteristics-ai/c1.png';
import c2 from './assets/caracteristics-ai/c2.png';
import c3 from './assets/caracteristics-ai/c3.png';
import c4 from './assets/caracteristics-ai/c4.png';
function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h1>AI</h1>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </div>
      <main>
        <img src={banner}/>
      </main>
      <section className="caracteristics-ai">
        <div className="caracteristics-block">
          <div className="image-caracteristics">
            <img src={c1}/>
          </div>
          <div className="caracteristics-block-info">
            <h1>ADAPTACIÓN</h1>
            <p>
            La rapidez del cambio tecnológico no se 
            detiene por lo que será crucial que las 
            empresas tengan la capacidad de adaptarse. 
            </p>
            <button>Ver Más</button>
          </div>
        </div>
        <div className="caracteristics-block">
          <div className="image-caracteristics">
            <img src={c2}/>
          </div>
          <div className="caracteristics-block-info">
            <h1>INTEGRACIÓN</h1>
            <p>
            La tecnología de inteligencia artificial así 
            como el IoT ya tienen un impacto bastante importante 
            en la manera en la que se hacen negocios 
            </p>
            <button>Ver Más</button>
          </div>
        </div>
        <div className="caracteristics-block">
          <div className="image-caracteristics">
            <img src={c3}/>
          </div>
          <div className="caracteristics-block-info">
            <h1>SEGURIDAD</h1>
            <p>
            Nos estamos desplazando a una era en donde la 
            información y los datos son un asunto delicado y 
            la seguridad y la transparencia serán aspectos 
            mucho más importantes para los viajeros 
            </p>
            <button>Ver Más</button>
          </div>
        </div>
        <div className="caracteristics-block">
          <div className="image-caracteristics">
            <img src={c4}/>
          </div>
          <div className="caracteristics-block-info">
            <h1>SOSTENIBILIDAD</h1>
            <p>
            Ya estamos viendo un crecimiento en las 
            expectativas de la tecnología de IA.
            </p>
            <button>Ver Más</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
