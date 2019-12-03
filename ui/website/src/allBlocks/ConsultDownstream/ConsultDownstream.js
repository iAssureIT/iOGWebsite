import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './ConsultDownstream.css';


export default class ConsultingServices extends Component {

 Downstreamdata(){
        return [
            
            {
                ConsultDown    : "BUSINESS PROCESS MAPPING",
                imageText      : "Design Efficient FEED that strikes the right balance of IT investments and the business",
               
            }, 
            {
                ConsultDown    : "FEED FOR INTEGRATED",
                imageText      : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
               
            },  
             {
                ConsultDown    : "DOWNSTREAM OIL & EXPERT",
                imageText      : "Assessment of the business requirements, analyze and enhance the Downstream",
               
            },  
            {
                ConsultDown    : "OPTIMIZE THE OF EXISTING",
                imageText      : "Finding simplification opportunities to reduce the cost of application support",
               
            }, 
            {
                ConsultDown    : "BUSINESS CASE",
                imageText      : "Devise structured ap-proach to transition and manage applications to",
               
            },  
            {
                ConsultDown    : "REVIEW OF AREAS NEEDING",
                imageText      : "Detailed Analysis of Business Processes & Client quirement Reengineering processes to align",
               
            },
            {
                ConsultDown    : "ESTABLISHING INDUSTRY",
                imageText      : "Ensure process streamlining & standardization and efficiency improvements thereof",
               
            },  
            {
                ConsultDown    : "ASSESSMENT OF READINESS",
                imageText      : "Review of performance on key metrics Identification of opportunities for Infrastructure Rationalizationscing",
               
            },    
                  
               
        ]
    }


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktConsult NOPadding">
        <div class="Bubble">
         <div class="Main_Cards__Bubble1 bub11">
       </div>
         <div class="Main_Cards__Bubble1 bub21">
        </div>
       </div>
        <h1 className="downimgtext text-center">iOGConsult for Downstream</h1>
        <p className="downimg_p_txt">We at iOG Solutions believe in providing solutions that are as 
           unique as our clients’ requirements.<br/>Following is a partial list
           of our consulting services under our iOGConsult service arm</p>
        <div className="col-lg-offset-1 col-lg-12 col-md-12 col-sm-12 col-xs-12">
         
       {
          this.Downstreamdata().map((data,index)=>{
            return(
             
               <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12 " id={"consultdown_data"+index}>
                 <div className="col-lg-12 col-md-12">
                 <h3 id={"downimg_text"+index}>{data.ConsultDown}</h3>
                 <p id="downimg_p_text">{data.imageText}</p>
                </div>
               </div>
              );

          })
        }
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

