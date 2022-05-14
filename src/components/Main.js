import React from 'react';
import Stations from './Stations';
import { Routes, Route } from 'react-router-dom';
import CreateNewStation from './CreateNewStation';
import StaionDescription from './StaionDescription';
import UpdateStation from './UpdateStation';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Stations />} />
        <Route path='/createNewStation' element={<CreateNewStation />} />
        <Route
          path='/station-description/:id'
          element={<StaionDescription />}
        />
        <Route path='/update-station/:id' element={<UpdateStation />} />
      </Routes>
    </div>
  );
};

export default Main;
