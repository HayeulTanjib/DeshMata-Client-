import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase-config';
import Loading from '../Components/Shared/Loading';
import useAdmin from "../Components/Hooks/useAdmin";
import { signOut } from "firebase/auth";

function RequireAdmin({ children }) {

    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }
  
    if (!user || !admin) {
        signOut(auth);
        localStorage.removeItem('accessToken');
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }

  export default RequireAdmin;