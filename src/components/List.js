/* eslint-disable array-callback-return */
import React, { useEffect, memo } from 'react';
import Item from './Item';

const List = memo(({ users }) => {
  useEffect(() => {
    console.log('render List');
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <Item key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
});

export default List;
