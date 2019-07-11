import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';

import '../App.css';
import Header         from '../common/Header/Header.js';
import Footer         from '../common/Footer/Footer.js';
import HomePage       from '../allPages/HomePage/HomePage.js';
import Contactpage    from '../allPages/ContactPage/Contactpage.js';
import AboutUs        from '../allPages/AboutUs/AboutUs.js';
import Careerspage    from '../allPages/CareersPage/Careerspage.js';
import ServicesPage   from '../allPages/ServicesPage/ServicesPage.js';
import IndustriesPage from '../allPages/IndustriesPage/IndustriesPage.js';
import ResourcePage   from '../allPages/ResourcePage/ResourcePage.js';
import BlogPage       from '../allPages/BlogPage/BlogPage.js';
import VideoPage       from '../allPages/VideoPage/VideoPage.js';

/*import Effectssec     from '../trial/effectssec/effectssec.js';
import Effectcaro     from '../trial/Effectcaro/Effectcaro.js';
import Effectslide     from '../trial/Effectslide/Effectslide.js';*/
import Svganimation     from '../trial/Svganimation/Svganimation.js';

const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/" exact strict component={ HomePage } /> 
    <Route path="/contact-us" component={ Contactpage } />  
    <Route path="/about-us" component={ AboutUs } />         
    <Route path="/careers" component={ Careerspage } />
    <Route path="/services" component={ ServicesPage } />
    <Route path="/industries" component={ IndustriesPage } />
    <Route path="/resource" component={ ResourcePage } />
    <Route path="/blog" component={ BlogPage } />
    <Route path="/video" component={ VideoPage } />

    <Route path="/trial" component={ Svganimation } />         
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
        <Footer />
      </Router>
    </div>
  );
}

export default Routes;