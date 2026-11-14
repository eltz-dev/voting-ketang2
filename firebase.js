const firebaseConfig = {
  apiKey: "AIzaSyAuxTlbB8ftcujSBEQUXD70GmzxAXjUHoM",
  authDomain: "ketag23.firebaseapp.com",
  databaseURL: "https://ketag23-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ketag23",
  storageBucket: "ketag23.firebasestorage.app",
  messagingSenderId: "958833543974",
  appId: "1:958833543974:web:29f033c758d89084808fe7",
  measurementId: "G-DTY4228FR2"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const CANDIDATES = [
  { id: "c1", no: 1, name: "Abdul Hamid Romdhan Utama", kelas: "X.1" },
  { id: "c2", no: 2, name: "Shafa Aulia Putri Maharani", kelas: "X.2" },
  { id: "c3", no: 3, name: "Argi Prayata Hascar", kelas: "X.5" },
  { id: "c4", no: 4, name: "Ansyath Shalih Al Hakim", kelas: "X.6" }
];
const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap" rel="stylesheet">';
document.head.insertAdjacentHTML("beforeend", FONTS);
