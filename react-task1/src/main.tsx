import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './components/store/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { coversFetch } from './components/services/apiDataFetch';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={coversFetch}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
