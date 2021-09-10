import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Global from './globalStyled/Global';
import { AuthContext } from './contexts/AuthContex';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './Routers/routers';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthContext>
        <Global />
        <Routers />
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
