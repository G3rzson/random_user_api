
import React, { useState } from 'react';
import User from './User';

export default function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState("");
  const [numUsers, setNumUsers] = useState(0); 
  const [nationality, setNationality] = useState('');  

  const handleFormSubmit = (e) => {
    e.preventDefault(); 

    if(nationality !== ''){
      setUsers([]);
      setLoader('Loading');

      fetch(`https://randomuser.me/api/?results=${numUsers}&nat=${nationality}`)
        .then(result => result.json())
        .then(data => {
          setUsers(data.results);  
        })
        .catch(error => console.error('Error fetching data:', error));
      } 
  };

  return (
    <div>
      <h1 className='text-3xl text-cyan-300 text-center my-4'>Random User API</h1>
      <form onSubmit={handleFormSubmit} className='select-none'>
        <label className="text-lg text-cyan-300 block w-96 my-4 mx-auto p-4">
          Felhasználók száma:
          <input
            className="ml-4 bg-slate-600 text-center rounded border-none outline-none"
            type="number"
            value={numUsers}
            onChange={(e) => setNumUsers(e.target.value)}
            min="1"
            max="10"
            step='1'
          />
        </label>
        <label className="text-lg text-cyan-300 block w-96 my-4 mx-auto p-4">
          Nemzetiség:
          <select className="ml-4 p-2 bg-slate-600 text-center rounded border-none outline-none" value={nationality} onChange={(e) => setNationality(e.target.value)}>
            <option value="">Válassz:</option>
            <option value="CA">Kanada</option>
            <option value="CH">Svájc</option>
            <option value="DE">Németország</option>
            <option value="FR">Franciaország</option>
            <option value="US">USA</option>
          </select>
        </label>
        <button type="submit" className="block mx-auto mb-8 p-4 text-lg text-cyan-300 bor border-2 border-cyan-300 rounded bg-slate-600 hover:bg-slate-500">
          Lekérdez
        </button>
      </form>

      { users.length > 0 ? 
        <User users={users}/> : 
        <p className='text-cyan-300 mt-4 text-center text-3xl flex justify-center gap-8 align-middle'>{loader}<span className={loader === '' ? '' : 'arc'}></span></p> 
      }
    </div>
  );
}
