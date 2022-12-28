import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCB9hyM36Yk4iGGX55NjJfgwbGWbtrkCh4',
  authDomain: 'galeria-de-fotos-1758d.firebaseapp.com',
  projectId: 'galeria-de-fotos-1758d',
  storageBucket: 'galeria-de-fotos-1758d.appspot.com',
  messagingSenderId: '788125705365',
  appId: '1:788125705365:web:90dad4ea1a380a6285a79c'
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);