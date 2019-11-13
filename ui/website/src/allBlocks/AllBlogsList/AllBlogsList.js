import React 			 from 'react';
import axios       		 from 'axios';
import swal              from 'sweetalert';
// import Moment 			 from 'react-moment';

import './AllBlogsList.css';

export default class AllBlogsList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

			"Blogs"		: {}

						  
	};
	}
deleteBlog(event){
	event.preventDefault();
	var id= event.target.id;
	console.log("id delet",id);
	 swal({
          title: "Are you sure you want to delete this Blog?",
          text: "Once deleted, you will not be able to recover this Blog!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((success) => {
            if (success) {
            	axios
			    .delete("/api/blogs/delete/"+id)
			    .then((response)=>{
			     	this.getBlogData();
			       swal("Your Blog is deleted!");
			    })
			    .catch((error)=>{
			       console.log("error = ", error);              
			    });
            
              
            } else {
            swal("Your Blog is safe!");
          }
        }); 
}
getBlogData(){
	axios
      .get('http://iogapi.iassureit.com/api/blogs/get/all/list')
      .then((response)=>{
       console.log("===>",response.data);
      	this.setState({
      			Blogs:response.data
      		});
      })
      .catch(function(error){
        console.log(error);
          if(error.message === "Request failed with status code 401")
              {
                   swal("Your session is expired! Please login again.","", "error");
                   this.props.history.push("/");
              }
      })
}
componentDidMount(){
	var Blogs =[];
	this.getBlogData();

}
render() {
		var Allblogs = this.state.Blogs;
		console.log("Allblogs=>",Allblogs);
		var subscribed = false;
   		const token = localStorage.getItem("user_ID");
		return (
			<div className="container-fluid AllBlogsBox" style={{padding:"0px"}}>
          		<div className="col-lg-12">
	          		{
            		Allblogs && Allblogs.length > 0 ?
	      				Allblogs.map((data, index)=>{
            					return(
				          			<div className="col-lg-3 Allblog">
				          				<div className="All1blog1 z50">
											<img className="img-responsive AllblogImgB" src={data.bannerImage ? data.bannerImage.path : ""} alt="Bannerpng"/>
											<a href={"/blog/"+data.blogURL}>
												<p className="blogDate blogSummeryp10 mtop20 graycolor">{data.createdAt}</p>
												<h4 className="blogTitle blogSummeryp10"><b>{data ? data.blogTitle : ""}</b></h4>
												<p className="blogPara blogSummeryp10 graycolor">{data ? data.summary: "" }</p>
											</a>
												
											
				          				
										</div>

				          			</div>
				          			);
        					})
        				:
        				<h4 className="noBlogs p10 textAlignCenter"><b>No blogs found</b></h4>
            		}				
	          		
          		</div>
			</div>
		);
	}
}
