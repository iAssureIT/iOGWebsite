import React, { Component } from 'react';
// import { render } from 'react-dom';
// import   Loadable                  from 'react-loadable';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './Plans.css';

export default class Plans extends Component {

PlanData(){
        return [
            {
                plansTitle    : "Types of Plan",
                planstext     : "Two kinds of plans are prepared at refineries: Long-Term & Short-Term."
            }, 
            {
               
                plansSubTitle1    : "Long Term plans",
                planstext1        : "Revenue Budget and Annual Plans for estimating and planning the expenditure during the forthcoming financial year.These are also used to schedule turn-around of process units. "
            },  
            {
               
                plansSubTitle2    : "Short-Term plans",
                planstext2        : "Monthly plan to optimize refinery’s operational activities for the current month, while keeping a view for the future requirements concerning the next three-month cycle. The typical flow of activities during the Short-Term plan regime is as depicted below:"
                // overviewimg       : "/images/2.png",
            }, 
            {
               
                plansimg          : "images/1.jpg",
                planstext3        : "The base month plan for the current month never remains valid all through the month as unplanned aberrations in crude receiving program, demand variations and emergency shut-down of process units are bound to occur.This calls for a mid-month correction of the plan incorporating actual deviations from the plan during the first half of the month and devise a revised plan to achieve the best in the remaining half of the month."
                
            },    

        ]
    }

    PlanData1(){
        return [
            {
               
                plansimg          : "images/1.jpg",
                planstext3        : "The base month plan for the current month never remains valid all through the month as unplanned aberrations in crude receiving program, demand variations and emergency shut-down of process units are bound to occur.This calls for a mid-month correction of the plan incorporating actual deviations from the plan during the first half of the month and devise a revised plan to achieve the best in the remaining half of the month."
                
            },    

        ]
    }


    render(){
        return(
             <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 {
                    this.PlanData().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="col-lg-12">
                                            <p className="plan_line_subheadd ">{data.plansTitle}</p>
                                            <p className="plan_line_paraaaa">{data.planstext}
                                            </p> 
                                           </div>

                                           <div className="col-lg-12">
                                            <p className="plan_line_subsubheadd ">{data.plansSubTitle1}</p>
                                            <p className="plan_line_paraaaa">{data.planstext1}
                                            </p> 
                                           </div>

                                           <div className="col-lg-12">
                                            <p className="plan_line_subsubheadd ">{data.plansSubTitle2}</p>
                                            <p className="plan_line_paraaaa">{data.planstext2}
                                            </p> 
                                           </div>

                                           
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }

                               {
                    this.PlanData1().map((data, index)=>{
                       return ( 
                        <div key={index} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            
                                         <div className="col-lg-12">
                                            <div className="plans_imgg">
                                            <img className="mt_plans" src={data.plansimg} alt=""/>
                                            </div>
                                            <p className="plan_line_paraaaa3">{data.planstext3}
                                            </p> 
                                         </div>
                                           
                                        </div>
                                       </div>
                                      </div>
                                    </div>         
                                  </div>
                                     );
                                  })
                               }



                                         

                         </div>
        );
    }
}