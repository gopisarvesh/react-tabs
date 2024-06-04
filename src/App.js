// src/App.js
import React from 'react';
import Tabs from './Tabs';

const App = () => {
  const tabs = [
    {
      label: 'Tab 1',
    },
    {
      label: 'Tab 2',
    },
    {
      label: 'Tab 3',
    }
  ];

  return (
    <div className="App">
      <h1>React Tabs </h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;