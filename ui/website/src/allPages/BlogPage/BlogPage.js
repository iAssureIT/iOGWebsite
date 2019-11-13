import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';

// import BlogPagecomponent     from '../../allBlocks/BlogPagecomponent/BlogPagecomponent.js';
import Blogcomponents     from '../../allBlocks/Blogcomponents/Blogcomponents.js';


import './BlogPage.css';
class BlogPage extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  componentDidMount() {
    $(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });

  }

  render(){
    return(
          <div>    
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 blogPage-wrap">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="upstreamcontentheader col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 text-center ">                        
                  <hr/>
                  <h1 className="lightbluetext latestblog latestblog1">
                      <b>Blogs</b> 
                  </h1>
                </div>
                <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    {<Blogcomponents />}
                {/*    <BlogPagecomponent />*/}
                </div>
              </div>
            </div>
          </div>    
    );
  }
}

export default BlogPage;



