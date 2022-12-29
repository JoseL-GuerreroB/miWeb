import '../styles/Lenguaje.css';
export default function Lenguaje(prop){
    var nameImg="/miWeb/img/icons8-"+prop.lg+"-144.png";
    // var nameImg = "img/icons8-" + prop.lg + "-144.png";
    var barCol= prop.lgc;
    var usoComun=prop.enUso;
    var gris;
    var colorBase;
    if (usoComun===false){
        gris='grayscale(100%)';
    } else{
        gris='contrast(130%)';
    }
    if (barCol>0 && barCol<=30){
        colorBase= 'rgb(255, 0, 0)';
    }
    if (barCol>30 && barCol<=60){
        colorBase= 'rgb(255, 255, 0)';
    }
    if (barCol>60 && barCol<=80){
        colorBase= 'rgb(0, 255, 0)';
    }
    if (barCol>80 && barCol<=100){
        colorBase= 'rgb(0 ,0 , 255)';
    }
    var tamaño=barCol+"px";
    const modify={
        backgroundColor: colorBase,
        width: tamaño
    }
    const filtro={
        filter: gris
    }
    // var modify='color: '+color+'; width: '+color1+' px;';
    return(
        <div className="len">
            <img className="len__img" src={nameImg} alt="Lenguaje" style={filtro}/>
            <div>
                <h3 className="len__sub" style={filtro}>{prop.lgn} </h3>
                <div id='bar' className='len__sub'>
                    <div className='len__sub-sub' style={modify}>

                    </div>
                </div>
            </div>
        </div>
    )
}