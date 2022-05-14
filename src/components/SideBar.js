import React from 'react';
// import { useState } from 'react';
import SideItem from './SideItem';

const SideBar = () => {
  // const [open, setOpen] = useState(false);
  const Menus = [
    { title: 'Station', id: 1 },
    { title: 'Orders', id: 2 },
    { title: 'Users', id: 3 },
    { title: 'Sing Up', id: 3 },
  ];
  return (
    <div className='side-bar'>
      <svg
        width='100'
        height='40'
        viewBox='0 0 321 182'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M77 124.5L117 1H176C162 46.5 132.4 142.3 126 161.5C119.6 180.7 109.667 181.833 105.5 180H1L18 124.5H77Z'
          fill='#335385'
          stroke='#99A9C2'
        />
        <path d='M33.5 74.5H80L68 115.5H20.5L33.5 74.5Z' fill='#335385' />
        <path
          d='M171.5 52L187.5 1H275C298 6.5 320.5 10.5 320.5 62.5C320.5 104.1 290.167 115.167 275 115.5H151L164.5 74.5H258C268.4 64.9 262.333 55.5 258 52H171.5Z'
          fill='#335385'
        />
        <path d='M33.5 74.5H80L68 115.5H20.5L33.5 74.5Z' stroke='#99A9C2' />
        <path
          d='M171.5 52L187.5 1H275C298 6.5 320.5 10.5 320.5 62.5C320.5 104.1 290.167 115.167 275 115.5H151L164.5 74.5H258C268.4 64.9 262.333 55.5 258 52H171.5Z'
          stroke='#99A9C2'
        />
      </svg>
      <ul className='side-list'>
        {Menus.map((item) => {
          return <SideItem title={item.title} id={item.id} />;
        })}
      </ul>
    </div>
  );
};

export default SideBar;
