import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { App } from 'components/App';
import { store, persistor } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename="/react-homework-template">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
