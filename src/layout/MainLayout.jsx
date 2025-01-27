import { Outlet } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import Footer from '../components/ui/Footer'
import { Bounce, ToastContainer } from 'react-toastify';

const MainLayout = ({number_of_item}) => {
  return (
    <>
        <NavBar number_of_item={number_of_item} />
        <ToastContainer autoClose={1000} transition={Bounce} pauseOnHover={false} pauseOnFocusLoss={false} />
        <Outlet />
        <Footer />
    </>
)
}

export default MainLayout