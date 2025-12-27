import plus from '../../img/plus.svg';
import maximizar from '../../img/maximize-2.svg';
import buscar from '../../img/search.svg';
import lista from '../../img/list.svg';


const mainBiblioteca = () => {
    return (
        <>
            <div class="principal-i-tu-biblioteca">
                <div class="principal-i-tu-biblioteca-titulo">
                    <span>Tu biblioteca</span>
                </div>
                <div class="principal-i-tu-biblioteca-acciones">
                    <div class="principal-i-tu-biblioteca-acciones-crear">
                        <i><img src={plus} alt="Mas" /></i>
                        <span>Crear</span>
                    </div>
                    <div class="principal-i-tu-biblioteca-acciones-maximizar">
                        <i><img src={maximizar} alt="maximizar" /></i>
                    </div>
                </div>
            </div>
            <div class="principal-i-botones">
                <div class="principal-i-botones-playlist">
                    <span>Playlists</span>
                </div>
                <div class="principal-i-botones-podcast">
                    <span>Podcasts</span>
                </div>
                <div class="principal-i-botones-albunes">
                    <span>Álbumes</span>
                </div>
                <div class="principal-i-botones-artistas">
                    <span>Artistas</span>
                </div>
            </div>
            <div class="pricipal-i-buscar">
                <i><img src={buscar} alt="Buscar" /></i>
                <div class="principal-i-buscar-reciente">
                    <span>Recientes</span>
                    <i><img src={lista} alt="Lista" /></i>
                </div>
            </div>
        </>
    )
}

export default mainBiblioteca;