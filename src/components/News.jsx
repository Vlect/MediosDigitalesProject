import React from 'react';
import ReactDOM from 'react-dom';
import './../css/News.css';
import image1 from './../assets/noticiasImages/image1.jpg';
import image2 from './../assets/noticiasImages/image2.jpg';
import image3 from './../assets/noticiasImages/image3.jpg';
import image4 from './../assets/noticiasImages/image4.jpg';
import image5 from './../assets/noticiasImages/image5.jpg';
import NewsOne from './noticias/newsOne';
import NewsTwo from './noticias/newsTwo';
import NewsThree from './noticias/newsThree';
import NewsFour from './noticias/newsFour';
import NewsFive from './noticias/newsFive';


export default function News () {

    const noticias = (id) => {
        if(id == 1){
            ReactDOM.render(<NewsOne />, document.getElementById('root'));
        }else if( id == 2){
            ReactDOM.render(<NewsTwo />, document.getElementById('root'));
        }else if( id == 3){
            ReactDOM.render(<NewsThree />, document.getElementById('root'));
        }else if( id == 4){
            ReactDOM.render(<NewsFour />, document.getElementById('root'));
        }else{
            ReactDOM.render(<NewsFive />, document.getElementById('root'));
        }
    }
    return(
        <div className="news">
            <h1>Noticias Recientes</h1>
            <div className="news-block">
                <img src={image1} alt=""/>
                <div className="news-block-info">
                    <h1>Cómo la inteligencia artificial nos ayuda a contar manzanas</h1>
                    <p>
                        Para satisfacer las necesidades alimentarias de una población mundial creciente, será necesario optimizar la producción agrícola, incrementando la eficiencia, calidad y sostenibilidad de las plantaciones.
                    </p>
                    <button onClick={() => noticias(1)}>Ver más</button>
                </div>
            </div>
            <div className="news-block">
                <img src={image2} alt=""/>
                <div className="news-block-info">
                    <h1>Bienvenido a la era de los seguros interactivos</h1>
                    <p>
                    En las empresas de seguros, el uso de métodos estadísticos y la recolección masiva de datos siempre han formado parte del negocio.
                    </p>
                    <button onClick={() => noticias(2)}>Ver más</button>
                </div>
            </div>
            {/* <div className="news-block">
                <img src={image3} alt=""/>
                <div className="news-block-info">
                    <h1>De las migrañas al cáncer: Inteligencia artificial para diagnosticar enfermedades</h1>
                    <p>
                    ¿Se está aprovechando el potencial de las técnicas de inteligencia artificial en el ámbito de la salud? No lo suficiente. 
                    </p>
                    <button onClick={() => noticias(3)}>Ver más</button>
                </div>
            </div>
            <div className="news-block">
                <img src={image4} alt=""/>
                <div className="news-block-info">
                    <h1>Inteligencia Artificial: En el corazón de la encrucijada</h1>
                    <p>
                    La inteligencia artificial es una etiqueta compleja que tiende a generalizarse para aludir a cualquier capacidad mediante la que las máquinas pueden realizar tareas consideradas propiamente humanas.                    </p>
                    <button onClick={() => noticias(4)}>Ver más</button>
                </div>
            </div>
            <div className="news-block">
                <img src={image5} alt=""/>
                <div className="news-block-info">
                    <h1>Este asistente robótico facilita la vida a personas dependientes y sus cuidadores</h1>
                    <p>
                    El sistema de teleasistencia LARES permite la detección inteligente de emergencias en el hogar. 
                    </p>
                    <button onClick={() => noticias(5)}>Ver más</button>
                </div>
            </div> */}
        </div>
    );
}  