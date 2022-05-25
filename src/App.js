import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';
import Header from './Components/Shared/Header';
import NotFound from './Components/Pages/NotFound/NotFound';
import Purchase from './Components/Pages/Purchase/Purchase';
import RequireAuth from './RequireAuth/RequireAuth';
import Blogs from './Components/Pages/Blogs/Blogs';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Myprofile from './Components/Pages/Dashboard/Myprofile';
import Myorders from './Components/Pages/Dashboard/Myorders';
import AddReview from './Components/Pages/Dashboard/AddReview';
import ManageAllOrders from './Components/Pages/AdminDashboard/ManageAllOrders';
import AddProduct from './Components/Pages/AdminDashboard/AddProduct';
import MakeAdmin from './Components/Pages/AdminDashboard/MakeAdmin';
import ManageProducts from './Components/Pages/AdminDashboard/ManageProducts';
import RequireAdmin from './RequireAuth/RequireAdmin';

function App() {
  return (
    <div className="mx-auto ">
     <ToastContainer/>
    <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>

       <Route path='/purchase/:id' element={
       <RequireAuth>
        <Purchase/>
       </RequireAuth>
       }/>

       <Route path='/dashboard' element={
       <RequireAuth>
        <Dashboard/>
       </RequireAuth>
       }
       >
         <Route path='myprofile' element={<Myprofile/>} />
         <Route path='myorders' element={<Myorders/>} />
         <Route path='addreview' element={<AddReview/>} />

         <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders/></RequireAdmin>} />
         <Route path='addproduct' element={<RequireAdmin><AddProduct/></RequireAdmin>} />
         <Route path='makeadmin' element={<RequireAdmin><MakeAdmin/></RequireAdmin>} />
         <Route path='manageproducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>} />
      </Route>

       <Route path='/blogs' element={<Blogs/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='*' element={<NotFound/>}/>
     </Routes>

    </div>
  );
}

export default App;
