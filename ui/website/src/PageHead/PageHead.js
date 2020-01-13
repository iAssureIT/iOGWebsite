import React, {Component} from 'react';
/*import { render } from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';*/
import {Helmet} from "react-helmet";
import swal from 'sweetalert';

/*import  { cmsPageMaster } from '/imports/CMS/Pages/cmsPage.js';*/



export default class PageHead extends Component{
	constructor(props){
		super(props);
		this.state = {

		};
	}

	handleChange(event){
		event.preventDefault();
    	this.setState({
			});
	}
	componentDidMount(){
		/*var pageHeadData= this.props.pageHeadData
		console.log("pageHeadData in cdm =",pageHeadData);*/

	}

render(){
		var pageHeadData= this.props.pageHeadData;
		console.log("pageHeadData in render=",pageHeadData);
		return( 
			<div> 
				<Helmet>
					<meta charset="UTF-8" />
					<meta name="description" content={pageHeadData? pageHeadData.pageDescription:""} />
					<meta name="keywords" content={pageHeadData? pageHeadData.pageWords :""} />
					<meta name="author" content={pageHeadData.pageAuthor} />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />

					<meta name="og:title" property="og:title" content={pageHeadData.ogtitle} />
					<meta name="og:image" property="og:image" content={pageHeadData.ogimage} />
					{/*<meta name="og:url"   property="og:url" content={pageHeadData.ogdescription} />*/}
					<meta name="og:description" property="og:description" content={pageHeadData.ogdescription} />
					<title>{pageHeadData.pageAuthor}</title>
				</Helmet>
			</div>
		);
	}
}

{/*
export default withTracker( props => {
	
	const cmsData = Meteor.subscribe('getPageHead');
	/*console.log("PageHead = cmsData ===>",cmsData);
	const pageDetails = cmsPageMaster.findOne({"PageHead":PageHead});
	/*console.log("PageHead = pageDetails ===>",pageDetails);
    return {
	    'pageDetails':pageDetails,	     
    };
})(PageHead);		
*/}

