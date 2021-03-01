import React from 'react';
import "./SingleBlogBanner.css";
import $                              from 'jquery';
export default class SingleBlogBanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"blogTitle":"",
		};
	}
	componentDidMount(){
		var pageUrl = window.location.pathname;
			console.log("pageUrl now inblogggs = ",pageUrl);
			let a = pageUrl ? pageUrl.split('/') : "";
			 var urlParam =a[1];
			 if (urlParam == "singleblog"){
			 	$('.container-fluid').css("padding",'0px');
			 }
		this.setState({
		})
	}
	render() {
		return (
			<div className="col-lg-12 nopadding sbbannerWall" style={{backgroundImage:'url('+encodeURI(this.props.bannerImage)+')'}}>
				<div className="middle">									    
			    {/*	<a href={"/cms/blogs-form/"+this.props.blogURL} className="hoverbk"><i className="fa fa-pencil wclr"></i></a>
			    	<i className="fa fa-trash rclr hoverbbk" url={this.props.blogURL} onClick={this.deleteBlog.bind(this)}></i>
			 	*/}
			 	</div>
				<div className="col-lg-12 sbcentered">
					<div className="col-lg-12 sbbtextcentered">
						<div className="blogTitle_Single fs72">{this.props.blogTitle}</div>
						<p className="col-lg-8 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-2 col-lg-offset-2 fs24"> {/*When you are alone for days or weeks at a time, you eventually become
							drawn to people. Talking to randos is the norm. After a long time I could
							witness the sunrise. I could feel the sun rays falling on my body.*/}{this.props.summary}</p>

					</div>
					

				</div>
			</div>
		);
	}
}
