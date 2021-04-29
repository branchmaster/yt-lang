import React from 'react';

import Routes from '../../Routes';
import AppContextProvider from '../../context/contexts/AppContext';

const App = () => {
  return (
    <div>
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </div>
  );
};

export default App;
