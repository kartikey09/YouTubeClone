import React from 'react'
import App from './App'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './_base.scss'
import store from './redux/store';
import { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.render(
<Provider store = {store}>
    <Router>
        <App/>
    </Router>
</Provider>,

document.getElementById("root")
)