import { BrowserRouter,Route,Routes  } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import GlobalContextProvider from "./components/context/GlobalContext";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";


function App() {
  

  return (
    <BrowserRouter>
    
   <GlobalContextProvider>

    <Routes>
      <Route element={<Navbar />}>
        <Route element={<Footer/>}>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/dentistas" element={<ProfessionalsContainer/>}></Route>
      <Route path="/dentista/:id" element={<h1>Aca va el profesional</h1>}></Route>
      <Route path="/contacto" element={<h1>Aca va el form de contacto</h1>}></Route>
      <Route path="/favs" element={<h1>Aca van los favoritos</h1>}></Route>
      </Route>
      </Route> 
      <Route path="*" element={<h1>Not found</h1>}/>   
    </Routes>
    </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App
