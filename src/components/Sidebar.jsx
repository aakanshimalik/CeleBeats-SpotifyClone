import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';
import { MdPlaylistPlay } from 'react-icons/md';

import  logo1  from '../assets/favicon.svg';
import logo2 from '../assets/CT.jpeg';

const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'My Playlist', to: '/playlist', icon: MdPlaylistPlay },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-3">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-6 ml-2 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);


const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


   return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624] '>
        <div>
          <div className='flex flex-row items-center gap-3 mt-4 ml-4 mb-4'>
            <img src={logo2} alt='logo2' className=' w-16 h-16 object-cover rounded-full ' /> 
            <span className='text-gray-300 font-bold'>X</span>
            <img src={logo1} alt='logo1' className=' w-20 h-20 object-cover rounded-full bg-transparent rounded ' /> 
          </div>

         <div className='flex flex-row gap-0'>
          <h2 className='text-white font-bold text-3xl ml-10 '>
               <span style={{color:"red"}}>Cele</span>  
               <span className='ml-0' style={{color:"#90EE90"}}>Beats</span>
          </h2> 
          
        </div>
        </div>
          <NavLinks />
      </div>

      <div className='absolute md:hidden block top-6 right-3'>
         {mobileMenuOpen ? (
          <RiCloseLine className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(false)}/>
         ) : <HiOutlineMenu className='w-6 h-6 text-white mr-2' onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>

        <div className='flex flex-row items-center gap-3 mt-4 ml-20 mb-4'>
            <img src={logo2} alt='logo2' className=' w-16 h-16 object-cover rounded-full ' /> 
            <span className='text-gray-300 font-bold'>X</span>
            <img src={logo1} alt='logo1' className=' w-20 h-20 object-cover rounded-full bg-transparent rounded ' /> 
          </div>

         <div className='flex flex-row gap-0 ml-10'>
          <h2 className='text-white font-bold text-3xl ml-16 '>
               <span style={{color:"red"}}>Cele</span>  
               <span className='ml-0' style={{color:"#90EE90"}}>Beats</span>
          </h2> 
          
        </div>

          <NavLinks handleClick={() => setMobileMenuOpen(false)}/>
      </div> 
    </>
   );
  };

export default Sidebar;
