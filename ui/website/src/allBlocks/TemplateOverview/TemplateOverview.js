import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './TemplateOverview.css';


export default class TemplateOverview extends Component {

 

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate1 NOPadding">
        <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="B2T1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {
          this.props.templateOverviewData.map((data,index)=>{
            return(
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <h3 className="B2T_overviewTitle text-center">{data.overviewTitle}</h3>
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="col-lg-6 col-md col-sm-12 col-xs">
                  <p className="B2T_p">{data.overviewtext}</p>
                  <div>
                  <input type="button" className="col-lg-3 col-md-3 col-sm-8 col-xs-8 btn blogbtn1 lightbluebg buttonhover B2T_btn" value="Read More"/>
                   <i className=" col-lg-1 readmore fa fa-angle-double-right"></i>
                  </div>
                </div>
                <div className="col-lg-6 col-md col-sm-12 col-xs">
                  <img src={data.bannerimg} className="col-lg-offset-4 B2T_overviewTxt"/>
                </div>
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

