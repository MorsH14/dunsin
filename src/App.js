import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/home";
import Navbar from "./components/navbar/nav";
import Footer from "./components/footerpage/footer";
import Error from "./pages/404page/404";
import Gallery from "./pages/gallery/gallery";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";


function App(){
  return(
    <div>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/*" element={<Error/>} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App;