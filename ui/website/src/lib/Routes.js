import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/js/tab.js';
import 'font-awesome/css/font-awesome.min.css';
// import $ from 'jquery';

import '../App.css';
//-----------Main Menu Rout.................//
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
import Ourjourny      from '../allPages/Ourjourny/Ourjourny.js';

//-----------Level1 Rout.................//

import VideoPage                  from '../allPages/VideoPage/VideoPage.js';
import FormContent                from '../allPages/FormContent/FormContent.js';
import Downstreamservicespage     from '../allPages/Downstreamservicespage/Downstreamservicespage.js';
import Upstreamservicespage       from '../allPages/Upstreamservicespage/Upstreamservicespage.js';
import Digitalservicespage        from '../allPages/Digitalservicespage/Digitalservicespage.js';
import Assetmanagementpage        from '../allPages/Assetmanagementpage/Assetmanagementpage.js';

//-----------Industries  Rout.................//

import Industriesrefinarypage          from '../allPages/Industriesrefinarypage/Industriesrefinarypage.js';
import Industriespetrochemicalpage     from '../allPages/Industriespetrochemicalpage/Industriespetrochemicalpage.js';
import Industrieschemicalpage          from '../allPages/Industrieschemicalpage/Industrieschemicalpage.js';
import Industrieslngpage               from '../allPages/Industrieslngpage/Industrieslngpage.js';
import Industriesprocessingpage        from '../allPages/Industriesprocessingpage/Industriesprocessingpage.js';
import Industrieseppage                from '../allPages/Industrieseppage/Industrieseppage.js';


import Supplychainpage                from '../allPages/Supplychainpage/Supplychainpage.js';
import Planningschedul                from '../allPages/Planningschedul/Planningschedul.js';
import Supplydistributepage           from '../allPages/Supplydistributepage/Supplydistributepage.js';
import Manufacturingsyspage           from '../allPages/Manufacturingsyspage/Manufacturingsyspage.js';
import Arimanagementpage              from '../allPages/Arimanagementpage/Arimanagementpage.js';
import Geologypage                    from '../allPages/Geologypage/Geologypage.js';
import Riserviormanagepage            from '../allPages/Riserviormanagepage/Riserviormanagepage.js';
import Welldrillingpage               from '../allPages/Welldrillingpage/Welldrillingpage.js';
import Productionmanagepage           from '../allPages/Productionmanagepage/Productionmanagepage.js';
import Datamanagepage                 from '../allPages/Datamanagepage/Datamanagepage.js';


import Healthsaftypage                from '../allPages/Healthsaftypage/Healthsaftypage.js';
import Servicearmspage                from '../allPages/Servicearmspage/Servicearmspage.js';
import RefineryPage                   from '../allPages/RefineryPage/RefineryPage.js';
import SimulationPage                 from '../allPages/SimulationPage/SimulationPage.js';
import Energypage                     from '../allPages/Energypage/Energy.js';
import ApcServices                    from '../allPages/ApcServices/ApcServices.js';


// import Effectssec     from '../trial/effectssec/effectssec.js';
// import Effectcaro     from '../trial/Effectcaro/Effectcaro.js';

// import Effectslide     from '../trial/Effectslide/Effectslide.js';
// import Svganimation     from '../trial/Svganimation/Svganimation.js';
 import Parallaxeff     from '../trial/Parallaxeff/Parallaxeff.js';


const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/" exact strict component={ HomePage } /> 
    <Route path="/contact-us" component={ Contactpage } />  
    <Route path="/about-us" component={ AboutUs } />         
    <Route path="/ourjourny" component={ Ourjourny } />         
    <Route path="/careers" component={ Careerspage } />
    <Route path="/services" component={ ServicesPage } />
    <Route path="/industries" component={ IndustriesPage } />
    <Route path="/resource" component={ ResourcePage } />
    <Route path="/blog" component={ BlogPage } />
    <Route path="/video" component={ VideoPage } />
    <Route path="/form" component={ FormContent} />
    <Route path="/downstream" component={ Downstreamservicespage } />
    <Route path="/upstream" component={ Upstreamservicespage } />
    <Route path="/servicearms" component={ Servicearmspage } />
    <Route path="/digitalservices" component={ Digitalservicespage } />
    <Route path="/assetmanagement" component={ Assetmanagementpage } />

    <Route path="/Healthsafty" component={ Healthsaftypage } />
    <Route path="/refinery" component={ Industriesrefinarypage } />
    <Route path="/petrochemicals" component={ Industriespetrochemicalpage } />
    <Route path="/chemicals" component={ Industrieschemicalpage } />
    <Route path="/lng" component={ Industrieslngpage } />
    <Route path="/gasprocessing" component={ Industriesprocessingpage } />
    <Route path="/oilgasep" component={ Industrieseppage } />
    <Route path="/supplychain" component={ Supplychainpage } />
    <Route path="/planningschedul" component={ Planningschedul } />
    <Route path="/supplydistribute" component={ Supplydistributepage } />
    <Route path="/manufacturesystem" component={ Manufacturingsyspage } />
    <Route path="/arimanagement" component={ Arimanagementpage } />
    <Route path="/geoligy" component={ Geologypage } />
    <Route path="/reserviormanagement" component={ Riserviormanagepage } />
    <Route path="/welldrilling" component={ Welldrillingpage } />
    <Route path="/productionmanagement" component={ Productionmanagepage } />
    <Route path="/datamanagement" component={ Datamanagepage } />

   
    <Route path="/oilrefinery" component={ RefineryPage } />
    <Route path="/simulation" component={ SimulationPage } />
    <Route path="/energy" component={ Energypage } />
    <Route path="/apc-services" component={ ApcServices } />

    <Route path="/trial" component={ Parallaxeff } />        
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