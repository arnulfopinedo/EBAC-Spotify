import { Link, useNavigate } from "react-router-dom";

const Song = ({ song, onAdd, onRemove, showAddButton, showRemoveButton }) => {
    const navigate = useNavigate();
    return (
        <>
            {
                showAddButton && (
                    <>
                        <tr>
                            <td>{song.strTrack}</td>
                            <td>{song.strArtist}</td>
                            <td>{song.strAlbum}</td>
                            <td>
                                <Link to={`song/${song.idAlbum}`} class="btn btn btn-outline-info btn-sm  ms-2">Ver detalles</Link>
                                <button class="btn btn btn-outline-success btn-sm  ms-2" onClick={() => onAdd?.(song)}>Agregar a bliblioteca</button>                                                            </td>
                        </tr>
                    </>
                )
            }
            {
                showRemoveButton && (
                    <>
                        <tbody>
                            <tr>
                                <td>{song.strTrack}</td>
                                <td>{song.strArtist}</td>
                                <td><button class="btn btn btn-outline-danger btn-sm" onClick={() => onRemove?.(song.idAlbum)}>Eliminar</button></td>
                            </tr>
                        </tbody>
                    </>
                )
            }
        </>
    );
}

export default Song;