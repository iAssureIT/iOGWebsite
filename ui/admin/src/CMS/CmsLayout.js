import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import $                  from 'jquery';


import CircleMenuBars from './component/circlemenubars.js';
import Cmspage from './component/cmspage.js';
import ViewPage_1 from './component/createnewpage/ViewPage1.js';
import ViewPage_2 from './component/createnewpage/Viewpage.js';
import ViewBlock_1 from './component/createnewblock/viewblock1.js';
import ViewBlock_2 from './component/createnewblock/ViewBlock_2.js';
import ViewBlock_3 from './component/createnewblock/ViewBlock_3.js';
import MasterPage from './component/MasterPage/MasterPage.js';
import CmsDashBoard from './CmsDashBoard/CmsDashBoard.js'; 
import Login from '../coreadmin/systemSecurity/Login.js';
import SignUp from '../coreadmin/systemSecurity/SignUp.js';
import ForgotPassword from '../coreadmin/systemSecurity/ForgotPassword.js';
import ConfirmOtp from '../coreadmin/systemSecurity/ConfirmOtp.js';
import ResetPassword from '../coreadmin/systemSecurity/ResetPassword.js';
/*blogs*/
// import Header from './component/common/Header/Header.js'; 
import Header from '../coreadmin/common/header/Header.js'; 

import SingleBlogPage                   from './component/Blogs/SingleBlogPage/SingleBlogPage.js';
// import AllBlog                          from './component/AllBlog/AllBlog.js';
// import Blogcomponents                   from './component/Blogcomponents/Blogcomponents.js';
// import AllBlogsList                     from '../allBlocks/AllBlogsList/AllBlogsList.js';

/*============================ /Blog==============================================*/

/*import Rightsidebar     from '../common/rightSidebar/Rightsidebar.js';*/
import BlogsFormPage    from "./component/Blogs/BlogsForm/BlogsFormPage.js";
import AllBlogs          from "./component/Blogs/AllBlogs/AllBlogs.js";
import JobForm          from "./component/JobApplication/JobApplication.js";


// import Homepage          from "./component/Homepage/Homepage.js";

export default class CmsLayout extends React.Component {


    constructor(props) {
        super();
        this.state = {
            loggedIn: false,
        }
    }

    componentDidMount() {
                $(window).scroll(function() {
                var height = $(window).scrollTop();
                if (height > 100) {
                    $('#back2Top').fadeIn();
                } else {
                    $('#back2Top').fadeOut();
                }
            });
            $(document).ready(function() {
                $("#back2Top").click(function(event) {
                    event.preventDefault();
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });

            });
        const token = localStorage.getItem("token");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: true
            })
        } else { }

    }

    logout() {
        var token = localStorage.removeItem("token");
        if (token !== null && token !== "undefined") {
            this.setState({
                loggedIn: false
            })
        }
    }

	render() {
        if (this.state.loggedIn) {
    		return (
    			<Router>
    			<div className="App" >
                    <Switch >
                        <div className="" >
                        {/*                    
                            <Route path="/login"                         exact strict component={Login}  />
                            <Route path="/signup"                         exact strict component={SignUp}  />
                        */}
                    	<div>
                    	<Header />
                            <Route path="/cms/masterpage/:pageurl"              component={ MasterPage } /> 
                                                    
                            <Route path="/"                      exact strict component={CmsDashBoard}  />
                            <Route path="/cms/create-new-page"                         exact strict component={ViewPage_1}  />
                            <Route path="/cms/new-page-add-block"                         exact strict component={ViewPage_2}  />
                            <Route path="/cms/new-page-add-block/:id"                     exact strict component={ViewPage_2}  />
                            <Route path="/cms/select-new-block"                        exact strict component={ViewBlock_1}  />
                            <Route path="/cms/create-new-block"                        exact strict component={ViewBlock_2}  />
                            <Route path="/cms/view-blocks"                        exact strict component={ViewBlock_3}  />
                            
         					
         					<Route path="/cms/singleblog" 					component={ SingleBlogPage }  />   
         					<Route path="/cms/blogs-form" 					component={ BlogsFormPage }  />   
         					<Route path="/cms/blogs-form/:blogURL" 					component={ BlogsFormPage }  />   
         					<Route path="/cms/AllBlogs" 					component={ AllBlogs }  />   
         					<Route path="/cms/singleblog/:selectedUrl" 					component={ SingleBlogPage }  />   
         					{/*<Route path="/cms/contact-us" 					component={ SingleBlogPage }  />   */}
         					{/*<Route path="/cms/job-application" 					component={ JobForm }  /> */}  
         					{/*<Route path="/cms/homepage" 					component={ Homepage }  />   */}
                                                       
                    		
                    	</div>

    				    <a id="back2Top" title="Back to top" href="#">&#10148;</a>
    				    </div>
                    </Switch>
    			</div>
    			</Router>
    		);
        } else {
            return (
                <div>
                    <Router >
                        <Switch >
                            
                            <Route path="/" exact strict component={Login} />
                            <Route path="/login" exact strict component={Login} />
                            <Route path="/signup" exact strict component={SignUp} />
                            <Route path="/forgotpassword" exact strict component={ForgotPassword} />
                            <Route path="/reset-pwd/:user_ID" exact strict component={ResetPassword} />
                            <Route path="/confirm-otp/:userID" exact strict component={ConfirmOtp} />
                        </Switch>
                    </Router>
                </div>
            );
        }
	}
}
