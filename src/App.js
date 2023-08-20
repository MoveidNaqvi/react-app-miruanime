import {Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Home, { animeLoader } from "./pages/Home"
import About from "./pages/About"
import Error from './pages/Error';
import Anime, { animeDetailsLoader } from './pages/Anime';
import SearchPage from './pages/SearchPage';
import UpcomingAnime from './pages/UpcomingAnime';
import TopAnime from './pages/TopAnime';
import FavouriteAnime from './pages/FavouriteAnime';
import Signin from './pages/Signin/Signin'
import { FavouriteAnimeProvider } from './context/FavouriteAnimeContext'
import Signup from './pages/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RootLayout from './pages/RootLayout';
import AnimeError from './components/AnimeError/AnimeError';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' 
    element={<RootLayout/>}
    >
      <Route index element={<Home />} loader={animeLoader} errorElement={<AnimeError/>} />
      <Route path='upcoming' element={<UpcomingAnime />} />
      <Route path='top' element={<TopAnime />} />
      <Route path='about' element={<About />} />
      <Route path='anime/:id' element={<Anime />} loader={animeDetailsLoader} />
      <Route path='search' element={<SearchPage />} />
      <Route path='favourite' element={<PrivateRoute><FavouriteAnime /></PrivateRoute>} />
      <Route path='sign-in' element={<Signin />} />
      <Route path='sign-up' element={<Signup />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)

function App() {
  return (
    <FavouriteAnimeProvider>
      <RouterProvider router={router}/>
      <ToastContainer toastStyle={{backgroundColor: '#222831', color: '#fff', fontFamily: 'inherit'}} closeButton={false}/>
    </FavouriteAnimeProvider>
  );
}

export default App;
