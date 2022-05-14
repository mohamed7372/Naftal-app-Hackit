import React, { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';

const UpdateStation = () => {
  const { id } = useParams();
  const [exported, setExported] = useState({
    id: '',
    name: '',
    address: '',
    stock: {
      essence: {
        capacite: 0,
        quantity: 0,
      },
      gazoil: {
        capacite: 0,
        quantity: 0,
      },
      gaz: {
        capacite: 0,
        quantity: 0,
      },
    },
    nbrPomps: 0,
    fileAtttentEssence: '0',
    fileAtttentGazoil: '0',
    fileAtttentGaz: '0',
    Factures: '0',
  });
  const [formDiv, setForm] = useState({
    name: '',
    adress: '',
    gazoil: '',
    essence: '',
    gaz: '',
  });
  const {
    data: station,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/stations/${id}`);
  useEffect(() => {
    axios.get(`http://localhost:8000/stations/${id}`).then((res) => {
      setForm({
        name: res.data.name,
        adress: res.data.address,
        gazoil: res.data.stock.gazoil.capacite,
        essence: res.data.stock.essence.capacite,
        gaz: res.data.stock.gaz.capacite,
      });
      setExported(res.data);
    });
  }, [1]);
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    // const newData = {
    //   id: exported.id,
    //   name: exported.name,
    //   address: exported.address,
    //   stock: {
    //     essence: {
    //       capacite: exported.stock.essence.capacite,
    //       quantity: exported.stock.essence.capacite,
    //     },
    //     gazoil: {
    //       capacite: exported.stock.gazoil.capacite,
    //       quantity: exported.stock.gazoil.capacite,
    //     },
    //     gaz: {
    //       capacite: exported.stock.gaz.capacite,
    //       quantity: exported.stock.gaz.capacite,
    //     },
    //   },
    //   nbrPomps: exported.nbrPomps,
    //   fileAtttentEssence: exported.fileAtttentEssence,
    //   fileAtttentGazoil: exported.fileAtttentGazoil,
    //   fileAtttentGaz: exported.fileAtttentGaz,
    //   Factures: exported.Factures,
    // };
    axios
      .post(`http://localhost:8000/stations/${id}`, {
        id: exported.id,
        name: exported.name,
        address: exported.address,
        stock: {
          essence: {
            capacite: exported.stock.essence.capacite,
            quantity: exported.stock.essence.capacite,
          },
          gazoil: {
            capacite: exported.stock.gazoil.capacite,
            quantity: exported.stock.gazoil.capacite,
          },
          gaz: {
            capacite: exported.stock.gaz.capacite,
            quantity: exported.stock.gaz.capacite,
          },
        },
        nbrPomps: exported.nbrPomps,
        fileAtttentEssence: exported.fileAtttentEssence,
        fileAtttentGazoil: exported.fileAtttentGazoil,
        fileAtttentGaz: exported.fileAtttentGaz,
        Factures: exported.Factures,
      })
      .then(navigate(`/station-description/${id}`));
  };
  const onError = (errors, e) => console.log(errors, e);
  const navigate = useNavigate();
  const handliCancel = () => {
    navigate(`/station-description/${id}`);
  };
  return (
    <div>
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {station && (
        <div className='flex flex-col justify-center relative w-[90vw] '>
          <NavBar title='Update Station' />
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='bg-white shadow-md rounded mt-4 pt-6 pb-8 w-[45vw] m-auto '>
            <div className='input-container mb-4'>
              <label htmlFor='name' className='create-label px-2'>
                name
              </label>
              <input
                value={formDiv.name}
                onChange={(e) => {
                  setForm({
                    ...formDiv,
                    name: e.target.value,
                  });
                }}
                className='create-input'
              />
            </div>
            <div className='input-container mb-4'>
              <label htmlFor='adress' className='create-label px-2'>
                adress
              </label>
              <input
                value={formDiv.adress}
                onChange={(e) => {
                  setForm({
                    ...formDiv,
                    adress: e.target.value,
                  });
                }}
                className='create-input'
              />
            </div>
            <div className='stock-infos'>
              <div className='input-container mb-4'>
                <label htmlFor='gazoil' className='create-label px-2'>
                  gazoil
                </label>
                <input
                  type='number'
                  value={formDiv.gazoil}
                  onChange={(e) => {
                    setForm({
                      ...formDiv,
                      gazoil: e.target.value,
                    });
                  }}
                  className='create-input'
                />
              </div>
              <div className='input-container mb-4'>
                <label htmlFor='essence' className='create-label px-2'>
                  essence
                </label>
                <input
                  type='number'
                  value={formDiv.essence}
                  onChange={(e) => {
                    setForm({
                      ...formDiv,
                      essence: e.target.value,
                    });
                  }}
                  className='create-input'
                />
              </div>
              <div className='input-container mb-4'>
                <label htmlFor='gaz' className='create-label px-2'>
                  gaz
                </label>
                <input
                  type='number'
                  value={formDiv.gaz}
                  onChange={(e) => {
                    setForm({
                      ...formDiv,
                      gaz: e.target.value,
                    });
                  }}
                  className='create-input'
                />
              </div>
            </div>

            <div className='btns'>
              <button type='submit'>update</button>
              <button onClick={handliCancel}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateStation;
