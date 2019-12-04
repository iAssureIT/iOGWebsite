
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import UMListOfUsers from '../coreAdmin/userManagement/UM/UMListOfUsers.js';
import EditUserProfile from '../coreAdmin/userManagement/UM/EditUserProfile.js';

// import ViewTemplates from '../coreAdmin/NotificationManagement/ViewTemplates.js';
// import Header from '/Users/omkar/Documents/Reactjs/TGK/src/coreAdmin/dashboard/Dashboard.js';




export const routes  =(
    <div className="col-lg-10 col-lg-offset-2">
        <Router>
    }
{/*            <Route path="/umlistofusers" component={UMListOfUsers} exact />*/}
            <Route path="/edituserprofile" component={EditUserProfile} exact />
            
        </Router>
    </div> 

  );


// export default routes;
