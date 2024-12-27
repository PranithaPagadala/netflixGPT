// import React, { useState } from 'react';

// import { useState } from "react";

// const UserDropdown = () => {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownVisible((prev) => !prev);
//   };

//   const handleSignOut = () => {
//     alert('Signing out...');
//     // Add your sign-out logic here
//   };

//   return (
//     <div className="relative inline-block">
//       {/* User Icon */}
//       <div
//         onClick={toggleDropdown}
//         className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer"
//       >
//         <span className="text-lg font-bold">U</span>
//       </div>

//       {/* Dropdown Menu */}
//       {isDropdownVisible && (
//         <div
//           className="absolute mt-2 right-0 bg-white shadow-lg rounded-lg py-2 px-4 z-50 min-w-max"
//           style={{ top: '100%' }}
//         >
//           <button
//             onClick={handleSignOut}
//             className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 focus:outline-none w-full text-center"
//           >
//             Sign Out
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserDropdown;
import {useState}  from "react";
const UserDropdown =()=> {
    const [signout, setSignout]= useState(false);
    const handlebtn = ()=>{
        setSignout(!signout);
    };
    const handleLogout =()=>{
        alert("loggedout")
    }
return (<div>
    <div >
        <img alt="user-logo" className="h-14 w-14" src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" onClick={handlebtn} />
    </div>
    <div>
        {signout && (<div className="mt-3 bg-slate-200 w-1/12 ">
            <ul>
                <li> <button className="border border-black" onClick={handleLogout}>Logout</button></li>
                <li> <button >Logout</button></li>
                <li> <button>Login</button></li>
                <li> <button>Login</button></li>
                <li> <button>Login</button></li>
                <li> <button>Login</button></li>
           
            </ul>
        </div>)}
    </div>
</div>);
};
export default UserDropdown;
// https://www.canva.com/templates/EAF0xAJK5wU-blue-and-white-professional-resume/