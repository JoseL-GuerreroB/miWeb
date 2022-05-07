import '../node_modules/normalize.css/normalize.css';
import './App.css';
import Lenguaje from './components/Lenguaje';
import Proyectos from './components/Proyectos';
import lenguajes from './json/lenguajes.json';
import proyectos from './json/proyectos.json';
import { FaEnvelope, FaGithub, FaLinkedin, FaFilePdf, FaHome, FaTools, FaProjectDiagram, FaMailBulk } from 'react-icons/fa';

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
          <li><a href="#contacto" className="nav__link"><FaMailBulk className='icoNav' title='Contacto'/> </a></li>
        </ul>
      </header>
      <div id='inicio' className="divPres">
        <img src="/img/foto.jpg" alt="Foto de perfil" />
        <p>Hola, mi nombre es:</p>
        <h1>José Luis Guerrero Bautista</h1>
        <h2>Desarrollador Web</h2>
        <p>Me he dedicado a estudiar por mi
          cuenta aprovechando cada
          recurso online referente a la
          programación, con la esperanza
          de poder convertir esta habilidad
          en mi fuente de trabajo.
          Actualmente me he
          especializado en el <span>desarrollo
            web</span>.
        </p>
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
      <footer id="contacto">
        <h3>Contacto</h3>
        <br />
        <div className="con__fin">
          <button><a href="/img/FullStack_GBJL.pdf" target="_blank"><FaFilePdf /> Ver mi CV</a></button>
          <button><a href="mailto:jose.bautista500lg@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /> Email</a></button>
          <button><a href="https://github.com/JoseL-GuerreroB" target="_blank" rel="noopener noreferrer"><FaGithub /> Github</a></button>
          <button><a href="https://www.linkedin.com/in/jose-luis-guerrero-bautista-b5b0bb228/" target="_blank" rel="noopener noreferrer"><FaLinkedin /> Linkedin</a></button>
        </div>
      </footer>
    </div>
  );
}

export default App;
