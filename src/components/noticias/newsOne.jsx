import React from 'react';
import './../../css/noticias/one.css';
import NavBar from './../NavBar';
import manzana from '../../assets/noticiasImages/manzanas.jpg';
import newOne from '../../assets/noticiasImages/content-news/newOne.png';
import newTwo from '../../assets/noticiasImages/content-news/newTwo.png';
import newThree from '../../assets/noticiasImages/content-news/newThree.png';


class NewsOne extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div className="News" autoCapitalize> 
        <NavBar />
        <div></div>
        <main className="imagen-news">
            <img src={manzana} alt=""/>
        </main>
        <section className="text-info">
            <div></div>
            <div className="titulo-news">
                <h1>Cómo la inteligencia artificial nos ayuda a contar manzanas</h1>
            </div>
            <div className="content-news">
                <p>
                    Para satisfacer las necesidades alimentarias de una población mundial creciente, será necesario optimizar la producción agrícola, incrementando la eficiencia, calidad y sostenibilidad de las plantaciones.

                    Si queremos alcanzar estos objetivos en fruticultura, deberemos ser capaces de conocer la cantidad de frutas de cada árbol para predecir la cosecha y para saber cuáles tienen menor producción.

                    Contar el número de manzanas producidas por cada árbol en una plantación agrícola puede ser una tarea inviable si se hace de forma manual. Los últimos avances en sensores y en inteligencia artificial nos dan la posibilidad de escanear las plantaciones frutícolas y detectar los frutos de forma automatizada.
                </p>
                <img src={newOne} alt=""/>
                <p>Los sensores que empleamos
                    A lo largo del tiempo, se han utilizado distintos sensores 2D y 3D. Los más populares son las cámaras fotográficas digitales. Estas permiten adquirir imágenes de cada árbol y detectar los frutos mediante el uso de algoritmos de visión artificial basados en color, forma o textura.

                    La principal desventaja de estos dispositivos es su sensibilidad a las condiciones de iluminación: sombras, reflejos o imágenes a contraluz.

                    Otros sensores 2D, como cámaras multiespectrales, hiperespectrales y térmicas, permiten explorar otras bandas del espectro electromagnético, como la infrarroja o la ultravioleta. Su uso es menor debido a su elevado coste económico.
                </p>
                <img src={newTwo} alt=""/>
                <p>
                    Con la evolución de la fotónica se han introducido en este campo los sensores 3D. Con ellos se puede escanear la plantación y obtener modelos tridimensionales de cada árbol, permitiendo la detección y la posterior localización de los frutos.

                    Los sensores 3D más utilizados son las cámaras RGB-D, que permiten generar modelos 3D con información a color. Según su principio de funcionamiento se pueden clasificar como estereoscópicas, de luz estructurada o de tiempo de vuelo (en inglés ToF, time-of-flight).

                    Otra técnica similar a la estereoscopía es la Structure-from-Motion, capaz de modelar objetos en 3D a partir de un conjunto de imágenes 2D adquiridas desde diferentes puntos de vista.

                    Recientemente, también se ha estudiado el uso de sensores LiDAR basados en el principio de tiempo de vuelo. Combinados con un sistema de posición GNSS (como los GPS), permiten el escaneo 3D de las plantaciones.

                    Además, estos sensores miden la cantidad de luz infrarroja reflejada por los objetos escaneados. Esta capacidad radiométrica ha sido utilizada para poder detectar manzanas, ya que estas presentan valores de reflectividad superiores a los elementos de su entorno (hojas, ramas y troncos).

                    El papel de los algoritmos
                    Tradicionalmente, los algoritmos de visión artificial se han basado en características como el color, textura, forma o intensidad. Así permiten diferenciar los frutos respecto el entorno en imágenes 2D o en nubes de puntos 3D.

                    Recientemente, los avances en inteligencia artificial han supuesto un progreso notable en el campo de la visión por ordenador y, en consecuencia, en la detección remota de frutos.

                    Con la introducció  n de algoritmos de aprendizaje automático (en inglés machine learning), se han desarrollado sistemas capaces de detectar más del 90 % de los frutos.

                    Los algoritmos de aprendizaje automático utilizados para la detección de frutos se basan en redes neuronales artificiales de detección de objetos y de segmentación.

                    Como se observa en la figura que sigue a estos párrafos, las redes neuronales de detección de objetos nos indican en qué regiones de una imagen se localizan los frutos, mientras que las de segmentación realizan esta localización píxel a píxel.

                    En una región donde hay una manzana parcialmente oculta por una hoja, la red neuronal de segmentación nos indicará qué píxeles son manzana y cuáles no.
                </p>
                <img src={newThree} alt=""/>
                <p>
                    En el siguiente enlace se observan los resultados de un sistema de detección basado en la combinación de redes neuronales de segmentación y modelos 3D generados con técnicas de Structure-from-Motion.

                    Aplicaciones de esta tecnología
                    Las principales aplicaciones de los sistemas de detección de frutos son las que siguen:

                    La predicción de cosecha permite al agricultor planificar mejor la campaña de recolección, el almacenamiento y las estrategias comerciales.

                    El mapeo de la producción ayuda al agricultor a encontrar las áreas menos productivas de la plantación, descubrir las razones de esta menor producción y proponer soluciones.

                    La detección de frutos y los sistemas de localización 3D también se están empezando a utilizar en el desarrollo de robots de recolección.

                    Actualmente estamos asistiendo al desarrollo de sensores fotónicos con mejores prestaciones, cada vez más económicos y miniaturizados. Esto hace prever que, si bien a día de hoy los sistemas de detección de fruta están aún en fase de investigación, en un futuro no muy lejano serán una realidad en nuestros campos.
                </p>

            </div>
        </section>
      </div>
    );
  }
}

export default NewsOne;
