import '../styles/Proyectos.css';
export default function Proyectos(prop){
    var proImg="/img/"+prop.img+".JPG";
    var link1="https://github.com/JoseL-GuerreroB/"+prop.link;
    return(
        <div className='pro'>
            <img src={proImg} alt="img" />
            <h3>{prop.pro}</h3>
            <p>Hecho con: {prop.tec}</p>
            <p>{prop.des}</p>
            <button><a href={link1} target="_blank" rel="noopener noreferrer">Ver Codigo</a></button>
        </div>
    );
}