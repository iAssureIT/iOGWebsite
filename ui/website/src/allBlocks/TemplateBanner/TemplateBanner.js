import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './TemplateBanner.css';


export default class TemplateBanner extends Component {

 


  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 innerBlocktepmlate NOPadding">
          <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
           <div class="BT1_line col-lg-1 col-lg-offset-2">
         </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
        {
        	this.props.tempalebannerData.map((data,index)=>{
        		return(
        		  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
        		   <h2 className="BT1_bannerTitle">{data.bannerTitle}</h2>
                   <img src={data.bannerimg} className="BT1_img"/>
        		  </div>
        	 );
        	})
         	
        }
        </div>
       </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    );  
  }
}

