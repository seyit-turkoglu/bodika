import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyAmvmHXlbnvHBKphfHnevbBhLe5N2yOTB4",
  authDomain: "bodika-c0606.firebaseapp.com",
  projectId: "bodika-c0606",
  storageBucket: "bodika-c0606.appspot.com",
  messagingSenderId: "119744019603",
  appId: "1:119744019603:web:4aafe6469c895716932166",
  measurementId: "G-BGPMP2XJZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Kayıt Başarılı!");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    toast.success("Giriş Başarılı");
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth); 
    toast.success("Çıkış Başarılı");
  } catch (error) {
    console.log(error);
    toast.error("Çıkış Yapılamadı");
  }
};

export default app;