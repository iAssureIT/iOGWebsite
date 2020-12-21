import React from 'react';
import "./AllBlogsBanner.css";


export default class AllBlogsBanner extends React.Component {
	constructor(props) {
		super(props);
	}

	
render() {
		return (
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  NOPadding">
			  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding" style={{marginTop:"30px"}}>
	              <h2 className="BT1_bannerTitleblog_res text-center HistorianTitle text-center"><b>Blogs</b></h2>
	               <div className="dynamicpageimg BT1_img1"></div>
	            </div>
			</div>
		);
	}
}

