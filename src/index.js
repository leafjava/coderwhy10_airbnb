import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

import {Provider} from "react-redux"
import App from './App';
import "normalize.css"
import './assets/css/index.less'
import store from './store'
import theme from './assets/theme';

// @ => src:webpack
// 问题:react用脚手架隐藏webpack
// 解决一:npm run eject
// 解决二:craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="loading">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
);


