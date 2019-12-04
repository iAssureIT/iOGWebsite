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
								icon        :"images/star.png"
								
							},	

							
							{
								featureTitle:"App2",
								featureText:" Precise classification and reporting of accounted and unaccounted losses",
								icon        :"images/star.png"
							},
						
						  ],

			"Applicationsright" : [
							{
								featureTitle:"App4",
								featureText:"The best source of input on production metrics to do an Actual Vs Plan LP retro analysis",
								icon        :"images/star.png"
							},	
						
							{

								featureTitle:"App6",
								featureText:"Facilitate traders in accurately positioning the crude and product opening inventory position in the market.",
                                icon        :"images/star.png"
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
								   <div className="col-lg-2  pull-right">
								   <img src={data.icon} className="iconclass"/>					    
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
	                      <img src="/images/apps.png" className="B3t_img"/>
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
								   <div className="col-lg-2">
								    <img src={data1.icon} className="iconclass"/>
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
				
			</div>	

		);
	}
}