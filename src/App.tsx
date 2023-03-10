import { useState, useEffect, FormEvent } from "react";
import * as C from "./App.styles";
import * as Photos from "./services/photos";
import { Photo } from "./types/photo";
import { PhotoItem } from "./components/PhotoItem";
import { deletePhoto } from "./services/photos";

import { FaBookDead } from "react-icons/fa";

function App() {
  const [uploading, setUploading] = useState(false);
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

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;

    if (file && file.size > 0) {
      setUploading(true);
      let result = await Photos.insert(file);
      setUploading(false);

      if (result instanceof Error) {
        alert(`${result.message} - ${result.name}`);
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  };

  const handleDelete = async (e: React.MouseEventHandler<HTMLButtonElement> | any) => {
      let target = await (e.currentTarget.parentElement.children[1]);
      
console.log(target);
      
     };

  return (
    <C.Container>
      <C.Aria>
        <C.Header>Galeria de fotos</C.Header>

        <C.UpLoadForm method="POST" onSubmit={handleFormSubmit}>
          <input type="file" name="image" />
          <input type="submit" value="Enviar" />
          {uploading && "Enviando..."}
        </C.UpLoadForm>

        {loading && (
          <C.ScreenWarning>
            <div className="emoji">🤬</div>
            <div>loading ...</div>
          </C.ScreenWarning>
        )}

        {!loading && photos.length > 0 && (
          <C.PhotoList>
            {photos.map((item, index) => (
              <div key={index} className="cardPhoto">
                <button onClick={handleDelete} >
                  <FaBookDead />
                </button>
                <PhotoItem key={index} url={item.url} name={item.name}  />
              </div>
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
