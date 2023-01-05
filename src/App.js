import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import Anime from './pages/Anime';
import SearchPage from './pages/SearchPage';
import Footer from './components/footer/Footer';
import UpcomingAnime from './pages/UpcomingAnime';
import TopAnime from './pages/TopAnime';
import FavouriteAnime from './pages/FavouriteAnime';
import Signin from './pages/Signin/Signin'
import { FavouriteAnimeProvider } from './context/FavouriteAnimeContext'
import Signup from './pages/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <FavouriteAnimeProvider>
      <Router>
        <div className='flex flex-col justify-between items-center min-h-screen h-full'>
        <Navbar />
        <div className=' max-w-[100rem]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/upcoming' element={<UpcomingAnime/>}/>
            <Route path='/top' element={<TopAnime/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/anime/:id' element={<Anime/>}/>
            <Route path='/search' element={<SearchPage/>} />
            <Route path='/favourite' element={<PrivateRoute><FavouriteAnime/></PrivateRoute>}/>
            <Route path='/sign-in' element={<Signin/>}/>
            <Route path='/sign-up' element={<Signup/>}/>
            <Route path='/*' element={<Error/>} />
          </Routes>
        </div>
        <Footer/>
        </div>
      </Router>
      <ToastContainer toastStyle={{backgroundColor: '#222831', color: '#fff', fontFamily: 'inherit'}} closeButton={false}/>
    </FavouriteAnimeProvider>
  );
}

export default App;
