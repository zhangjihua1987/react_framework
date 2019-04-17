import React from 'react';
import ReactDOM from 'react-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Router, Redirect } from 'react-router'
import { store, history } from "./redux/store";
import Test from './pages/Test'

ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path={'/'} component={Test}/>
                </Switch>
            </Router>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);
