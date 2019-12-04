import React from 'react';
import './AccountingUI.css';

export default class AccountingUI extends React.Component {



  

  render() {
    return(
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
             <img src="/images/acc.png" className="B3T1_img2"/>
            <div className="col-lg-offset-2 col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
            <div>
             <div className=" col-lg-1 B3T_circle1">
              <span className="B3T_circletxt">1300</span>
             </div>
             <span className="B3T_btmtxt">DAYS OF EXPERIENCE</span>
           </div>
           <div>
             <div className="col-lg-offset-1 col-lg-1 B3T_circle2">
              <span className="B3T_circletxt">1400</span>
              <span className="B3T_btmtxt txt2">SATISFY CLIENT</span>
             </div>
            </div> 
             <div className="col-lg-offset-2 col-lg-1 B3T_circle3">
              <span className="B3T_circletxt">1500</span>
               <span className="B3T_btmtxt txt2">SATISFY CLIENT</span>
             </div>
             <div className="col-lg-offset-7 col-lg-1 B3T_circle4">
              <span className="B3T_circletxt">1200</span>
               <span className="B3T_btmtxt txt2">AWARDS WON</span>
             </div>
            </div> 
        </div>
   </div>  

    );
  }
}
























