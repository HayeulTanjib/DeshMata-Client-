import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase-config';
import Loading from '../Components/Shared/Loading';

function RequireAuth({ children }) {

    const [user, loading] = useAuthState(auth);
    let location = useLocation();

    if(loading){
        return <Loading/>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }

  export default RequireAuth;