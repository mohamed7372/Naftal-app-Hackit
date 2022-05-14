import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ title }) => {
  return (
    <div className='nav-bar'>
      <h3>{title}</h3>
      {title === 'Stations' && (
        <div className='station-handlers'>
          <Link to={'/createNewStation'}>
            <button>ajoute station</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
