import React,{Component} from 'react';
// import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { render } from 'react-dom';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
// import {browserHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
// Section: 1 - SystemSecurity ******************************************************
import Login            from '../systemSecurity/Login.js';
import ConfirmOtp       from '../systemSecurity/ConfirmOtp.js';
import ForgotPassword   from '../systemSecurity/ForgotPassword.js';
import ResetPassword    from '../systemSecurity/ResetPassword.js';
import SignUp           from '../systemSecurity/SignUp.js';
import VerifyAccount    from '../systemSecurity/VerifyAccount.js';
import Header           from '../common/header/Header.js'
import Footer           from '../common/footer/Footer.js'
import Dashboard        from '../dashboard/Dashboard.js'
import UploadStatement        from '../dashboard/UploadStatement/UploadStatement.js'
import Leftsidebar      from '../common/leftSidebar/Leftsidebar.js'
import Rightsidebar     from '../common/rightSidebar/Rightsidebar.js'
import UMListOfUsers    from '../userManagement/UM/UMListOfUsers.js';
import UMListOfUsers2   from '../userManagement/UM/UMListOfUsers2.js';
import EditUserProfile  from '../userManagement/UM/EditUserProfile.js';
import UMRolesList      from '../userManagement/Roles/UMRolesList.js';
import CompanySetting   from '../companysetting/Components/CompanySetting.js';
import ViewTemplates    from '../NotificationManagement/ViewTemplates.js';

import AdminContent       from '../dashboard/DashboardNew.js';
/*============================ /Blog==============================================*/

/*import Rightsidebar     from '../common/rightSidebar/Rightsidebar.js';*/
import BlogsFormPage    from "../Blogs/BlogsForm/BlogsFormPage.js";
import AllBlogs                                  from "../Blogs/AllBlogs/AllBlogs.js";


import SingleBlogPage      from "../Blogs/SingleBlogPage/SingleBlogPage.js";
/* =====================================cms=============================*/
import CircleMenuBars from '../../component/circlemenubars.js';
import Cmspage from '../../component/cmspage.js';
import Awsfile from '../../component/Awsfile.js';
// import DesignPageMaster from '../../component/designpagemaster/designpagemaster.js';
// import Selectpagedesign from '../../component/selectpagedesign/selectpagedesign.js';

import ViewPage1 from '../../component/createnewpage/ViewPage1.js';
import Viewpage from '../../component/createnewpage/Viewpage.js';
import BlockDesignMaster from '../../component/blockdesignmaster/blockdesignmaster.js';
/*selectblockdesign*/
import SelectBlockDesign  from '../../component/selectblockdesign/selectblockdesign.js';
/*createnewblock*/
import ViewBlock_1 from '../../component/createnewblock/viewblock1.js';
import CmsBlock from '../../component/createnewblock/Cmsblock.js';
import ViewBlock_2 from '../../component/createnewblock/ViewBlock_2.js';

import ViewBlock_3 from '../../component/createnewblock/ViewBlock_3.js';
import Staticblocks from '../../component/createnewblock/Staticblocks.js';


import MasterPage from '../../component/MasterPage/MasterPage.js';


//===========  BlockDesignsList  ==========
import BlockDesignsList from '../../component/blockdesignmaster/BlockDesignsList.js';

/*******************************Dashboard Reports*****************************/



import BankReport             from '../dashboardReports/bankReport/BankReport.js';
import CafewiseCheckIns       from '../dashboardReports/cafeWiseCheck-Ins/CafeWiseCheck-Ins.js';
import CafeWiseCheckInD       from '../dashboardReports/cafeWiseCheck-Ins/CafeWiseCheckInD.js';
import CafeWiseCheckOut       from '../dashboardReports/cafeWiseCheck-Out/CafeWiseCheck-Out.js';
import CafeWiseCheckOutD      from '../dashboardReports/cafeWiseCheck-Out/CafeWiseCheckOutD.js';
import CafeWiseSeatBookingS   from '../dashboardReports/cafeWiseSeatBookingS/CafeWiseSeatBookingS.js';
import CafeWiseSeatBookingD   from '../dashboardReports/cafeWiseSeatBookingD/CafeWiseSeatBookingD.js';
import SalesTransactionReport from '../dashboardReports/salesTransactionReport/SalesTransactionReport.js';
import SettlementReportD      from '../dashboardReports/settlementReportD/SettlementReportD.js';
import SettlementReportS      from '../dashboardReports/settlementReportS/SettlementReportS.js';
import AllCafeUsersSeatBooking     from '../dashboardReports/cafeWiseSeatBookingD/AllCafeUsersSeatBooking.js';

