import "./App.css";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";
import GridItemsContainer from "./components/GridItemsContainer/GridItemsContainer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/NavBar/Navbar";
import Backgorund from "./components/UI/Background/Background";

function App() {
  return (
    <>
      <Backgorund />
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <GridItemsContainer />
        <FaqSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
