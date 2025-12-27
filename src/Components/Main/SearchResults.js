import Song from '../Main/Song';

const SearchResults = ({ songs, onAdd }) => {
    return (
        <>
            {
                songs.map((song) => (
                    <Song
                        key={song.idAlbum}
                        song={song}
                        onAdd={onAdd}
                        showAddButton
                    />
                ))
            }
        </>
    );
}

export default SearchResults;   