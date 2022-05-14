import React from 'react';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import GroupIcon from '@mui/icons-material/Group';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from 'react-router-dom';
const SideItem = ({ title, id }) => {
  return title === 'Station' ? (
    <Link to={'/'}>
      <div className='li-container'>
        <LocalGasStationIcon />
        <li key={id}>{title}</li>
      </div>
    </Link>
  ) : title === 'Orders' ? (
    <div className='li-container'>
      <BookmarkBorderIcon />
      <li key={id}>{title}</li>
    </div>
  ) : title === 'Users' ? (
    <div className='li-container'>
      <GroupIcon />
      <li key={id}>{title}</li>
    </div>
  ) : (
    <div className='li-container'>
      <ExitToAppIcon />
      <li key={id}>{title}</li>
    </div>
  );
};

export default SideItem;
