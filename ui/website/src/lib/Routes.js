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
import Founderprofile from '../allPages/Founderprofile/Founderprofile.js';

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
import Oilmovementpage                from '../allPages/Oilmovementpage/Oilmovementpage.js';


import Healthsaftypage                from '../allPages/Healthsaftypage/Healthsaftypage.js';
import Servicearmspage                from '../allPages/Servicearmspage/Servicearmspage.js';
import RefineryPage                   from '../allPages/RefineryPage/RefineryPage.js';
import Refineryschedulinpage          from '../allPages/Refineryschedulinpage/Refineryschedulinpage.js';
import Backcastingpage                from '../allPages/Backcastingpage/Backcastingpage.js';
import Lputilitypage                  from '../allPages/Lputilitypage/Lputilitypage.js';
import Lpconfigpage                   from '../allPages/Lpconfigpage/Lpconfigpage.js';
import DemandmngPage                  from '../allPages/DemandmngPage/DemandmngPage.js';
import Inventorymngpage               from '../allPages/Inventorymngpage/Inventorymngpage.js';
import Distributeplanningpage         from '../allPages/Distributeplanningpage/Distributeplanningpage.js';
import Retailautopage                 from '../allPages/Retailautopage/Retailautopage.js';
import Productionaccpage              from '../allPages/Productionaccpage/Productionaccpage.js';
import Datahistorpage                 from '../allPages/Datahistorpage/Datahistorpage.js';
import Cropdashboardpage              from '../allPages/Cropdashboardpage/Cropdashboardpage.js';
import Operationlogpage               from '../allPages/Operationlogpage/Operationlogpage.js';
import Iogimplementpage               from '../allPages/Iogimplementpage/Iogimplementpage.js';
import Iogconsultpage                 from '../allPages/Iogconsultpage/Iogconsultpage.js';
import Iogtrainpage                   from '../allPages/Iogtrainpage/Iogtrainpage.js';
import Iogstudypage                   from '../allPages/Iogstudypage/Iogstudypage.js';
import Digitalstratergyroadmappage    from '../allPages/Digitalstratergyroadmappage/Digitalstratergyroadmappage.js';
import Applicationdevppage            from '../allPages/Applicationdevppage/Applicationdevppage.js';
import Enablingtechnologypage         from '../allPages/Enablingtechnologypage/Enablingtechnologypage.js';
import Visualizationdashpage          from '../allPages/Visualizationdashpage/Visualizationdashpage.js';
import Digitalassetpage               from '../allPages/Digitalassetpage/Digitalassetpage.js';
import Enterpriseassetpage            from '../allPages/Enterpriseassetpage/Enterpriseassetpage.js';
import Processsaftypage               from '../allPages/Processsaftypage/Processsaftypage.js';
import Occupationhealthpage           from '../allPages/Occupationhealthpage/Occupationhealthpage.js';
import Environmentsustainpage         from '../allPages/Environmentsustainpage/Environmentsustainpage.js';
import Hseevalutionpage               from '../allPages/Hseevalutionpage/Hseevalutionpage.js';
import Hsebusnesspage                 from '../allPages/Hsebusnesspage/Hsebusnesspage.js';
import Hsesolutionimplementpage       from '../allPages/Hsesolutionimplementpage/Hsesolutionimplementpage.js';
import Changemanagepage               from '../allPages/Changemanagepage/Changemanagepage.js';
import Geointerpritpage               from '../allPages/Geointerpritpage/Geointerpritpage.js';
import GeologicalinterpritPage        from '../allPages/GeologicalinterpritPage/GeologicalinterpritPage.js';
import Petrointerpritepage            from '../allPages/Petrointerpritepage/Petrointerpritepage.js';
import SubsurfacePage                 from '../allPages/SubsurfacePage/SubsurfacePage.js';
import ReservoirengiPage              from '../allPages/ReservoirengiPage/ReservoirengiPage.js';
import FielddevplanPage               from '../allPages/FielddevplanPage/FielddevplanPage.js';
import DyanamicressimuPage            from '../allPages/DyanamicressimuPage/DyanamicressimuPage.js';
import Reserviorcharpage              from '../allPages/Reserviorcharpage/Reserviorcharpage.js';
import Wellplanningpage               from '../allPages/Wellplanningpage/Wellplanningpage.js';
import Wellperformancepage            from '../allPages/Wellperformancepage/Wellperformancepage.js';
import Wellmodlingpage                from '../allPages/Wellmodlingpage/Wellmodlingpage.js';
import Wellloginterpage               from '../allPages/Wellloginterpage/Wellloginterpage.js';
import Welldrillingservicepage        from '../allPages/Welldrillingservicepage/Welldrillingservicepage.js';
import Welldatamngpage                from '../allPages/Welldatamngpage/Welldatamngpage.js';
import Productionenggpage             from '../allPages/Productionenggpage/Productionenggpage.js';
import Productionmonitorpage          from '../allPages/Productionmonitorpage/Productionmonitorpage.js';
import Productionaccountingpage       from '../allPages/Productionaccountingpage/Productionaccountingpage.js';
import Productionoptimizpage          from '../allPages/Productionoptimizpage/Productionoptimizpage.js';
import Productionforcastpage          from '../allPages/Productionforcastpage/Productionforcastpage.js';
import Welltestingpage                from '../allPages/Welltestingpage/Welltestingpage.js';
import Seismicdatamngpage             from '../allPages/Seismicdatamngpage/Seismicdatamngpage.js';
import Welldatamanagepage             from '../allPages/Welldatamanagepage/Welldatamanagepage.js';
import Realtimedatamngpage            from '../allPages/Realtimedatamngpage/Realtimedatamngpage.js';
import Datagoverpage                  from '../allPages/Datagoverpage/Datagoverpage.js';
import Comprihensiveenppage           from '../allPages/Comprihensiveenppage/Comprihensiveenppage.js';
import Cloudbasemngpage               from '../allPages/Cloudbasemngpage/Cloudbasemngpage.js';

