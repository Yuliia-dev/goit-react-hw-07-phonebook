import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './redux/store';
import { store } from './redux/store';
import './index.css';
import App from './components/App/App';
import { theme } from './styles/themes';

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//       <ThemeProvider theme={theme}>
//         <App />
//       </ThemeProvider>
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
