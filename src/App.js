import React from 'react';
import logo from './logo.svg';
import './App.css';
import banner from './assets/18296.jpg'; 
import image1 from './../src/assets/noticiasImages/image1.jpg';
import image2 from './../src/assets/noticiasImages/image2.jpg';
import image3 from './../src/assets/noticiasImages/image3.jpg';
import c1 from './assets/caracteristics-ai/c1.png';
import c2 from './assets/caracteristics-ai/c2.png';
import c3 from './assets/caracteristics-ai/c3.png';
import c4 from './assets/caracteristics-ai/c4.png';
import NavBar from './components/NavBar';
import News from './components/News';
import NewsOne from './components/noticias/newsOne';
import newsTwo from './components/noticias/newsOne';
import newsThree from './components/noticias/newsOne';
import newsFour from './components/noticias/newsOne';
import newsFive from './components/noticias/newsOne';


const cambiar = () =>{
  const cambiarC = document.querySelector('.buttonC');
  cambiarC.addEventListener('hover', () => {
    cambiarC.classList.toggle('caracteristics-block-info-active');
  })
}
class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return (
      <div className="App"> 
        <NavBar />
        <main>
          <div id="demo" className="carousel slide" data-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={image3} alt="Los Angeles" width="1100" height="500"/>
                </div>
                <div className="carousel-item">
                <img src={image1} alt="Chicago" width="1100" height="500"/>
                </div>
                <div className="carousel-item">
                <img src={image2} alt="New York" width="1100" height="500"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
          </div>
          <h1>Bienvenido</h1>
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
            </div>
          </div>
        </section>
        <News />  
      </div>
    );
  }
}

export default App;
