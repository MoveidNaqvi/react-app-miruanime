import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import Anime from './pages/Anime';
import SearchPage from './pages/SearchPage';
import Footer from './components/footer/Footer';
import UpcomingAnime from './pages/UpcomingAnime';
import TopAnime from './pages/TopAnime';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="body-container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/upcoming' element={<UpcomingAnime/>}/>
          <Route path='/top' element={<TopAnime/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/anime/:id' element={<Anime/>}/>
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
