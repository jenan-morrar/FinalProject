import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';



export const SidebarData = [
  {
    title: 'Student',
    path: '/student',
    icon: <FaIcons.FaUserGraduate />,
    cName: 'nav-text'
  },
  {
    title: 'Teacher',
    path: '/teacher',
    icon: <FaIcons.FaUserTie />,
    cName: 'nav-text'
  },
  {
    title: 'Subject',
    path: '/subject',
    icon: <GiIcons.GiMaterialsScience />,
    cName: 'nav-text'
  },
  {
    title: 'Grade',
    path: '/grade',
    icon: <BsIcons.BsFileEarmarkText />,
    cName: 'nav-text'
  },
  {
    title: 'ClassRoom',
    path: '/classroom',
    icon: <SiIcons.SiGoogleclassroom />,
    cName: 'nav-text'
  },

];