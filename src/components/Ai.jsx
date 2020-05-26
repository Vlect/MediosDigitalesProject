import React from 'react';
import NavBar from './NavBar';
import './../css/Ai.css';

//Images
import Main from './../assets/17208.jpg';
import One from './../assets/Ai/1.jpg';
import Two from './../assets/Ai/2.jpg';
import Three from './../assets/Ai/3.jpg';
import Four from './../assets/Ai/4.jpg';
import Five from './../assets/Ai/5.jpg';
import Six from './../assets/Ai/6.jpg';
import Seven from './../assets/Ai/7.jpg';

export default class Ai extends React.Component{
    
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        return(
            <div>
                <NavBar />
                <div className="content">
                    <div className="main">
                        <img src={Main} alt=""/>
                        <div className="main-btn">
                            <button></button>
                        </div>
                    </div>
                    <div className="content-info">
                        <div className="content-info-block">
                            <div className="content-info-img">
                                <img src={One} alt=""/>
                            </div>
                            <div className="content-info-text">
                                <h1>Inteligencia Artificial</h1>
                                <p>
                                    Apuesto que al escuchar el término <strong>“Inteligencia Artificial”</strong>,<br/>
                                    pueden venir a la mente muchos pensamientos acerca de robots que conquistan al mundo <br/>
                                    y destruyendo todo a su paso o si te gusta el campo de la tecnología,<br/>
                                    sabes un poco sobre el tema y has investigado, pensaras en IBM Watson, etc… <br/>
                                </p>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-imgIz">
                                <img src={Two} alt=""/>
                            </div>
                           <div className="content-info-textDe">
                                <h1>¿Qué es inteligencia artificial?</h1>
                                <p>
                                    Antes de meternos en profundidad sobre lo que en realidad es la inteligencia artificial, <br/> 
                                    podemos empezar definiendo algo muy simple. La Inteligencia,
                                    es esa capacidad que todos los humanos tenemos para razonar y 
                                    lograr resolver un problema o dificultad. Primero coleccionamos  
                                    información acerca de nuestro contexto, por medio del análisis o la 
                                    experiencia; hasta llegar a una solución. <br/><br/>

                                    Al trasladar todo esto llamado inteligencia a una máquina, 
                                    la cual necesita una colección de datos al igual que nosotros los humanos; 
                                    con ellos, logrará obtener resultados bastante aproximados, 
                                    optimizar procesos; y justo aquí es cuando sabemos que tenemos 
                                    en frente a la increíble <strong>inteligencia artificial</strong>.<br/><br/>

                                    <span>La inteligencia artificial se puede definir en dos tipos:</span> <br/> 
                                    <strong>Inteligencia artificial débil</strong> e <strong>inteligencia artificial fuerte</strong>.  
                                    La débil corresponde a la realización de tareas en particular, 
                                     como chats de servicio al cliente, asistentes en los teléfonos inteligentes, etc.  
                                     La fuerte, por otro lado, corresponde a capacidades que podrían acercarse a  
                                     las que nosotros los humanos poseemos y a realizar tareas que no resultan ser  
                                     del mismo ambiente en la que fue programada y así cumplirlas. <br/>

                                </p>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-img">
                                <img src={Three} alt=""/>
                            </div>
                           <div className="content-info-text">
                                <h1>En la inteligencia artificial tenemos diferentes tipos, como:</h1>
                                <ul>
                                    <li>
                                        <strong>Inteligencias Reactivas</strong>: Esta es la forma más básica de inteligencia <br/>
                                        artificial. Están completamente diseñadas para realizar una tarea en <br/>
                                        específico y no poseen una memoria para almacenar datos y resolver <br/>
                                        problemas diferentes a su ambiente anteriormente programado. <br/>

                                    </li>
                                    <li>
                                        <strong>Inteligencia de memoria limitada</strong>: Estas son capaces de almacenar datos,<br/>
                                        analizarlos o procesarlos, tomar decisiones en base a ellos y repetir este <br/>
                                         bucle tantas veces como pueda. <br/>
                                    </li>
                                    <li>
                                        <strong>Inteligencia Autoconscientes</strong>: Este tipo de inteligencias ya no solo son <br/>
                                        conscientes de sí mismas y de sus características o estados, sino también <br/>
                                        podría percibir, analizar y comprender los sentimientos de otras personas. <br/>
                                        Todo esto por medio de inferencias previamente programadas. <br/>
                                    </li>
                                    <li>
                                        <strong>Inteligencias con teoría de la mente</strong>: Este es un concepto que describe la <br/>
                                        capacidad de algo o alguien, que puede tener completa conciencia sobre el <br/>
                                        punto de vista de él mismo y el de los demás. <br/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-imgIz">
                                <img src={Four} alt=""/>
                            </div>
                           <div className="content-info-textDe">
                                <h1>¿Dónde se utiliza la inteligencia artificial?</h1>
                                <h4>Hoy en día puedes aprender a aplicar inteligencia artificial en múltiples campos cómo:</h4><br/><br/>
                                <ol>
                                    <li>
                                        <strong>Salud</strong>: Dentro de los hospitales es utilizada para la dosificación de <br/>
                                        medicamentos a través de cálculos matemáticos para determinar cantidades precisas.
                                    </li>
                                    <li>
                                        <strong>Automóviles</strong>: Los vehículos autónomos incorporan sistemas de frenado, <br/>
                                        aceleración, cambio de carril, navegación y prevención de colisiones <br/>
                                        que son controlados por una inteligencia artificial. <br/>
                                    </li>
                                    <li>
                                        <strong>Finanzas</strong>: A través de algoritmos específicos se pueden identificar cambios <br/> 
                                        inesperados para detección de fraude, mantener o retirar inversiones en la <br/>
                                        bolsa para optimizar resultados en el comercio de acciones. <br/>
                                    </li>
                                    <li>
                                        <strong>Videojuegos</strong>: Es implementada de forma constante y rutinaria, por ejemplo <br/> 
                                        para dar comportamientos a NPCs (personajes no-jugables). <br/>
                                    </li>
                                    <li>
                                        <strong>Publicidad</strong>: Al implementar modelos estadísticos que analizan la actividad <br/> 
                                        online de las personas se pueden crear buyer personas de forma <br/>
                                        automatizada y ahorrar costos en segmentación de anuncios que se <br/>
                                        adaptan a audiencias específicas. <br/>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-img">
                                <img src={Five} alt=""/>
                            </div>
                           <div className="content-info-text">
                                <h1>¿Qué necesito saber para desarrollar inteligencias artificiales?</h1>
                                <p>
                                    Aprender a diseñar, programar y mantener proyectos de inteligencia tiene una 
                                    curva de aprendizaje que puede ser muy amplia, pues requiere de conocimientos 
                                    avanzados en programación y matemáticas.
                                </p>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-imgIz">
                                <img src={Six} alt=""/>
                            </div>
                           <div className="content-info-textDe">
                                <h1>Primeros pasos</h1>
                                <p>
                                    El primer paso es aprender un lenguaje de programación, donde <strong>Python</strong> es el <br/>
                                    más popular para estos fines, al contar con diversas librerías especializadas en <br/> 
                                    esta área. Algunas alternativas son <strong>R</strong>, <strong>Java</strong> y <strong>Lisp</strong>. Sin importar el lenguaje que <br/>
                                    elijas, deberás dominar el análisis y diseño de algoritmos, entender los <br/>
                                    fundamentos de la programación estructurada y programación orientada a objetos. <br/>
                                    Durante tu aprendizaje debes conocer muy bien el lenguaje que estás manejando, <br/>
                                    su sintaxis y estructura. Para lo cual es recomendable al inicio de tu proceso, no <br/>
                                    usar, en la medida de lo posible, funciones ni librerías que simplifiquen procesos, <br/>
                                    esta recomendación es con la finalidad de comprender cada parte de los <br/>
                                    problemas que estás resolviendo y su lógica. <br/>
                                </p>
                            </div>
                        </div>
                        <div className="content-info-block">
                            <div className="content-info-img">
                                <img src={Seven} alt=""/>
                            </div>
                           <div className="content-info-text">
                                <h1>El rol de las Matemáticas</h1>
                                <p>
                                    <strong>Las matemáticas</strong> son parte crucial en la resolución de problemas aplicando <br/>
                                    inteligencia artificial. Contar con conocimientos de <strong>álgebra, probabilidad y</strong> <br/>
                                    <strong>estadística</strong>, resolución de ecuaciones de más de una variable, matemáticas <br/>
                                    discretas, integración, derivación y manejo de matrices será indispensable para <br/>
                                    encontrar relaciones matemáticas en problemas cotidianos que puedan ser <br/>
                                    interpretados por una computadora.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}