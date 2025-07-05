import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';

// const links = [
//   { name: 'Discover', to: '/', icon: HiOutlineHome },
//   { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
//   { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
//   { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
// ];
import { links } from '../assets/constants';


const Sidebar = () => (
   const [mobileMenuOpen, setMobileMenuOpen ] = useState(false);

   return (
    <>
      <div className='md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]'>
        <img src={logo} alt='logo' className='w-full h-14 object-contain' />  

      </div>
    </>
   )
);

export default Sidebar;
