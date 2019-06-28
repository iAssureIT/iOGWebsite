import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';


import './Headingcomponent.css';
class Headingcomponent extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  componentDidMount() {

  }

  render(){
    return(
    <div>
        <div className="container bw1">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                     <div className="row">
                       <img className="iogimgblock1" src="images/iog1.png" />
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                     <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12 bw1">
                      <span>OUR PROMISE</span>
                      <p>Ixaris values diversity and inclusion.
                         We endeavour to provide a hiring and working experience 
                         in which all people feel they are equally respected and valued.
                         We celebrate what makes you different.</p>
                     </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                             <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                               <span>OUR PROMISE</span>
                               <p>Ixaris values diversity and inclusion.
                                 We endeavour to provide a hiring and working experience 
                                 in which all people feel they are equally respected and valued.
                                 We celebrate what makes you different.</p>
                             </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                             <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                               <span>OUR PROMISE</span>
                               <p>Ixaris values diversity and inclusion.
                                 We endeavour to provide a hiring and working experience 
                                 in which all people feel they are equally respected and valued.
                                 We celebrate what makes you different.</p>
                             </div>
                           </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                             <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                               <span>OUR PROMISE</span>
                               <p>Ixaris values diversity and inclusion.
                                 We endeavour to provide a hiring and working experience 
                                 in which all people feel they are equally respected and valued.
                                 We celebrate what makes you different.</p>
                             </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                             <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                               <span>OUR PROMISE</span>
                               <p>Ixaris values diversity and inclusion.
                                 We endeavour to provide a hiring and working experience 
                                 in which all people feel they are equally respected and valued.
                                 We celebrate what makes you different.</p>
                             </div>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                     <div className="iogblock1text col-lg-10 col-lg-offset-1 col-md-12 col-sm-12 col-xs-12">
                      <span>OUR PROMISE</span>
                      <p>Ixaris values diversity and inclusion.
                         We endeavour to provide a hiring and working experience 
                         in which all people feel they are equally respected and valued.
                         We celebrate what makes you different.</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>    
    );
  }
}

export default Headingcomponent;



