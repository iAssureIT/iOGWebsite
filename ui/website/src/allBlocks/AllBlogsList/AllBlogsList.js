import React from 'react';
import axios       from 'axios';
import swal              from 'sweetalert';
import Moment from 'react-moment';
// import swal              from 'sweetalert';
import './AllBlogsList.css';

export default class AllBlogsList extends React.Component {

constructor(props) {
	super(props);
	this.state = {

	"Blogs" : {}

	 
	};
}
deleteBlog(event){
event.preventDefault();
	var id= event.target.id;
	// console.log("id delet",id);
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

      	.get('/api/blogs/get/all/list')
      	.then((response)=>{
       	// console.log("===>",response.data);
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
	// console.log("Allblogs=>",Allblogs);
	var subscribed = false;
	   const token = localStorage.getItem("user_ID");
	return (

		<div>
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 container-fluid AllBlogsBox" style={{padding:"0px"}}>
				{/*<div class="upstreamcontentheader col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center ">
				  	<div class="lightbluetext latestblog blogtext1 blogs_newhwading">
				  		<b>Blogs</b>
				    </div>
				</div>*/}
			    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Bolgs_div ">
			       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 BolgsHoghDef">
		          {
		            Allblogs && Allblogs.length > 0 ?
		    		Allblogs.map((data, index)=>{
		            return(
		            	 
				          	<div className=" pricehover-float All1blog1 z50 col-lg-3 col-md-3 col-sm-6 col-xs-12 Allblog"><a href={"/singleblog/"+data.blogURL}></a>
				        			<a href={"/singleblog/"+data.blogURL}>
									<img className="img-responsive AllblogImgB" src={data.bannerImage ? data.bannerImage.path : ""} alt="Bannerpng"/>
									<p className="blogDate blogsText mtop20 graycolor"><Moment format=" MMMM D YYYY ">{data.createdAt}</Moment></p>
									<h4 className="blogTitle blogSummeryp10" id="data"><b>{data ? data.blogTitle : ""}</b></h4>
									{/*<p className="blogPara blogSummeryp10 graycolor">{data ? data.summary: "" }</p>*/}
									</a>
								</div>
		          		
		          		);
		        	})
		        	:
		        	<h4 className="noBlogs p10 textAlignCenter"><b>No blogs found</b></h4>
		           }
		         </div>
		        </div>
			</div>
		</div>
		);
	}
}

