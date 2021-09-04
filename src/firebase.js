import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import {config} from './config'

const firebaseConfig = config;

const app = initializeApp(firebaseConfig)

export default app;


