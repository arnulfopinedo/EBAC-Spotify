import axios from "axios";
import { useState, useEffect } from "react";

const useFetchSongs = () => {
    const [songsState, setSongsState] = useState({ songs: [], isLoading: true, error: null });

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/track-top10-mb.php?s=cc197bad-dc9c-440d-a5b5-d52ba2e14234`);
                setSongsState({songs: response.data.track, isLoading: false, error: null});
            } catch (error) {
                setSongsState({songs: [], isLoading: false, error: "Error al cargar las canciones"});
            }
        }
        fetchSongs();
    }, []);
    return (
        songsState
    )
}

export default useFetchSongs;