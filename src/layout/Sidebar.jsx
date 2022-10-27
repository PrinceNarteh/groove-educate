import React, { useState } from 'react';
import { AiOutlineLineChart, AiOutlineSchedule } from 'react-icons/ai';
import { BsPlayCircle } from 'react-icons/bs';
import { FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { GoCode } from 'react-icons/go';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { SlHome } from 'react-icons/sl';
import { VscSymbolOperator } from 'react-icons/vsc';
import { Link, useLocation } from 'react-router-dom';

const links = [
  {
    label: 'Home',
    link: '/',
    icon: SlHome,
  },
  {
    label: 'Live Lessons',
    link: '/live-lessons',
    icon: FaChalkboardTeacher,
  },
  {
    label: 'Homework Help',
    link: '/homework-help',
    icon: FaHandsHelping,
  },
  {
    label: 'Video Library',
    link: '/video-library',
    icon: BsPlayCircle,
  },
  {
    label: 'Get A Learning Plan',
    link: '/learning-plan',
    icon: AiOutlineSchedule,
  },
  {
    label: 'Mock Exams',
    link: '/mock-exams',
    icon: GiNotebook,
  },
  {
    label: 'Practice Exams',
    link: '/practice-exams',
    icon: VscSymbolOperator,
  },
  {
    label: 'Learning Analysis',
    link: '/learning-analysis',
    icon: AiOutlineLineChart,
  },
  {
    label: 'Notifications',
    link: '/notifications',
    icon: MdOutlineNotificationsActive,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <aside className="h-screen divide-y-2 divide-gray-700 w-80 fixed flex flex-col left-0 top-0 bg-zinc-600">
      <div className="flex-1 px-6 space-y-1 flex flex-col justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className={`flex items-center gap-4 text-xl text-white px-5 py-4 rounded-md cursor-pointer hover:bg-orange-500 duration-200 ${
              pathname === link.link ? 'bg-orange-500' : ''
            }`}
          >
            {React.createElement(link.icon)}
            <h3 className="flex-1">{link.label}</h3>
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-3">
        <button className="bg-blue-500 w-11/12 flex items-center justify-center gap-4 text-white py-3 rounded-lg font-bold">
          <GoCode className="text-xl" />
          <span>Switch to Coding School</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
