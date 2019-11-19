import React, {Component} from 'react';

// import $                  from 'jquery';
import './Refineryplanningpage.css';

import Commonrefineryplanningblock  from '../../allBlocks/Commonrefineryplanningblock/Commonrefineryplanningblock.js';

export default class Refineryplanningpage extends Component {
 RefineryPlanningData(){
        return [
            {
                refineryplanningTitle : "iOG Solutions for Refinery Planning",
                refineryplanningtext  : "We, at iOG Solutions, are a team of consultants with a rich and vast experience in deploying end-to-end solutions of Refinery Planning business process at refineries in Spain, Middle-East, Vietnam, India and various other client sites across the world."
            }, 
           {
                refineryplanningSubTitle1 : "iOG Solutions offers:"
            }, 
                        
        ]
    }



  render() {
    return (
      <div>
     {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 iogimplmntbrdCrm">
       <div className=" col-lg-4 ">
         <div class="container">
          <div class="moduletable">           
           <ul class="breadcrumb breadcrumb2">
            <li class="active">&nbsp;</li><li>
             <a href="/" class="pathway">Home</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
               <li><a href="/services" class="pathway">Services</a>
              <span class="divider">
               <img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li><a href="/servicearms" class="pathway">Service Arms</a>
                <span class="divider"><img src="/media/system/images/arrow.png" alt=""/></span></li>
                <li class="active"><span>iOGImplement</span></li></ul>
            </div>
          </div>
        </div> 
       </div> */}
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="">
          <Commonrefineryplanningblock data5={this.RefineryPlanningData()} />
        </div>
      </div>
      </div>
    );  
  }
}

