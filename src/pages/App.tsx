import React from 'react';
import Header from 'pages/Header';

const App: React.FC = () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };

  return (
    <div className="App">
      This is the template for react with typescript, eslint, prettier
      {sum(1, 2)}
      <Header />
    </div>
  );
};

export default App;
