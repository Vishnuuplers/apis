import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Apidetails from "./Components/Apidetails";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
<>
    <BrowserRouter>
    <Header/>
    
    <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Apidetails />} />

      
    </Routes>
  </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;
