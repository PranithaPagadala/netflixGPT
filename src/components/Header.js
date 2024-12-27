import React, { useEffect } from "react";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO } from "../utilities/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error")
      });
  };
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      return ()=>unsubscribe;
    },[]);
    
  
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        alt="logo"
        className="w-44"
        src={LOGO}
      />
       { user && (
      <div className="flex p-4">
       
        <img
          alt="user-icon"
          className="w-12 h-12"
          src={user?.photoURL}
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
        </div>
        )}
      
    </div>
  );
};

export default Header;
