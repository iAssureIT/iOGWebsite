import React from 'react';
// import './ApplicationsTemp.css';
import axios from 'axios';

export default class TitleRrpeatedImgGrp extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    	element0  :[],
    	element1  :[],
    	element2  :[],
    	element3  :[],
    	element0_txt  :"",
    	element0_title:"",
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

	    var element0 =this.state.blocks.repeatedBlocks[0];
	    var element1 =this.state.blocks.repeatedBlocks[1];
		var element2 =this.state.blocks.repeatedBlocks[2];
		var element3 =this.state.blocks.repeatedBlocks[3];		
		
		 // var element0_txt =this.state.blocks.repeatedBlocks[0].Description;
		 var element0_title =this.state.blocks.repeatedBlocks[0].Title;
	/*	
	    var length   = this.state.blocks.repeatedBlocks;
	    
        var split    = parseInt(length/2);

		var first  = length.slice(0,2);
	
		var second = length.slice(2,4);
		*/
		this.setState({
                element0:this.state.element0
              });
		this.setState({
                element0_txt:this.state.element0_txt
              });
		this.setState({
                element0_title:this.state.element0_title
              });
         this.setState({
                element1:this.state.element1
              });
         this.setState({
                element2:this.state.element2
              });
         this.setState({
                element3:this.state.element3
              });


      /*  var indexToSplit = this.state.blocks.blocksrepeatedBlocks.indexOf(split);
        console.log("indexToSplit",indexToSplit+1)

        var first = this.state.blocks.repeatedBlocks.slice(0, split);
        var second = this.state.blocks.repeatedBlocks.slice(split,length);
        
        console.log("first",first,second)
         */
// console.log("==>",this.props.block_id);



          {
             axios
                .get('http://iogapi.iassureit.com/api/blocks/get/'+this.props.block_id)
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
		var element0 =this.state.blocks.repeatedBlocks[0];
	    var element1 =this.state.blocks.repeatedBlocks[1];
		var element2 =this.state.blocks.repeatedBlocks[2];
		var element3 =this.state.blocks.repeatedBlocks[3];
		 var element0_title =this.state.blocks.repeatedBlocks[0].Title;
		
		
		return (
		
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
				  <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-lg-offset-5">
		           <div class="B2T1_line col-lg-1 col-lg-offset-2">
		         </div>
		        </div>
		         <h2 className="B2T_overviewTitle">{this.state.blocks.blockTitle}</h2>		
					<div className="mtop25">
						<div className="col-lg-12 col-md-12 B3T_AppDiv ">
						 <div className="col-lg-4 col-md-12">
						
							   <div className="col-lg-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2  pull-right">
								   <img src={this.state.element0.Image} className="iconclass"/>					    
								   </div>
							    </div>
								 <h4 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{this.state.element0_title.Title}</h4>
								</div> 
								 <div className><p className="text-right featuretext" dangerouslySetInnerHTML={ { __html: this.state.element0.Description } }  ></p>
								 </div>
								</div>		
							</div>	
							<div className="col-lg-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2  pull-right">
								   <img src={this.state.element1.Image} className="iconclass"/>					    
								   </div>
							    </div>
								 <h4 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{this.state.element1.Title}</h4>
								</div> 
								 <div className>
								 {console.log("text====>",this.state.element1.Description)}
								  <p className="text-right featuretext"dangerouslySetInnerHTML={ { __html: this.state.element1.Description } }></p>
								 </div>
								</div>		
							</div>	
	                    </div>
	                     <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
	                      <img src={this.state.blocks.fgImage} className="B3t_img"/>
	                     </div>
	                      <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						    <div className="col-lg-12 col-sm-12 col-xs-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12 NOpadding">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2 ">
								    <img src={this.state.element2.Image} className="iconclass"/>
								   </div>
							     </div>
								 <h4 className="featuretitle text-left col-lg-9 NOpadding">{this.state.element2.Title}</h4>
								</div> 
								 <div className><p className="text-left featuretext"dangerouslySetInnerHTML={ { __html: this.state.element2.Description } }></p>
								 </div>
								</div>	
                             </div>	
							   <div className="col-lg-12 col-sm-12 col-xs-12">
								<div className=" col-lg-10 col-md-12">
								 <div className="col-lg-12 NOpadding">
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2">
								    <img src={this.state.element3.Image} className="iconclass"/>
								   </div>
							     </div>
								 <h4 className="featuretitle text-left col-lg-9 NOpadding">{this.state.element3.Title}</h4>
								</div> 
								 <div className><p className="text-left featuretext" dangerouslySetInnerHTML={ { __html: this.state.element3.Description } }></p>
								 </div>
								</div>	
                             </div>	
                             </div>
	                     </div>
						</div>
					</div>
							
			

		);
	}
}