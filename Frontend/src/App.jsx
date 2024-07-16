import React from "react";
import Home from "./home/Home";
import Boooks from "./courses/Boooks";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/About";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/books" element={<Boooks />}></Route> */}
          <Route
            path="/books"
            element={authUser ? <Boooks /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
