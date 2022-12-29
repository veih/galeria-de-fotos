import { useState, useEffect } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/photo";
import { PhotoItem } from "./components/PhotoItem";

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await Photos.getAll());
      setLoading(false);
    };
    getPhotos();
  }, []);

  return (
    <C.Container>
      <C.Aria>
        <C.Header>Galeria de fotos</C.Header>
        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🤬</div>
            <div>loading ...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name}/>
            ))}
          </C.PhotoList>
        )}

        {!loading && photos.length === 0 && (
          <C.ScreenWarning>
            <div className="emoji">👻</div>
            <div>Não temos nei uma foto </div>
          </C.ScreenWarning>
        )}
      </C.Aria>
    </C.Container>
  );
}

export default App;
