import { Photo } from '../types/photo';
import { storage } from '../libs/firebase';
import {
    ref,
    listAll,
    getDownloadURL,
    uploadBytes,
    deleteObject,
    } from 'firebase/storage';

import { v4 as createId } from 'uuid'
import { PhotoList } from '../App.styles';

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, 'images');
    const photoList = await listAll(imagesFolder);

    for (let i in photoList.items) {
        let photoUrl = await getDownloadURL(photoList.items[i]);

        list.push({
            name: photoList.items[i].name,
            url: photoUrl,
        });
    };

    return list;
};

export const insert = async (file: File) => {

    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
        let randomName = createId();

        let newFile = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFile, file);
        let photoUrl = await getDownloadURL(upload.ref);

        return {
            name: upload.ref.name,
            url: photoUrl
        } as Photo;
    } else {
        new Error(`File type is not supported`)
    }
};

export const deletePhoto = async () => {
    let photoDel = ref(storage, 'images/name');

    await deleteObject(photoDel)
        .then(() => {
          //console.log(target)
        })
        .catch((error) => {});
      console.log();
    //console.log(photoDel);
};