import React from 'react';
// import './ApplicationsTemp.css';
import axios from 'axios';

export default class ApplicationsTemp extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    	first  :[],
    	second :[],
      blocks:{
        "blockTitle"     	 : "Applications",
        "fgImage   "      	 : "/images/dataHistorian.png",
        "blockSubTitle"      : "",
        "blockDescription"   : " ",
        "blockComponentName" : "DataHistorian",
        "blockType"          : "simple",
        "repeatedBlocks"     : 
                          [
                            {
		                          "Title"       : "Manufacturing site to record instrument readings",
		                          "SubTitle"    : "",
		                          "Description" : "Process (flow rate, valve position, vessel level, temperature, pressure) Production Status (machine up/down, downtime reason tracking)",
		                          "Image"       : "/images/star.png",
		                          "Link"        : "/xyz"
		                      },
		                      {
		                        "Title"         : "Utilities",
		                          "SubTitle"    : "",
		                          "Description" : "steam and electricity production and distribution",
		                          "Image"       : "/images/star.png",
		                          "Link"        : "/abc"
		                      },
		                      {
                        "Title"         : "Heavy Equipment monitoring ",
                          "SubTitle"    : "",
                          "Description" : "recording of run hours, instrument and equipment readings for predictive maintenance ",
                          "Image"       : "/images/star.png",
                          "Link"        : "/xyz"
                      },
                      {
                        "Title"         : "Environmental monitoring",
                          "SubTitle"    : "",
                          "Description" : "weather, sea level, atmospheric conditions, groundwater contamination",
                          "Image"       : "/images/star.png",
                          "Link"        : "/abc"
                      }

                     

        ],
       

			        "bgImage"       : "",
			        "bgVideo"       : "",
			        "fgImage"       : "",
			        "fgVideo"       : ""

      },
      blockID:"",
      block_id:""

    };    
  }
componentDidMount(){
	    /*var length   = this.state.blocks.repeatedBlocks.length();
        var split    = parseInt(length/2);
        var indexToSplit = this.state.blocks.blocksrepeatedBlocks.indexOf(split);
        console.log("indexToSplit",indexToSplit+1)

        var first = this.state.blocks.repeatedBlocks.slice(0, split);
        var second = this.state.blocks.repeatedBlocks.slice(split,length);
        
        console.log("first",first,second)
         this.setState({
                first:this.state.first
              });
         this.setState({
                second:this.state.second
              });*/
// console.log("==>",this.props.block_id);



          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                /*var blocks = this.state.blocks;
                blocks.push(response.data);*/
                this.setState({
                  blocks:response.data
                  });
                })
                .catch(function(error){
                  console.log(error);
                    if(error.message === "Request failed with status code 401")
                      {
                          // swal("Your session is expired! Please login again.","", "error");
                      }
              })
            }
      this.setState({
                block_id:this.props.block_id
              });
}

	render() {
		
		return (
			<div>
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
				    <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
		                <div class="B2T1_line col-lg-1 col-lg-offset-2">
		            </div>
		        </div>
		         <h2 className="B2T_overviewTitle">{this.state.blocks.blockTitle}</h2>		
					<div className="mtop25">
						<div className="col-lg-12 col-md-12 B3T_AppDiv ">
						 <div className="col-lg-4 col-md-12">
						 { 
                    this.state.blocks.repeatedBlocks && this.state.blocks.repeatedBlocks.length>0?
                        this.state.blocks.repeatedBlocks.map((result, index)=>{
                          return(
							   <div className="col-lg-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2  pull-right">
								   <img src={result.Image} className="iconclass img-responsive"/>					    
								   </div>
							    </div>
								 <h4 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{result.Title}</h4>
								</div> 
								 <div className><p className="text-right featuretext" dangerouslySetInnerHTML={ { __html: this.state.blocks.blockDescription } }  ></p>
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
                      <img src={this.state.blocks.fgImage} className="B3t_img"/>
                     </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						  { 
                    this.state.blocks.repeatedBlocks1 && this.state.blocks.repeatedBlocks1.length>0?
                        this.state.blocks.repeatedBlocks1.map((result, index)=>{
                          return(
							   <div className="col-lg-12 col-sm-12 col-xs-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12 NOpadding">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2">
								    <img src={result.Image} className="iconclass img-responsive"/>
								   </div>
							     </div>
								 <h4 className="featuretitle text-left col-lg-9 NOpadding">{result.Title}</h4>
								</div> 
								 <div className><p className="text-left featuretext">{result.Description}</p>
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