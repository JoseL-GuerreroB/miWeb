import '../node_modules/normalize.css/normalize.css';
import './App.css';
import Lenguaje from './components/Lenguaje';
import Proyectos from './components/Proyectos';
import lenguajes from './json/lenguajes.json';
import proyectos from './json/proyectos.json';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf, FaHome, FaTools, FaProjectDiagram, FaMailBulk, FaStar } from 'react-icons/fa';

function App() {
  const lenguaje = lenguajes;
  const proyecto = proyectos;

  return (
    <div className="App">
      <header className='header'>
        <h2>JoseL-GuerreroB</h2>
        <ul className='nav'>
          <li><a href="#inicio" className="nav__link"><FaHome className='icoNav' title='Inicio' /> </a></li>
          <li><a href="#tecnologias" className="nav__link"><FaTools className='icoNav' title='Tecnologias'/> </a></li>
          <li><a href="#proyectos" className="nav__link"><FaProjectDiagram className='icoNav' title='Proyectos'/> </a></li>
          <li><a href="#experiencia" className="nav__link"><FaStar className='icoNav' title='Experiencia laboral'/> </a></li>
          <li><a href="#contacto" className="nav__link"><FaMailBulk className='icoNav' title='Contacto'/> </a></li>
        </ul>
      </header>
      <div id='inicio' className="divPres">
        <img src="/miWeb/img/foto2.jpg" alt="Foto de perfil" />
        <p>Hola, mi nombre es:</p>
        <h1>José Luis Guerrero Bautista</h1>
        <h2>Desarrollador Web Jr.</h2>
        <p>Me he dedicado a estudiar por mi
          cuenta aprovechando cada
          recurso online referente a la
          programación, con el fin de mejorar mis habilidades y
          crecer en esta profesión.
          Actualmente me he
          especializado en el <span>desarrollo web</span>.</p>
      </div>
      <div id='tecnologias' className="tec">
        <h2>Habilidades</h2>
        <div className="tec__leng">
          {lenguaje.map(pro => {
            return (
              <Lenguaje lg={pro.lg} lgn={pro.lgn} lgc={pro.lgc} enUso={pro.enUso}></Lenguaje>
            );
          })}
        </div>
      </div>
      <div id='proyectos' className="pr">
        <h3>Proyectos</h3>
        <div className='pr__proy'>
          {proyecto.map(por => {
            return (
              <Proyectos img={por.Img} pro={por.Pro} tec={por.Tec} des={por.Des} link={por.Link}></Proyectos>
            );
          })}
        </div> <br /><br />
      </div>
      <div id='experiencia'>
        <h3>Experiencia Laboral</h3>
        <div id='empresas'>
          <div>
            <p><span style={{ borderBottom: "3px solid #015", fontSize: "25px"}}> NAXFRA </span></p>
            <p><span>Dirección:</span> Cerrada Ceylan no. 541, industrial Vallejo, Ciudad de México</p>
            <p><span>Puesto:</span> Desarrollador web backend</p>
            <p><span>Supervisor:</span> José Ernesto Sámano de los Santos. <span>Tel:</span> 5519655087</p>
            <p><span>Periodo:</span> Del 04 de Julio del 2022 al 21 de Octubre del 2022</p>
          </div>
        </div>
      </div>
      <footer id="contacto">
        <h3>Contacto</h3>
        <br />
        <div className="con__fin">
          <button><a href="/miWeb/img/FullStack_GBJL.pdf" target="_blank"><FaFilePdf /> Ver mi CV</a></button>
          <button><a href="mailto:jose.bautista500lg@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> Email</a></button>
          <button><a href="https://github.com/JoseL-GuerreroB" target="_blank" rel="noopener noreferrer"><FaGithub /> Github</a></button>
          <button><a href="https://www.linkedin.com/in/jose-luis-guerrero-bautista-b5b0bb228/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Linkedin</a></button>
        </div>
      </footer>
    </div>
  );
}

export default App;
