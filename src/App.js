import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import ImgGrid from "./components/grid/ImgGrid.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Hero />
      <ImgGrid />
      {/* testimonial */}
      <Contact />
    </>
  );
}

export default App;
