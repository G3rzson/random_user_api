
import React from 'react';
export default function User( { users } ) {
  return (
    <div>
      {users.map((user, index) => (
          <div key={index} className=" bg-slate-600 my-4 mx-auto p-4 w-5/6 sm:w-96 rounded border-2 border-solid border-cyan-300 cursor-pointer  text-cyan-300">
            <p className="text-2xl flex gap-4 justify-center"><span className='text-black'>Name:</span>{user.name.first} {user.name.last}</p>
            <p className="text-lg flex gap-4"><span className='text-black'>E-mail:</span>{user.email}</p>
            <p className="text-lg flex gap-4"><span className='text-black'>Address:</span>{user.location.city}, {user.nat}</p>
          </div>
      ))}
  </div>
  )
}
