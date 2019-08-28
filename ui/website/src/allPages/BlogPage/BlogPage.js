import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';

import BlogPagecomponent     from '../../allBlocks/BlogPagecomponent/BlogPagecomponent.js';


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
                            <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12 mt50">
                                <BlogPagecomponent />
                                // <div className="blankblock "></div>
                            </div>

                      </div>
                  </div>
          </div>    
    );
  }
}

export default BlogPage;



