import React, { Component, Suspense,lazy } from 'react';
/*import Sample from './Sample.js';*/
// import Layout from './CMS/layout/Layout.js';
import axios   				from 'axios';

import Layout  				from './CMS/coreAdmin/Layout/Layout.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
//const NewPageComponent = React.lazy(() => import('./Sample.js'));

axios.defaults.baseURL =   process.env.REACT_APP_BASE_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
     {/*   <Sample />*/}
     <Layout/>
    </div>
  );
}

export default App;
