 import { Link, Redirect } from "react-router-dom";
 import { useStateValue } from "../Context/StateProvider";
 import {useHistory}from 'react-router-dom'
  const Header = () => {
    const history=useHistory()
    const logout=()=>{
      
      localStorage.clear()
      history.push('/signin')
    }
    const [{token},dispatch]=useStateValue()
    return ( 
    <div className="w-full h-[50px] bg-slate-700 ">
      <div className="flex justify-between items-center p-2 pl-5">
        <Link to ='/' className="text-white">Admin   Dashboard</Link>
        <div className="flex justify-between items-center w-[10%] mr-5">
       { !token && <Link to="/signin" className="text-white">Signin</Link>}
      { token &&  <button onClick={logout} className="text-white font-serif text-lg">signOut</button>}
       { !token && <Link to='/signup' className="text-white"> signup</Link>}

        </div>
      </div>



    </div> );
}
 
export default Header;