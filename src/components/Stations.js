import React from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
const Stations = () => {
  const {
    data: stations,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/stations`);
  const stockStatus = (item) => {
    const essenceStatus =
      (item.stock.essence.quantity * 100) / item.stock.essence.capacite;
    const gazoilStatus =
      (item.stock.gazoil.quantity * 100) / item.stock.gazoil.capacite;
    const gazStatus = (item.stock.gaz.quantity * 100) / item.stock.gaz.capacite;
    return (
      <div>
        <div className='carbs'>
          <span>Ess:</span>
          <p>{essenceStatus} %</p>
        </div>
        <div className='carbs'>
          <span>Diesel:</span>
          <p>{gazoilStatus} %</p>
        </div>
        <div className='carbs'>
          <span>gas:</span>
          <p>{gazStatus} %</p>
        </div>
      </div>
    );
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/station-description/${id}`);
  };
  return (
    <div className='stations'>
      <Navbar title='Stations' />
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {stations && (
        <table>
          <tr>
            <th>name</th>
            <th>adress</th>
            <th>stock</th>
            <th>nbrPomps</th>
            <th>file d'attente essence</th>
            <th>file d'attente gazoil</th>
            <th>file d'attente gaz</th>
            <th>factures</th>
          </tr>
          {stations.map((station) => {
            stockStatus(station);
            return (
              <tr
                key={Math.floor(Math.random() * 200)}
                onClick={() => handleClick(station.id)}>
                <td>{station.name}</td>
                <td>{station.address}</td>
                <td>{stockStatus(station)}</td>
                <td>{station.nbrPomps}</td>
                <td>{station.fileAtttentEssence}</td>
                <td>{station.fileAtttentGazoil}</td>
                <td>{station.fileAtttentGaz}</td>
                <td>{station.Factures}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default Stations;
