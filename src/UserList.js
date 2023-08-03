import React from 'react';
import useAPI from './hooks/useAPiay';


function UsersList() {
  const { data, loading, error } = useAPI('https://jsonplaceholder.typicode.com/users');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
