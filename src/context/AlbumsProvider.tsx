import { createContext, useEffect, useState, ReactNode } from 'react';
import { Album } from "../components/Album.interface";

interface AlbumsProviderProps {
  children: ReactNode;
}

export const AlbumsContext = createContext<Album[] | null>(null);

function AlbumsProvider ({children}: AlbumsProviderProps) {
    const [albums, setAlbums] = useState<Album[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => setAlbums(albums));
    }, []);

    return(
        <AlbumsContext.Provider value={albums}>
            {children}
        </AlbumsContext.Provider>
    )
}

export default AlbumsProvider;
