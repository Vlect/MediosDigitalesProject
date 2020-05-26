import React from 'react';
import './../../css/noticias/one.css';
import NavBar from './../NavBar';
import manzana from '../../assets/noticiasImages/recursos.jpg';
import newOne from '../../assets/noticiasImages/content-newsTwo/newOne.jpg';
import newTwo from '../../assets/noticiasImages/content-newsTwo/newTwo.jpg';
// import newThree from '../../assets/noticiasImages/content-newsTwo/newThree.jpg';


class NewsTwo extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render(){
    return (
      <div className="News"> 
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
                En las empresas de seguros, el uso de métodos estadísticos y la recolección masiva de datos siempre han formado parte del negocio. Pero ahora pueden extraer información valiosa de fuentes antes imposibles. Todo gracias al análisis de datos avanzando, potenciado por tecnologías como el machine learning, las redes sociales, el cloud computing y los dispositivos inteligentes.
                    <br/>
                    br
                    A la hora de emplear el big data en el negocio asegurador, se pueden recoger, por ejemplo, los siguientes tipos de datos:
                    <br/>
                    <br/>
                    <ul>
                        <li>Datos biométricos que proporcionan las pulseras inteligentes destinadas al rendimiento deportivo.</li>
                        <li>Datos sobre la geolocalización para observar la peligrosidad de las rutas que toma el asegurado.</li>
                        <li>Los hábitos en internet de un cliente para diseñar productos específicos.</li>
                        <li>Las reclamaciones fraudulentas anteriores para establecer modelos predictivos.</li>
                    </ul>
                    <br/>
                    Su uso ha acarreado una serie de cambios a la hora de tomar decisiones en dos importantes ámbitos: el análisis y la tarificación de los riesgos y la detección del fraude.

                    Análisis y tarificación de riesgos
                    La gestión de riesgos es uno de los factores más importantes para una empresa aseguradora. Les permite determinar las primas de las pólizas.

                    La gran mayoría de aseguradoras estudian al detalle la información proporcionada por el cliente y la cruzan con datos de terceros. Estos ofrecen información más fiable y objetiva (la entregada por el asegurado puede ser interesada).

                    El objetivo es establecer una tarificación más acorde con la realidad y tomar mejores decisiones en el proceso de suscripción. El uso de las tecnologías de análisis de datos incluso empieza a hacer posible la gestión (y cuantificación) de riesgos en tiempo real.

                    Algunas compañías de seguros, principalmente en los de automóvil, hogar y salud, están empezando a sacar provecho al uso de los datos telemáticos, tecnología portátil (smartwatch, pulseras de actividad diaria, etc.) para rastrear a sus clientes con el objetivo de predecir y calcular riesgos.
                    br
                </p>
                <div className="subTitulo-news">
                    <h1>Análisis y tarificación de riesgos</h1>
                </div>
                <p>
                    Mediante el uso de modelos predictivos, las aseguradoras pueden identificar si hay mayor probabilidad de que sus clientes participen en un accidente o de que su coche sea robado. Combinan sus datos de comportamiento con datos de factores exógenos, como las condiciones de la carretera o previsiones meteorológicas. Un uso similar se puede observar en la rama de la salud y el seguro de vida, debido al creciente uso de tecnología portátil.
                    <br/>
                    <br/>
                    Por todo esto, muchas empresas han declarado la muerte del seguro tradicional para adoptar el llamado seguro interactivo. Este exige que los beneficiarios utilicen móviles o wearables como pulseras y relojes que registran todas sus actividades físicas.
                    <br/>
                    <br/>
                    Los rastreadores de actividad pueden controlar los comportamientos y hábitos de los usuarios y proporcionar evaluaciones continuas de sus niveles de actividad. Por este motivo que muchas aseguradoras ofrecen servicios extra y descuentos basados en el uso de estos dispositivos.
                    <br/>
                    <br/>
                    Para acceder a una póliza, los clientes deben someterse a seguimientos de los datos de salud y actividad de sus dispositivos cuantificadores (móviles, relojes inteligentes o pulseras). Es el principio de una era tan maravillosa como potencialmente peligrosa en la que convergen salud, tecnología y privacidad.
                </p>
                <img src={newOne} alt=""/>
                <div className="subTitulo-news">
                    <h1>Los fraudes más comunes</h1>
                </div>
                <p>
                    Los fraudes en los seguros son las actividades ilícitas de los asegurados para apropiarse de beneficios o indemnizaciones que no les corresponden. Las aseguradoras ponen en marcha protocolos de actuación cuando sospechan de un fraude. Su personal especializado se encarga individualmente de cada caso.
                    <br/>
                    <br/>
                    Las alarmas saltan por motivos tan sencillos como que el siniestro se produzca justo después de contratar la póliza o justo antes de que expire, que suceda a horas anormales o en zonas no habitadas, que exista un patrón común a varios siniestros o que el relato del asegurado sea demasiado confuso o contradictorio.
                    <br/>
                    <br/>
                    Es frecuente que la reclamación tenga lugar unos días antes de que venza la póliza de hogar o poco después de contratarla, que no se aporten comprobantes originales y que se presente documentación excesiva que la entidad no haya solicitado. Los historiales con una elevada siniestralidad y las informaciones vagas e imprecisas en la narración de los hechos son también sospechosos.
                    <br/>
                    <br/>
                    Alrededor del 75 % de los fraudes que detectan las aseguradoras tienen que ver con los seguros de coche. Los casos de intento de estafa por falsos atropellos son bastante populares en todos los países. En España el gran vencedor de los fraudes es el vulgarmente conocido como “cuponazo cervical” (la simulación de un esguince cervical supuestamente ocasionado por un accidente).
                </p>
                <img src={newTwo} alt=""/>
            </div>
        </section>
      </div>
    );
  }
}

export default NewsTwo;
