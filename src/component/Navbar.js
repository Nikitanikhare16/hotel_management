import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import {logout} from '../redux/authSlice'
 
const Navbar = ()=>{
    const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)

    const dispatch = useDispatch();
    return(
        <nav className="bg-grey-800 text-white p-4">
       <div className="container mx-auto flex justify-betweens items-center">
       <Link to="/" className="text-2x1">Abhibook</Link>
        <div>
    {isAuthenticated ? (
        <button onClick={() => dispatch(logout())} className="ml-4">Logout</button>
    )
    :(
        <Link to="/create-account " className="ml-4 ">Create Account</Link>
    )}
</div>
</div>
</nav>
    );
  };
 export default Navbar