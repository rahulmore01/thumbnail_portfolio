import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import ImgGrid from "./components/grid/ImgGrid.jsx";
import Contact from "./components/contact/Contact.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";

function App() {
  return (
    <>
      <Hero />
      <ImgGrid />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
