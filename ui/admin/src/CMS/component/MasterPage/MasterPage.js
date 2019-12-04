{/*import React, { Component, Suspense } from 'react';

import {Route, withRouter} from 'react-router-dom';

import axios        from 'axios';
import swal from 'sweetalert';

import PageHead from "../PageHead/PageHead.js";
import './MasterPage.css';


class MasterPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pageData:{},
			Blocks:[],
			blocks:""
		}; 
	}
componentDidMount(){
	
	var pageUrl = window.location.pathname;;
		// console.log("pageUrl = ",pageUrl);

		let a = pageUrl ? pageUrl.split('/') : "";
        // console.log("a==>",a[1]); 
        const urlParam =a[1];
        // console.log("urlParam  == ",urlParam);
	axios
        .get('http://iogapi.iassureit.com/api/pages/get/'+urlParam)
        .then((response)=>{
      		if (response) {
      			console.log("response.data",response.data);
		      	this.setState({
		      		pageData:response.data,
		      	});

    			var blockFromPage = response.data.pageBlocks;
		    	console.log("blockFromPage = ",blockFromPage);
			    for (var i = 0; i < blockFromPage.length; i++) 
			    {
			    	{
			   		 axios
				        .get('http://iogapi.iassureit.com/api/blocks/get/'+ blockFromPage[i].block_id)
				        .then((response)=>{
					        var blocks = this.state.Blocks;
					        blocks.push(response.data);
					        console.log("re",response.data);
					      	this.setState({
				      			Blocks:blocks
				      		});
				      	})
				      	.catch(function(error){
				        	console.log(error);
				          	if(error.message === "Request failed with status code 401")
		              		{
		                   		swal("Your session is expired! Please login again.","", "error");
		              		}
		     			})
	    			}
	 			}
			}
	    })
	      .catch(function(error){
	        console.log(error);
	          if(error.message === "Request failed with status code 401")
	              {
	                   swal("Your session is expired! Please login again.","", "error");
	              }
	      })
   		}

	render() {
		var data= this.state.pageData;
		console.log("sss",this.state.Blocks)
		console.log('pageData = ', data);
		// console.log("block Data => ",data.pageBlocks);	
		return (
			<div className="pageHgt">
				{
					this.state.pageData.pageHead 
					?
						<PageHead pageHeadData={this.state.pageData.pageHead} />
					:
						null
				}
				{
					this.state.Blocks && this.state.Blocks.length> 0
					?
						this.state.Blocks.map((result, index)=>{
							console.log(" block_id",result);
							var component = result.block_id.blockComponentName ? result.block_id.blockComponentName : 'Typecomponent1';
							console.log("component ===> > >",component);
							const NewPageComponent = React.lazy(() => import('../BlockTemplate/'+component+'/'+component+'.js'));
							console.log("NewPageComponent==>",NewPageComponent);
							var block_id=result._id;
							// console.log("block_id",block_id);
							return(
								<Suspense fallback={<div>Loading...</div>} key={index}>
						    		<NewPageComponent block_id={block_id}/>
						    	</Suspense>
					    	)
						})
					:
					null
				}
			</div>
		);
	}
}
export default withRouter(MasterPage);
*/}