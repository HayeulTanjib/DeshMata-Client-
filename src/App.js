import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Header from './Components/Shared/Header';
import NotFound from './Components/Pages/NotFound/NotFound';

function App() {
  return (
    <div className="mx-auto ">
     <ToastContainer/>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/purchase' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>

    </div>
  );
}

export default App;
