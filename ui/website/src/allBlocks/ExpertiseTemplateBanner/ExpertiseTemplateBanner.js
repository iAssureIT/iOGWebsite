import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ExpertiseTemplateBanner.css';


export default class ExpertiseTemplateBanner extends Component {

 


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate NOPadding">
         {/* <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="BT1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>*/}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">

        		  <div className="col-lg-offset-2 col-lg-8 col-md-12 col-sm-12 col-xs-12 ">
        		   <h2 className="BT1_bannerTitle text-center">Production Accounting</h2>
                  {/* <img src="/images/acc.png" className="BT1_img"/>*/}
        		  </div>
    
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

