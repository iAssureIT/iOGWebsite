import React from 'react';
import axios from 'axios';

var first = 0;
var second = 0;
export default class TitleRrpeatedImgGrp extends React.Component {
constructor(props) {
    super(props);
    this.state = {
    	element0  :[],
    	element1  :[],
    	element2  :[],
    	element3  :[],
    	
        blocks:{
        "blockTitle"     	 : "",
        "fgImage   "      	 : "",
        "blockSubTitle"      : "",
        "blockDescription"   : " ",
        "blockComponentName" : "DataHistorian",
        "blockType"          : "simple",
        "repeatedBlocks"     : 
                          [
                            {
		                          "Title"       : "",
		                          "SubTitle"    : "",
		                          "Description" : "",
		                          "Image"       : "",
		                          "Link"        : "/xyz"
		                      },
		                      {
		                        "Title"         : "",
		                          "SubTitle"    : "",
		                          "Description" : "",
		                          "Image"       : "",
		                          "Link"        : "/abc"
		                      },
		                    {
	                        	"Title"         : " ",
	                          	"SubTitle"      : "",
	                          	"Description"   : "",
	                          	"Image"         : "",
	                          	"Link"          : "/xyz"
                      		},
		                    {
		                        "Title"       : "",
		                        "SubTitle"    : "",
		                        "Description" : "",
		                        "Image"       : "",
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

	// console.log("this.state.blocks.repeatedBlocks",this.state.blocks.repeatedBlocks);
	for(var i=0;i<this.state.blocks.repeatedBlocks.length;i++)
	{
		console.log("this.state.blocks.repeatedBlocks",this.state.blocks.repeatedBlocks[i].Title)
	}


	   /* var element0 =this.state.blocks.repeatedBlocks[0];
	    var element1 =this.state.blocks.repeatedBlocks[1];
		var element2 =this.state.blocks.repeatedBlocks[2];
		var element3 =this.state.blocks.repeatedBlocks[3];		
		
		 var element0_txt =this.state.blocks.repeatedBlocks[0].Description;
		 var element0_title =this.state.blocks.repeatedBlocks[0].Title;*/
	/*	
	    var length   = this.state.blocks.repeatedBlocks;
	    

		var first  = length.slice(0,2);
	
		var second = length.slice(2,4);
		*/
		/*this.setState({
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
              });*/


		var length = this.state.blocks.repeatedBlocks.length;
      var split    = parseInt(length/2);
		console.log("split",split);
       	/*var indexToSplit = this.state.blocks.blocksrepeatedBlocks.indexOf(split);
        console.log("indexToSplit",indexToSplit+1)

        console.log("first",first,second)
        */
         first = this.state.blocks.repeatedBlocks.slice(0, split).length;
         second = this.state.blocks.repeatedBlocks.length;
        
// console.log("==>",this.props.block_id);



          {
             axios
                .get('/api/blocks/get/'+this.props.block_id)
                .then((response)=>{
                	console.log("response----->>",response);
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
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-sm hidden-xs"style={{marginBottom:"50px"}}>
		        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  contentheadernew text-center">
                    <hr/>
                     <h2 style={{color:"#333"}}><b>{this.state.blocks.blockTitle}</b></h2>
                    </div>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
					   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                         <div className="">
						 {
					   	this.state.blocks.repeatedBlocks ?
					   	this.state.blocks.repeatedBlocks.slice(0,first).map((result, index)=>{
            			return(
							  <div>
							    <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 "> 
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2   pull-right">
								     <img src={result.Image} className="iconclass"/>					    
								   </div>
							     </div>
								 <h4 className="featuretitle featuretitleleft text-right col-lg-9 pull-right">{result.Title}</h4>	
								 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
								   <p className="text-right featuretext" dangerouslySetInnerHTML={{ __html: result.Description } }  ></p>
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
	      
	                	<div className="col-lg-4 col-md-4 hidden-sm hidden-xs ApplicationImg">
	                      <img src={this.state.blocks.fgImage} className=" img-responsive newApplicationImage" style={{height:"350px"}} />
	                    </div>
						 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12"style={{paddingLeft:"0px"}}>
						  {
						   	this.state.blocks.repeatedBlocks ?
						   	this.state.blocks.repeatedBlocks.slice(first,second).map((result, index)=>{
            			     return(
							   <div>
								<div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								 <div className="col-lg-2  pull-left">
								   <img src={result.Image} className="iconclass"/>					    
								 </div>
							    </div>
								 <h4 className=" text-left featuretitle featuretitleleft text-left col-lg-9 pull-left">{result.Title}</h4>
								 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <p className="text-left featuretext  rightapplications" dangerouslySetInnerHTML={{ __html: result.Description } }  ></p>
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
		    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hidden-lg hidden-md ">
			  <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4 col-xs-offset-2 col-md-offset-5 col-lg-offset-5">
		        <div class="B2T1_line col-lg-4 col-lg-offset-2 ">
		        </div>
		        {console.log("second",second)}
		        </div>
		         <h2 className="B2T_overviewTitle text-center">{this.state.blocks.blockTitle}</h2>		
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  ">
					   <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                         <div className="row">
						 {
					   	this.state.blocks.repeatedBlocks ?
					   	this.state.blocks.repeatedBlocks.slice(0,first).map((result, index)=>{
            			return(
							  <div>
							    <div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding"> 
								  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <div className="col-lg-2   pull-left">
								     <img src={result.Image} className="iconclass"/>					    
								   </div>
							     </div>
								 <h4 className="featuretitle featuretitleleft text-left col-lg-9 pull-left">{result.Title}</h4>	
								 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding">
								   <p className="text-left featuretext" dangerouslySetInnerHTML={{ __html: result.Description } }  ></p>
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
	      
	                	<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 hidden-xs">
	                      <img src={this.state.blocks.fgImage} className="B3t_img img-responsive"  />
	                    </div>
						 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
						  {
						   	this.state.blocks.repeatedBlocks ?
						   	this.state.blocks.repeatedBlocks.slice(first,second).map((result, index)=>{
            			     return(
							   <div>
								<div className=" col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								 <div className="col-lg-2  pull-left"style={{paddingLeft:"5px"}}>
								   <img src={result.Image} className="iconclass"/>					    
								 </div>
							    </div>
								 <h4 className=" text-left featuretitle featuretitleleft text-left col-lg-9 pull-left"style={{paddingLeft:"5px"}}>{result.Title}</h4>
								 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
								   <p className="text-left  featuretextInmob rightapplications"style={{marginLeft:"5px"}} dangerouslySetInnerHTML={{ __html: result.Description } }  ></p>
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
			

		);
	}
}