import React, { useState, useEffect, useMemo } from 'react';
import List from './components/List';

const baseList = [
  { id: 1, name: 'Pablo' },
  { id: 2, name: 'Martin' },
];
function App() {
  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState(baseList);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const addNewUSer = () => {
    setUsers(
      text.length > 0 ? [...users, { id: Date.now(), name: text }] : [...users]
    );
  };

  useEffect(() => {
    console.log('render App');
  });

  const filterUsers = useMemo(
    () =>
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, users]
  );

  const getFilterUsers = () => {
    setSearch(text);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="add a name"
        />
        <button onClick={getFilterUsers}> Search </button>
      </div>

      <button onClick={addNewUSer}> Add user </button>
      <List users={filterUsers} />
    </div>
  );
}

export default App;
