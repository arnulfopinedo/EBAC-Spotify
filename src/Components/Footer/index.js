import foto from '../../img/portada_footer.webp';
import aleatorio from '../../img/shuffle.svg';
import anterior from '../../img/chevron-left.svg';
import stop from '../../img/pause-circle.svg';
import siguiente from '../../img/chevron-right.svg';
import repetir from '../../img/repeat.svg';
import microfono from '../../img/mic.svg';
import lista from '../../img/list.svg';
import smart from '../../img/smartphone.svg';
import cast from '../../img/cast.svg';
import descargar from '../../img/arrow-down-circle.svg';

const Footer = () => {
    return (
        <div>
            <article class="footer">
                <diV class="footer-nav-i">
                    <div class="footer-nav-i-info">
                        <div class="footer-nav-i-info-portada">
                            <img src={foto} alt="Portada" />
                        </div>
                        <div class="footer-nav-i-info-cancion">
                            <div>En privado</div>
                            <div>Xavi, Manuel Turizo</div>
                        </div>
                        <div class="footer-nav-i-info-descargar">
                            <i><img src={descargar} alt="descargar" /></i>
                        </div>
                    </div>
                </diV>
                <div class="footer-nav-c">
                    <div class="footer-nav-c-acciones">
                        <i><img src={aleatorio} alt="Modo aleatorio" /></i>
                        <i><img src={anterior} alt="Anterior" /></i>
                        <i><img src={stop} alt="Stop" /></i>
                        <i><img src={siguiente} alt="Siguiente" /></i>
                        <i><img src={repetir} alt="Repetir" /></i>
                    </div>
                </div>
                <div class="footer-nav-d">
                    <div class="footer-nav-d-acciones">
                        <i><img src={microfono} alt="Microfono" /></i>
                        <i><img src={lista} alt="Lista" /></i>
                        <i><img src={smart} alt="Smartphone" /></i>
                        <i><img src={cast} alt="Cast" /></i>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Footer;