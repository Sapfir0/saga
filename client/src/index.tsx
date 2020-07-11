import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {store} from "./Store";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


