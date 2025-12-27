import portada from '../../img/portada.jpg';
import aleatorio from '../../img/shuffle.svg';
import agregar from '../../img/plus-circle.svg';
import descargar from '../../img/arrow-down-circle.svg';
import mas from '../../img/more-horizontal.svg';
import play from '../../img/play-circle.svg';

const mainCanciones = () => {
    return (
        <>
            <div class="principal-c-portada">
                <img src={portada} alt="Portada" />
            </div>
            <div class="principal-c-acciones">
                <i><img src={play} alt="Play" /></i>
                <i><img src={aleatorio} alt="Aleatorio" /></i>
                <i><img src={agregar} alt="Agregar" /></i>
                <i><img src={descargar} alt="Descargar" /></i>
                <i><img src={mas} alt="Más" /></i>
            </div>
        </>
    )
}

export default mainCanciones;