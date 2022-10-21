import React from 'react';

const ItemListContainer = (prop) => {
  return (
    <div>
      <h1>Titulo</h1>
      <p>Hola {prop.greeting}!</p>
    </div>
  )
}

export default ItemListContainer;
