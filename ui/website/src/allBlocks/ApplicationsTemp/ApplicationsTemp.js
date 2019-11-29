import React from 'react';
import './ApplicationsTemp.css';

export default class ApplicationsTemp extends React.Component {


	constructor(props) {
		super(props);
		this.state = {

			"ApplicationsTitle":[
			    {
                   ApplicationTitle:"Applications",
		    	}
			],

			"Applications"		: [



                            {
								featureTitle:"App1",
								featureText:"Accurate production data inflow for Refinery profitability assessment ",
								
							},	

							
							{
								featureTitle:"App2",
								featureText:" Precise classification and reporting of accounted and unaccounted losses",
								
							},
						
						  ],

			"Applicationsright" : [
							{
								featureTitle:"App4",
								featureText:"The best source of input on production metrics to do an Actual Vs Plan LP retro analysis",
								
							},	
						
							{

								featureTitle:"App6",
								featureText:"Facilitate traders in accurately positioning the crude and product opening inventory position in the market.",
                                featureicon:"/img/laptop.png"
							},	
							

							]		  
	      };
	}


	render() {
		var data  = this.state.Applications;
		var data1 = this.state.Applicationsright;
		var data2 = this.state.ApplicationsTitle;
		return (
			<div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
				  <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
		           <div class="B2T1_line col-lg-1 col-lg-offset-2">
		         </div>
		        </div>
		        { 
		        	data2.map((data2,index)=>{
		        	return(
		        		<h2 className="B2T_overviewTitle">{data2.ApplicationTitle}</h2>
		        		);
		        })
		    }
		        <h2>{data2.ApplicationTitle}</h2>
					<div className="mtop25">
						<div className="col-lg-12 col-md-12 B3T_AppDiv ">
						 <div className="col-lg-4 col-md-12">
						 {
		                	data && data.length > 0 ?
				      		data.map((data, index)=>{
	                	   return(
							   <div className="col-lg-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2  B2T_iconcircle pull-right">
								    <i className="fa fa-star B3T_star"></i>
								   </div>
							    </div>
								 <h3 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{data.featureTitle}</h3>
								</div> 
								 <div className><p className="text-right featuretext">{data.featureText}</p>
								 </div>
								</div>
								
							</div>	
							
							);
	                   	  })
				      		:
				      		null
	                     }
	                     </div>
	                     <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
	                      <img src="/images/1.png" className="B3t_img"/>
	                     </div>
	                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						 {
		                	data1 && data1.length > 0 ?
				      		data1.map((data1, index)=>{
	                	   return(
							   <div className="col-lg-12 col-sm-12 col-xs-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12 NOpadding">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2  B2T_iconcircle">
								    <i className="fa fa-star B3T_star"></i>
								   </div>
							     </div>
								 <h3 className="featuretitle text-left col-lg-9 NOpadding">{data1.featureTitle}</h3>
								</div> 
								 <div className><p className="text-left featuretext">{data1.featureText}</p>
								 </div>
								</div>
								
                             </div>
							
							);
	                   	  })
				      		:
				      		null
	                     }
	                     </div>
						</div>
			
					</div>
				</div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
				 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
                   <img src="/images/6.png" className="B3T1_img2"/>
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
			</div>	

		);
	}
}