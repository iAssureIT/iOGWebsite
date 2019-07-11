import React,{Component} from 'react';
// import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $ from 'jquery';

import './Careerimpact.css';

class Careerimpact extends Component{
  constructor(){
    super();
     this.state={
     }

  }
  
  componentDidMount() {

  }

  render(){
    return(
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
		 <div className="row">
      <div>
        <div className="lineee1 col-lg-12 col-lg-offset-6"></div>
      </div>       
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
               <div className="col-lg-12">
                 <h2 className="career_para-top2">
                 <b>Be a part of</b><br></br>
                 our exciting journey!
                 </h2>
            <div className="row spacing1">
               <div className="col-xs-7">
                  <div className="position_title_1" >
                   <a href="/contact-us">Strategic Business<br></br>
                                        Developement Manager<br></br>
                  </a>
                  </div>
               </div>
               <div className="col-xs-5 text-right">
                 <div className="position_wrapper">
                  <div className="position_content">
                    <div className="position_department">
                    <b>Business<br></br> 
                    Development</b>
                    </div>
                    <div className="position_location">
                    India
                    </div>
                  </div>
                  <div className="position_button">
                  <img src="" alt width="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 first-line"></div>
            </div>

            <div className="row spacing2">
               <div className="col-xs-7">
                  <div className="position_title_2">
                   <a href="/contact-us">Strategic Business<br></br>
                                        Developement Manager
                  </a>
                  </div>
               </div>
               <div className="col-xs-5 text-right">
                 <div className="position_wrapper2">
                  <div className="position_content2">
                    <div className="position_department2">
                    <b>Business<br></br> 
                    Developement<br></br>
                    </b>
                    </div>
                    <div className="position_location2">
                    United Arab Emirates
                    </div>
                  </div>
                  <div className="position_button2">
                  <img src="" alt width="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 second-line"></div>
            </div>

            <div className="row spacing3">
               <div className="col-xs-7">
                  <div className="position_title_3">
                   <a href="/contact-us">Vertical Lead</a>
                  </div>
               </div>
               <div className="col-xs-5 text-right">
                 <div className="position_wrapper3">
                  <div className="position_content3">
                    <div className="position_department3">
                    <b>Business <br></br> 
                    Developement<br></br>
                    </b>
                    </div>
                    <div className="position_location3">
                    India
                    </div>
                  </div>
                  <div className="position_button3">
                  <img src="" alt width="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 third-line"></div>
            </div>

            <div className="row spacing4">
               <div className="col-xs-7">
                  <div className="position_title_4">
                   <a href="/contact-us">Copywriter</a>
                  </div>
               </div>
               <div className="col-xs-5 text-right">
                 <div className="position_wrapper4">
                  <div className="position_content4">
                    <div className="position_department4">
                    <b>Marketing</b>
                    </div>
                    <div className="position_location4">
                    United Arab Emirates
                    </div>
                  </div>
                    <div className="position_button4">
                      <img src="" alt width="" />
                    </div>
                  </div>
               </div>
              <div className="col-lg-6 fourth-line"></div>

              <div>
                <button className="col-lg-6 col-lg-offset-7 button_2"><span>See all open positions</span></button>
               </div>
               
            </div>
             </div>
             </div> 

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <div className="img_2">
                      <img src="/images/career1.jpg" alt="" className="career2_img" />
                    </div>
                </div>

                
        </div>
      </div>
    </div>

    );
  }
}


export default Careerimpact;
