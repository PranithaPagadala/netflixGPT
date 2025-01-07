import React, { useEffect} from "react";
import { auth } from "../utilities/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utilities/userSlice";
import { LOGO } from "../utilities/constants";
import {toggleGptSearchView} from "../utilities/gptSlice"
import { SUPPORTED_LANGUAGES } from "../utilities/languageConstants";
import { changelanguage } from "../utilities/langSlice";
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
    }, []);

    const handleGptSearchClick =()=>{
      
      dispatch(toggleGptSearchView());
      // console.log("clicked")
    }
    const handleLanguageChange = (e)=>{
    //  console.log(e.target.value);
    dispatch(changelanguage(e.target.value));
    }
   const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  return (
    <div className="absolute px-8 py-2 z-10 bg-gradient-to-b from-black w-screen flex justify-between">
      <img
        alt="logo"
        className="w-44"
        src={LOGO}
      />
       { user && (
      <div className="flex p-4">
        {showGptSearch &&  <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
         </select>}
         <button className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white rounded-lg" onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GptSearch"}
        
          </button>
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
