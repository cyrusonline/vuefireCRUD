import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyBFmys2X9eU-VUzJ75B2VpIW41YJaEkmmI",
    authDomain: "yrmentor2018.firebaseapp.com",
    databaseURL: "https://yrmentor2018.firebaseio.com",
    projectId: "yrmentor2018",
    storageBucket: "yrmentor2018.appspot.com",
    messagingSenderId: "176560638600"
})

export const db = app.database();
export const namesRef = db.ref('names');

