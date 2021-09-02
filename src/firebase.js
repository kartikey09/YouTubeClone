import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import {config} from './config'


const firebaseConfig = config;

const app = initializeApp(firebaseConfig)

export default app;


//    1//0g66tVnHWhMrrCgYIARAAGBASNwF-L9IrtLY8fRC-5pBuVVY_2k--amwNxSqcCzrHCIrji-LL7BCImKCLvYBXYwhO2VSiTc7ZAng