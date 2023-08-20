import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

export default function RootLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
      <main className='max-w-[1600px] mx-auto grow'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}