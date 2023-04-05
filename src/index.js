import React, { FC, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [time, setTime] = useState(0);
  const setTimer = () => {
    setTime(time + 1);
  };
  return (
    <div>
      React + Shadow DOM
      <a href="#" onClick={setTimer} id="clickme">
        Click me
      </a>
      <div id="result">
        <strong>{time}</strong>
      </div>
    </div>
  );
};

const root = document.querySelector('#react-root');
root.attachShadow({ mode: 'open' });

render(<App />, root.shadowRoot);
