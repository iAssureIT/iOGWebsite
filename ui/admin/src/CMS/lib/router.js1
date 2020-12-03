
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/*
import UMListOfUsers from '../coreAdmin/userManagement/UM/UMListOfUsers.js';
import EditUserProfile from '../coreAdmin/userManagement/UM/EditUserProfile.js';*/
import MasterPage from '../component/MasterPage/MasterPage.js';


import CircleMenuBars from './CMS/component/circlemenubars.js';
import Cmspage from './CMS/component/cmspage.js';
import ViewPage_1 from './CMS/component/createnewpage/ViewPage1.js';
import ViewPage_2 from './CMS/component/createnewpage/Viewpage.js';
import ViewBlock_1 from './CMS/component/createnewblock/viewblock1.js';
import ViewBlock_2 from './CMS/component/createnewblock/ViewBlock_2.js';
import ViewBlock_3 from './CMS/component/createnewblock/ViewBlock_3.js';
import MasterPage from './CMS/component/MasterPage/MasterPage.js';
import Header from './component/common/Header/Header.js'; 
import CmsDashBoard from './CMS/CmsDashBoard/CmsDashBoard.js'; 

/*blogs*/

import SingleBlogPage                   from './component/Blogs/SingleBlogPage/SingleBlogPage.js';
// import AllBlog                          from './component/AllBlog/AllBlog.js';
// import Blogcomponents                   from './component/Blogcomponents/Blogcomponents.js';
// import AllBlogsList                     from '../allBlocks/AllBlogsList/AllBlogsList.js';

/*============================ /Blog==============================================*/

/*import Rightsidebar     from '../common/rightSidebar/Rightsidebar.js';*/
import BlogsFormPage    from "./component/Blogs/BlogsForm/BlogsFormPage.js";
import AllBlogs          from "./component/Blogs/AllBlogs/AllBlogs.js";
import JobForm          from "./component/JobApplication/JobApplication.js";

// import ViewTemplates from '../coreAdmin/NotificationManagement/ViewTemplates.js';
// import Header from '/Users/omkar/Documents/Reactjs/TGK/src/coreAdmin/dashboard/Dashboard.js';

export default class router extends React.Component {


render() {
  return (
    <div>
     	{/*<Router>
     	            <Route path="/masterpage/:pageurl"  component={ MasterPage } /> 
     	  		</Router>*/}
  		    	<div className="App container-fluid">
                    <div className="row" >
                    	<Header />
                    	<div>
                    	 <Switch >
                                                    
                            <Route path="/cms/dashboard"                      exact strict component={CmsDashBoard}  />
                            <Route path="/cms/create-new-page"                         exact strict component={ViewPage_1}  />
                            <Route path="/cms/new-page-add-block"                         exact strict component={ViewPage_2}  />
                            <Route path="/cms/new-page-add-block/:id"                     exact strict component={ViewPage_2}  />
                            <Route path="/cms/select-new-block"                        exact strict component={ViewBlock_1}  />
                            <Route path="/cms/create-new-block"                        exact strict component={ViewBlock_2}  />
                            <Route path="/cms/view-blocks"                        exact strict component={ViewBlock_3}  />
                            
        					<Route path="/cms/masterpage/:pageurl"       		component={ MasterPage } /> 
         					
         					<Route path="/cms/singleblog" 					component={ SingleBlogPage }  />   
         					<Route path="/cms/blogs-form" 					component={ BlogsFormPage }  />   
         					<Route path="/cms/blogs-form/:blogURL" 					component={ BlogsFormPage }  />   
         					<Route path="/cms/AllBlogs" 					component={ AllBlogs }  />   
         					<Route path="/cms/singleblog/:selectedUrl" 					component={ SingleBlogPage }  />   
         					{/*<Route path="/cms/contact-us" 					component={ SingleBlogPage }  />   */}
         					{/*<Route path="/cms/job-application" 					component={ JobForm }  /> */}  
         					<Route path="/cms/homepage" 					component={ Homepage }  />   
                                                       
                    		
                    		</Switch>
                    	</div>

    				
    				</div>
    			</div>

    </div>
  );
}
}






// export default routes;
