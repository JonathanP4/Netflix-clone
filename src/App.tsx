import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Background from "./components/Backgorund/Background";
import AdsPlan from "./components/AdsPlan/AdsPlan";
import SectionsContainer from "./components/SectionsContainer/SectionsContainer";
import FaqComponent from "./components/Faq/FaqComponent";

function App() {
  return (
    <main>
      <Background>
        <Navbar />
        <Hero />
      </Background>
      <section>
        <AdsPlan />
        <SectionsContainer />
        <FaqComponent />
      </section>
    </main>
  );
}

export default App;
