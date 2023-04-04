import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyBXCBA3bMiZ32DrLUyL8svSDdnA0cIiY4E',
  authDomain: 'tiktok-clone-308bd.firebaseapp.com',
  projectId: 'tiktok-clone-308bd',
  storageBucket: 'tiktok-clone-308bd.appspot.com',
  messagingSenderId: '647988888280',
  appId: '1:647988888280:web:4aee0d267420497159cdad'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
