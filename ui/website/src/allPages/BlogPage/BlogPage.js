import React,{Component} from 'react';
import { render } from 'react-dom';

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
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contactcontent2-wrap">
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contacticonwrap">
                              <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-2 contactcontbackimg">
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 col-lg-offset-3 contacticons">
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-whatsapp contacticon2"  aria-hidden="true"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-linkedin contacticon2"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-twitter contacticon2"></i>
                                      </div>
                                      <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                            <i className="fa fa-envelope contacticon2"></i>
                                      </div>
                                    </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 contacttextmargin2">
                                <BlogPagecomponent />
                            </div>

                      </div>
                  </div>
          </div>    
    );
  }
}

export default BlogPage;



