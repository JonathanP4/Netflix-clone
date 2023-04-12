import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Select from "./components/Select/Select";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Backgorund/Background";

function App() {
  return (
    <main>
      <Background>
        <Navbar />
        <Hero />
      </Background>
    </main>
  );
}

export default App;
