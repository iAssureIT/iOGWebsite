import React, { Component, Suspense,lazy } from 'react';
/*import Sample from './Sample.js';*/
// import Layout from './CMS/layout/Layout.js';
import axios   				from 'axios';

// import Layout  				from './CMS/coreAdmin/Layout/Layout.js';
import CmsLayout  				from './CMS/CmsLayout.js';
// import router from './lib/router.js';


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

import './App.css';
//const NewPageComponent = React.lazy(() => import('./Sample.js'));

// axios.defaults.baseURL = 'http://iogapi.iassureit.com';
axios.defaults.baseURL =  process.env.REACT_APP_BASE_URL;
console.log("REACT_APP_BASE_URL",axios.defaults.baseURL);
// axios.defaults.baseURL = 'http://localhost:6065';
axios.defaults.headers.post['Content-Type'] = 'application/json';

function App() {
  return (
    <div className="App">
     {/*   <Sample />*/}
    {/* <Layout/>*/}
     <CmsLayout/>
    </div>
  );
}

export default App;
