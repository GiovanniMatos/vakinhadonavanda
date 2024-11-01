"use client";

import { useState } from 'react';
import NavSobre from './NavDonateContent/NavSobre';
import NavContribuidores from './NavDonateContent/NavContribuidores';

export default function NavContent() {
  const [tabSelected, setTabSelected] = useState('sobre'); // Initialize with 'sobre' as default

  function renderSelectedContent() {
    switch (tabSelected) {
      case "sobre":
        return <NavSobre />;
      case "contribuidores":
        return <NavContribuidores />;
      default:
        return <NavSobre />;
    }
  }

  const tabSobre = () => {
    setTabSelected('sobre');
  };

  const tabContribuidores = () => {
    setTabSelected('contribuidores');
  };

  return (
    <>
    <div className="h-[30rem] mb-[15rem]">
      <nav className='mb-8 ml-4 lg:ml-36'>
        <ul className="flex text-xl">
          <li
            className={`mr-4 cursor-pointer ${tabSelected === 'sobre' ? 'text-green-500 font-bold border-b-2 border-green-500' : 'text-gray-500 border-b-2 border-gray-500'} hover:text-green-600`}
            onClick={tabSobre}
          >
            <a>Sobre</a>
          </li>
          <li
            className={`cursor-pointer ${tabSelected === 'contribuidores' ? 'text-green-500 font-bold border-b-2 border-green-500' : 'text-gray-500 border-b-2 border-gray-500'} hover:text-green-600`}
            onClick={tabContribuidores}
          >
            <a>Quem ajudou</a>
          </li>
        </ul>
      </nav>
      <div className="text-left ml-4 lg:ml-36 h-40">{renderSelectedContent()}</div>
    </div>
    </>
  );
}