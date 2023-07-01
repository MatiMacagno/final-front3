import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Detail from './Routes/Detail'
import PageNotFound from './Routes/PageNotFound'
import './index.css';
import { routes } from './Routes/routes'




function App() {
  return (
      <div className="app">
        <Navbar/>
          <Routes>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
              <Route path={routes.detail} element={<Detail/>}/>
              <Route path={routes.pageNotFound} element={<PageNotFound/>}/>
          </Routes>
          <Footer/>
          
      </div>
  );
}

export default App;
