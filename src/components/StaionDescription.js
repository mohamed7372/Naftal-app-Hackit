import React from 'react';
import useFetch from '../hooks/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import axios from 'axios';

const StaionDescription = () => {
  const { id } = useParams();
  const {
    data: station,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/stations/${id}`);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/stations/${id}`, {
        data: {
          id: id,
        },
      })
      .then(() => {
        navigate('/');
      });
  };
  const handleUpdate = (id) => {
    navigate(`/update-station/${id}`);
  };
  return (
    <div className='stationDetails'>
      <NavBar title='Station Description' />
      <div>
        <div>
          {isPending && <div>Loading ...</div>}
          {error && <div>{error}</div>}
          {station && (
            <div className='stationInfos'>
              <h3>station Informations</h3>
              <div className='description-name'>
                <h4>station Name</h4>
                <h2>{station.name}</h2>
              </div>
              <div className='description-name'>
                <h4>Description</h4>
                <h2>{station.address}</h2>
              </div>
              <div className='description-name'>
                <h4>stock</h4>
                <div className=''>
                  <h4>gazoil stock</h4>
                  <div className='stock-details'>
                    <div className='stock-capacity'>
                      <span>gazoil capacité</span>
                      <h2>{station.stock.gazoil.capacite}</h2>
                    </div>
                    <div className='stock-quantity'>
                      <span>gazoil quantité</span>
                      <h2>{station.stock.gazoil.quantity}</h2>
                    </div>
                  </div>
                  <div className='stock-details'>
                    <div className='stock-capacity'>
                      <span>essence capacité</span>
                      <h2>{station.stock.essence.capacite}</h2>
                    </div>
                    <div className='stock-quantity'>
                      <span>essence quantité</span>
                      <h2>{station.stock.essence.quantity}</h2>
                    </div>
                  </div>
                  <div className='stock-details'>
                    <div className='stock-capacity'>
                      <span>gas capacité</span>
                      <h2>{station.stock.gaz.capacite}</h2>
                    </div>
                    <div className='stock-quantity'>
                      <span>gaz quantité</span>
                      <h2>{station.stock.gaz.quantity}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='btns'>
            <button onClick={() => handleUpdate(id)}>update</button>
            <button onClick={() => handleDelete(id)}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaionDescription;