import SimulationPage                 from '../allPages/SimulationPage/SimulationPage.js';
import Energypage                     from '../allPages/Energypage/Energy.js';
import ApcServices                    from '../allPages/ApcServices/ApcServices.js';
import EtrmPage                       from '../allPages/EtrmPage/EtrmPage.js';

import BlogContent                    from '../allBlocks/BlogContent/BlogContent.js';


// import Effectssec     from '../trial/effectssec/effectssec.js';
// import Effectcaro     from '../trial/Effectcaro/Effectcaro.js';

// import Effectslide     from '../trial/Effectslide/Effectslide.js';
// import Svganimation     from '../trial/Svganimation/Svganimation.js';
 import Parallaxeff     from '../trial/Parallaxeff/Parallaxeff.js';


const WebLayout = () => (
  <div className="skin-blue fixed sidebar-mini">    
    <Route path="/blogs" exact strict component={ BlogContent } /> 

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
    <Route path="/founderprofile" component={ Founderprofile } />

   
    <Route path="/refineryplanning" component={ RefineryPage } />
    <Route path="/refineryschedule" component={ Refineryschedulinpage } />
    <Route path="/backcasting" component={ Backcastingpage } />
    <Route path="/lputility" component={ Lputilitypage } />
    <Route path="/lpconfig" component={ Lpconfigpage } />
    <Route path="/demandmanagement" component={ DemandmngPage } />
    <Route path="/inventorymanagement" component={ Inventorymngpage } />
    <Route path="/diatributionplanning" component={ Distributeplanningpage } />
    <Route path="/retailautomation" component={ Retailautopage } />
    <Route path="/productionaccounting" component={ Productionaccpage } />
    <Route path="/datahistorian" component={ Datahistorpage } />
    <Route path="/corporatedashboard" component={ Cropdashboardpage } />
    <Route path="/operationlogbook" component={ Operationlogpage } />
    <Route path="/oilmovement" component={ Oilmovementpage } />
    <Route path="/iogimplement" component={ Iogimplementpage } />
    <Route path="/iogconsult" component={ Iogconsultpage } />
    <Route path="/iogtrain" component={ Iogtrainpage } />
    <Route path="/iogstudy" component={ Iogstudypage } />
    <Route path="/digitalstratergy" component={ Digitalstratergyroadmappage } />
    <Route path="/applicationdevlopment" component={ Applicationdevppage } />
    <Route path="/enablingtechnology" component={ Enablingtechnologypage } />
    <Route path="/visualizationdashboard" component={ Visualizationdashpage } />
    <Route path="/digitalasset" component={ Digitalassetpage } />
    <Route path="/EAM" component={ Enterpriseassetpage } />
    <Route path="/processsafty" component={ Processsaftypage } />
    <Route path="/occupationhealth" component={ Occupationhealthpage } />
    <Route path="/environmentsustain" component={ Environmentsustainpage } />
    <Route path="/hsesystemevalution" component={ Hseevalutionpage } />
    <Route path="/hsebusinessprocessingmapping" component={ Hsebusnesspage } />
    <Route path="/hsesolutionsimplementation" component={ Hsesolutionimplementpage } />
    <Route path="/changemanagement" component={ Changemanagepage } />
    <Route path="/geophysicalinterpretation" component={ Geointerpritpage } />
    <Route path="/geologicalinterpretation" component={ GeologicalinterpritPage } />
    <Route path="/petrophysicalanalysis" component={ Petrointerpritepage } />
    <Route path="/subsurfacemodeling" component={ SubsurfacePage } />
    <Route path="/reservoirengineering" component={ ReservoirengiPage } />
    <Route path="/fielddevelopmentplan" component={ FielddevplanPage } />
    <Route path="/dynamicreservoirsimulation" component={ DyanamicressimuPage } />
    <Route path="/reservoircharacterization" component={ Reserviorcharpage } />
    <Route path="/wellplanningdrilling" component={ Wellplanningpage } />
    <Route path="/wellperformanceanalysis" component={ Wellperformancepage } />
    <Route path="/wellmodeling" component={ Wellmodlingpage } />
    <Route path="/wellloginterpretation" component={ Wellloginterpage } />
    <Route path="/welldrillingservices" component={ Welldrillingservicepage } />
    <Route path="/welldatamanagement" component={ Welldatamngpage } />
    <Route path="/productionengineering" component={ Productionenggpage } />
    <Route path="/productionmonitoringsurveillance" component={ Productionmonitorpage } />
    <Route path="/productionaccountingsolution" component={ Productionaccountingpage } />
    <Route path="/productionoptimization" component={ Productionoptimizpage } />
    <Route path="/productionforecasting" component={ Productionforcastpage } />
    <Route path="/welltesting" component={ Welltestingpage } />
    <Route path="/seismicdatamanagement" component={ Seismicdatamngpage } />
    <Route path="/welldatamanagements" component={ Welldatamanagepage } />
    <Route path="/realtimeproductiondatamanagement" component={ Realtimedatamngpage } />
    <Route path="/datagovernance" component={ Datagoverpage } />
    <Route path="/comprehensivemasterdatamanagement" component={ Comprihensiveenppage } />
    <Route path="/comprehensivemasterdatamanagement" component={ Cloudbasemngpage } />
    <Route path="/cloudbaseddatamanagement" component={ Cloudbasemngpage } />

    <Route path="/simulation" component={ SimulationPage } />
    <Route path="/energy" component={ Energypage } />
    <Route path="/apc-services" component={ ApcServices } />
    <Route path="/etrm" component={ EtrmPage } />

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