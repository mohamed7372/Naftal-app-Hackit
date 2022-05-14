import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';

export default function App() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    const newData = {
      id: `${Math.random().toString(36).substring(2, 7)}`,
      name: data.nom,
      address: data.adress,
      stock: {
        essence: {
          capacite: data.essance,
          quantity: 0,
        },
        gazoil: {
          capacite: data.gazoil,
          quantity: 0,
        },
        gaz: {
          capacite: data.gaz,
          quantity: 0,
        },
      },
      nbrPomps: Math.floor(Math.random() * 100),
      fileAtttentEssence: '0',
      fileAtttentGazoil: '0',
      fileAtttentGaz: '0',
      Factures: '0',
    };
    axios
      .post('http://localhost:8000/stations', newData)
      .then(console.log('data posted'))
      .then(navigate('/'))
      .catch(console.log('error'));
    console.log(newData);
  };
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div className='flex flex-col items-center justify-center relative w-[90vw]'>
      <NavBar title='Céer une station' />
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 my-8 relative w-[45vw]'>
        <div className='input-container mb-4'>
          <label htmlFor='nom' className='create-label'>
            nom
          </label>
          <input
            {...register('nom', { required: true, maxLength: 30 })}
            className='create-input'
          />
        </div>
        <div className='input-container'>
          <label htmlFor='adress' className='create-label'>
            adress
          </label>
          <input
            {...register('adress', { required: true, maxLength: 150 })}
            className='create-input'
          />
        </div>
        <div className='stock-infos'>
          <label htmlFor='essence' className='create-label'>
            essence
          </label>
          <input
            type='number'
            {...register('essence', { required: true, min: 30 })}
            className='create-input'
          />
          <label htmlFor='gazoil' className='create-label'>
            gazoil
          </label>
          <input
            type='number'
            {...register('gazoil', { required: true, min: 30 })}
            className='create-input'
          />
          <label htmlFor='gaz' className='create-label'>
            gaz
          </label>
          <input
            type='number'
            {...register('gaz', { required: true, min: 30 })}
            className='create-input'
          />
        </div>
        <div className='btns'>
          <button type='submit' className='mt-5'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
