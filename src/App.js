import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, Category, Cart} from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import store from "./store/store";
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <ToastContainer/>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path='*' element={<ErrorPage/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
