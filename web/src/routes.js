import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';

import Products from './pages/Products/index';
import CreateProducts from './pages/CreateProducts/index';
const Routes = () =>{
    return(
        <BrowserRouter>
            <Route component={Products} path='/' exact/>
            <Route component={CreateProducts} path='/create-product' exact/>
        </BrowserRouter>
    )
}
export default Routes;