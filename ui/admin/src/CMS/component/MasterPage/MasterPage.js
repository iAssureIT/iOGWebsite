import React, { Component, Suspense } from 'react';

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
			blocks:"",
			ListOfBlocks : ""
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
				.get('/api/blocks/get/list')
				.then((response)=>{
						        // console.log("AllBlogs=",response.data);
						      	this.setState({
					      			ListOfBlocks:response.data
					      		},()=>{
					      				console.log("======>",this.state.ListOfBlocks);
					      		});
					      	})
			  	.catch(function (error) {
			    // handle error
			    	console.log(error);
			  	});
   		}

	render() {
		var data= this.state.pageData;
		console.log("ListOfBlocks",this.state.ListOfBlocks)
		console.log('pageData = ', data);
		// console.log("block Data => ",data.pageBlocks);	
		return (
			<div className="pageHgt">
				
				{
					this.state.ListOfBlocks && this.state.ListOfBlocks.length> 0
					?
						this.state.ListOfBlocks.map((result, index)=>{
							// console.log(" block_id",result);
							var component = result.blockComponentName ? result.blockComponentName : 'Typecomponent1';
							// console.log("component ===> > >",component);
							const NewPageComponent = React.lazy(() => import('../blockTemplate/'+component+'/'+component+'.js'));
							// console.log("NewPageComponent==>",NewPageComponent);
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