class Layout extends Component{
  constructor(props) {
    super();
    this.state = {
          loggedIn  : false, 
          logout    : true
    }
      this.updateState = this.updateState.bind(this);
  }
   
componentDidMount(){
    // console.log('this.props',this.props);

    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#sidebar').toggleClass('active');
           $('#imgSidebar').toggleClass('custm1');
       });
    });
    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#headerid').toggleClass('headereffect');
       });
    });
    $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
           $('#dashbordid').toggleClass('dashboardeffect');
       });
    });
    const token = localStorage.getItem("token");
    // console.log("Dashboard Token = ",token);
    if(token!==null){
    // console.log("*********===***********imin ",token);
      this.setState({
        loggedIn : true,
        logout   : false
      })
    }        
  }

  updateState(data){
    this.setState({
      "logout"    : data,
      "loggedIn"  : false
    })
  }

  logout(){
    var token = localStorage.removeItem("token");
      if(token!==null){
      console.log("Header Token = ",token);
      this.setState({
        loggedIn : false
      })
      // browserHistory.push("/login");
      this.props.history.push("/login");
    }
  }

  render(){

      return(
          <Router>
            <div className="App container-fluid">
              <div className="row">
                <div id="headerid" className="headerbackgroundcolor">
                  <div className="">
                    <Header systemlogout={this.updateState} />
                 </div>
                </div>
                <div id="dashbordid" className="col-lg-10 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12 NOpadding">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mainContentBottom">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding mainContentBackground">                  
                        <Switch>
                          <Route path="/" component={AdminContent} exact />                
                          <Route path="/dashboard" component={AdminContent} exact />                
                          <Route path="/umlistofusers" component={UMListOfUsers2} exact />
                          <Route path="/umroleslist" component={UMRolesList} exact />
                          <Route path="/edituserprofile/:id" component={EditUserProfile} exact />
                          <Route path="/ViewTemplates" component={ViewTemplates} exact />
                          <Route path="/dashboard" component={Dashboard} exact />
                          <Route path="/uploadStatement" component={UploadStatement} exact />
                          <Route path="/companysetting" component={CompanySetting} exact />
                          <Route path="/companysetting/:id" component={CompanySetting} exact />

                          <Route path="/bankReport" component={BankReport} exact />
                        {/* Blog  */}
                          <Route path="/blogsform/:blogID"                exact strict component={BlogsFormPage}  />
                          <Route path="/blogsform/url/:selectedUrl"                exact strict component={BlogsFormPage}  />

                          <Route path="/allblogs" component={AllBlogs} exact />

                          <Route path="/blogsform" component={BlogsFormPage} exact />
                          <Route path="/singleblogpage"                   exact strict component={SingleBlogPage}  />
                          <Route path="/singleblogpage/:selectedID"       exact strict component={SingleBlogPage}  />
                          <Route path="/blog/:selectedUrl"       exact strict component={SingleBlogPage}  />
                          

                          <Route path="/cafeWiseCheck-In/:workspace_ID" component={CafeWiseCheckInD} exact />
                          <Route path="/cafeWiseCheckIn" component={CafewiseCheckIns} exact />
                          <Route path="/cafeWiseCheck-Out/:workspace_ID" component={CafeWiseCheckOutD} exact />
                          <Route path="/cafeWiseCheckOut" component={CafeWiseCheckOut} exact />
                          <Route path="/dashboard/cafeWiseSeatBookingDetailed/:workspace_ID" component={CafeWiseSeatBookingD} exact />
                          <Route path="/dashboard/cafeWiseSeatBookingDetailed" component={CafeWiseSeatBookingD} exact />
                          <Route path="/dashboard/allCafeUsersSeatBooking" component={AllCafeUsersSeatBooking} exact />
                          <Route path="/dashboard/cafeWiseSeatBookingSummary" component={CafeWiseSeatBookingS} exact />
                          <Route path="/dashboard/salesTransactionReport" component={SalesTransactionReport} exact />
                          <Route path="/settlementReportDetailed/:vendor_ID" component={SettlementReportD} exact />
                          <Route path="/settlementReportSummary" component={SettlementReportS} exact />
                          {/*<Route path="/dashboard" component={Dashboard} exact />*/}
                          <Route path="/"               exact strict component={ Login } />
                          <Route path="/login"          exact strict component={ Login } />
                          <Route path="/signup"         exact strict component={ SignUp } />
                          <Route path="/forgot-pwd"     exact strict component={ ForgotPassword } />
                          <Route path="/reset-pwd"      exact strict component={ ResetPassword } />
                          <Route path="/verify-account" exact strict component={ VerifyAccount } />
                          <Route path="/confirm-otp"    exact strict component={ ConfirmOtp } />
                        {/*=========================================== cms */}
                         <Route path = "/about" exact component = {CircleMenuBars} />
                            <Route path = "/cmspage/:id" exact component = {Cmspage} />
                            {/*<Route path = "/example/:id" exact component = {Example} />*/}
                            <Route path = "/aws" exact component = { Awsfile } />
                            {/*<Route path = "/designpagemaster" exact component = { DesignPageMaster } />*/}
                            {/*<Route path = "/selectpagedesign" exact component = { Selectpagedesign } />*/}
                            <Route path = "/viewpage1" exact component = { ViewPage1 } />
                            {/*<Route path = "/viewpage2/:id"exact component = { ViewPage_2 } />
                            <Route path = "/viewpage2" exact component = { ViewPage_2 } />*/}
                            <Route path = "/blockdesignmaster" exact component = { BlockDesignMaster } />
                            <Route path = "/selectblockdesign" exact component = { SelectBlockDesign } />
                            <Route path = "/viewblock1" exact component = { ViewBlock_1 } />
                            <Route path = "/viewblock2" exact component = { ViewBlock_2 } />
                            <Route path = "/viewblock3" exact component = { ViewBlock_3 } />
                            <Route path = "/create-new-block" exact component = { CmsBlock } />
                            <Route path = "/viewpage2" exact component = { Viewpage } />

                            <Route path = "/viewpage2/:pageUrl" exact component = { Viewpage } />
                            {/*
                            <Route path = "/viewblock1/:pageUrl" exact component = { ViewBlock_1 } />*/}

                            <Route path = "/list-of-blocks" exact component = { MasterPage } />
                            <Route path = "/static-block-list" exact component = { Staticblocks } />
                            
                            <Route path = "/block-designs-list" exact component = { BlockDesignsList } />

                        </Switch>        
                      </div>
                    </div>
                  </div>
                  <div className="footerCSS col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
                    <Footer />
                  </div>
                </div>
                <div className="leftsidebarbackgroundcolor">
                  <div className="row">
                    <Leftsidebar />
                  </div>
                </div>
              </div>
            </div> 
          </Router>
      
         ); 

  }
}
export default Layout;
