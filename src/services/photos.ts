import { Photo } from '../types/photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

export const getAll = async () => {
    let list: Photo[] = [];

    return list;
};