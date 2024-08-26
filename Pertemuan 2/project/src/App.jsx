// import React from 'react';

// const name = 'Faruk Alfiyan';

// function Greeting() {
  //   return <h1>Hello, {name}</h1>;
  // }
  

import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;