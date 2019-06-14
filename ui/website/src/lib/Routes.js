import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';

import App from '../App.js';
import '../App.css';
import Header from '../Header/Header.js';
import HomePage from '../HomePage/HomePage.js';

const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/" exact strict component={ HomePage } />            
  </div>
);

// function Routes() {
//   return (
//     <div className="skin-blue fixed sidebar-mini">
//       <Router>
//         <div className="wrapper">
//           <div className="container-fluid">
//             <div className="row">
//               <div className="container-fluid main-container">
//                 <div className="row">
//                   <div className="App">
//                     <Switch>
//                       <Route path="/" component={ WebLayout } />
//                     </Switch>
//                   </div> 
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// }

function Routes() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={ WebLayout } />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
