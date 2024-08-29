import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './AlbumDetails.css';
import { useContext } from "react";
import {AlbumsContext} from '../context/AlbumsProvider'

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

function AlbumDetails() {
  const albums = useContext(AlbumsContext);
  const { id } = useParams<{ id: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const album = albums?.find(album => album.id === parseInt(id || "0"));

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
        .then(response => response.json())
        .then(data => setPhotos(data));
    }
  }, [id]);

  return (
    <div className="wrap">
      <h2 style={{textAlign: "center"}}>{album?.title}</h2>
      <div className="wrap-box">
        {photos.map(photo => (
          <div className="item" key={photo.id}>
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumDetails;
