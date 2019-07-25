import React, {Component} from 'react';

// import $                  from 'jquery';
import './Planspage.css';

import Commonplansblock  from '../../allBlocks/Commonplansblock/Commonplansblock.js';

export default class Planspage extends Component {
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


  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="">
          <Commonplansblock data1={this.PlanData()} />
          <Commonplansblock data2={this.PlanData1()} />
        </div>
      </div>
    );  
  }
}

