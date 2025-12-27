import { useEffect, useState } from 'react';
import SearchResults from './SearchResults';
import Library from './Library';
import useFetchSongs from "../Hook/useFetchSongs";
import MainFooter from './mainFooter';
import MainBiblioteca from './mainBiblioteca';
import MainCanciones from './mainCanciones';

const Main = () => {
    const { songs, isLoading, error } = useFetchSongs();
    const [library, setLibrary] = useState([]);
    
    const handleAddToLibrary = (song) => {
        setLibrary( (prev) => 
            prev.some( (s) => s.idAlbum === song.idAlbum) ? prev : [...prev, song]
        );
    };

    const handleRemoveFromLibrary = (idAlbum) => {
        setLibrary( (prev) => prev.filter( (s) => s.idAlbum !== idAlbum));
    }

    return (
        <div>
            <article class="principal">
                <section class="principal-i">
                    <MainBiblioteca/>
                    <div>
                        <table class="table table-dark">
                            <Library songs={library} onRemove={handleRemoveFromLibrary}/>
                        </table>
                    </div>
                </section>
                <section class="principal-c">
                    <MainCanciones/>                
                    <div>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th>Titulo:</th>
                                    <th>Artista:</th>
                                    <th>Album:</th>
                                    <th>Acción:</th>
                                </tr>
                            </thead>
                            <tbody class="table-group-divider">
                                <SearchResults songs={songs} onAdd={handleAddToLibrary}/>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section class="principal-d">
                    <MainFooter/>
                </section>
            </article>
        </div>
    )
}

export default Main;