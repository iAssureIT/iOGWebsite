import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './NewProductionaccountingpage.css';

import TemplateBanner          from '../../allBlocks/TemplateBanner/TemplateBanner.js';
import TemplateOverview        from '../../allBlocks/TemplateOverview/TemplateOverview.js';
import ApplicationsTemp        from '../../allBlocks/ApplicationsTemp/ApplicationsTemp.js';
import ChallengesTemp        from '../../allBlocks/ChallengesTemp/ChallengesTemp.js';

export default class NewProductionaccountingpage extends Component {

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      <TemplateBanner />
      <TemplateOverview />
      <ApplicationsTemp/>
      <ChallengesTemp/>
      	
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      </div>
    );  
  }
}

