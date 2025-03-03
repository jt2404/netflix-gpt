import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state:any)=> state.user)
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      navigate('/')
    }).catch((error) => {
      navigate('/error')      
    });
    
  }
  return (
    <div className="absolute w-full  px-4 py-2 bg-gradient-to-b  from-black hover:cursor-pointer z-10 flex justify-between items-center">
      <img
        className="w-48"
        alt="logo"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {user && 
      <div className="flex p-2">
        <img className="w-6 h-6 m-2" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
        alt="user-icon" />
        <button className="font-bold text-white" onClick={handleSignOut}> Sign Out</button>
      </div>
      }
    </div>
  );
};

export default Header;
