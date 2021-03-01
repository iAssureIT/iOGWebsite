import React, {Component} from 'react';

// import $                  from 'jquery';
import './HomePage.css';
import axios       from 'axios';
import swal              from 'sweetalert';
import Banner                 from '../../allBlocks/Banner/Banner.js';
import Downstream             from '../../allBlocks/Downstream/Downstream.js';
import Upstream               from '../../allBlocks/Upstream/Upstream.js';
// import Socialmedia            from '../../allBlocks/Socialmedia/Socialmedia.js';
import Blogs                  from '../../allBlocks/Blogs/Blogs.js';
import Commonstream           from '../../allBlocks/Commonstream/Commonstream.js';
// import Commonimgblock         from '../../allBlocks/Commonimgblock/Commonimgblock.js';



export default class HomePage extends Component {
    constructor(props){
    super(props);
    this.state = {
    "Blogs" : [],
    
    };
    }

getBlogData(){
  axios

        .get('http://iogapi.iassureit.com/api/blogs/get/all/list')
        .then((response)=>{
           var FirstFiveblogs = response.data.slice(0, 5);
        // console.log("===>",response.data);
        this.setState({
            Blogs:FirstFiveblogs
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
  var pageUrl = window.location.pathname;
  var Blogs =[];
  this.getBlogData();

}

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="Bubble hidden-md hidden-sm hidden-xs" >
          <div className="Main_Cards__Bubble bub1"></div>
           <div className="Main_Cards__Bubble bub2"></div>
        </div>
      	<Banner />
        <Downstream />
        <Commonstream />
        <Upstream />
        <Blogs />
     </div>
    );  
  }
}

