import React, { useEffect, memo } from 'react';

const Item = memo(({ user }) => {
  useEffect(() => {
    console.log('render Item');
  });
  return <li>{user.name}</li>;
});

export default Item;
