import Song from '../Main/Song';

const Library = ({ songs, onRemove }) => {
    return (
        <>
            { songs.length === 0 && <span>Biblioteca vacía</span> }
            {
                songs.map( (song) => (
                    <Song 
                        key={song.idAlbum}
                        song={song}
                        onRemove={onRemove}
                        showRemoveButton
                    />
                ))
            }
        </>
    );
}

export default Library;