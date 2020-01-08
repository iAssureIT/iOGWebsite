import React,{Component} from 'react';
import { render } from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import $ from 'jquery';

import './InformationComponent.css';

class InformationComponent extends Component{
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
               <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                   <div className="col-lg-12">
                   <h2 className="career_para-top5">
                   The perks of<br></br>
                   working at Ixaris
                   </h2>
                   </div>
                </div>
              </div>
         </div>

             <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">RELOCATION ASSISTANCE</p>
                </div>
               
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">MODERN CENTRAL OFFICE</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_1">TRAINING & DEVELOPMENT</p>
               </div>
             </div>

             <div className="row">
               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_4">HEALTH INSURANCE</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_5">GYM MEMBERSHIP</p>
               </div>

               <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <div className="icnn_1">
                   <img src="/images/icnn1.svg" alt="" className=""  />
                 </div>
                    <p className="txt_6">SOCIAL EVENTS</p>
               </div>
             </div>

              <div>
                <button className="button_3"><span>Learn more</span></button>
              </div>

              <div className="row row_spacingg">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h2 className="career_para-top6">
                   Get to Know <br></br>
                   the Ixarians
                   </h2>
                </div> 
             </div> 

             <div className="col-lg-12 blk_ht1">
              <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">Aldrin Seychell</p>
                  <div className="team-member-position">Principal Software Engineer</div>
                  <div className="quote_1">
                  “Ixaris does not shy away from new<br></br>
                  challenges, and one of the best skills I<br></br>
                  have learned here is to push myself. I<br></br>
                  have progressed from an<br></br>
                  inexperienced intern, to a software<br></br> 
                  engineer, team lead, technical architect<br></br> 
                  and now Principal Software Engineer.<br></br> 
                  Since Ixaris strives to build the best<br></br> 
                  solutions, my ideas and suggestions<br></br> 
                  are always valued and I am given <br></br>
                  opportunities to research new<br></br> 
                  approaches at Hackathons, coding<br></br> 
                  competitions, conferences and local<br></br>
                  meetups.”
                </div>
                </div>
               </div>

                <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">Christianne Bonanno<br></br>Orlando</p>
                  <div className="team-member-position">Senior Business Intelligence<br></br>Specialist</div>
                  <div className="quote_1">
                  “From our modern office space and its <br></br>
                  uplifting atmosphere, to the open  I<br></br>
                  honest relationship between<br></br>
                  management and employees, and a <br></br>
                  very strong work-life balance, working <br></br> 
                  at Ixaris is a genuinely rewarding <br></br> 
                  experience. One might consider it a <br></br> 
                  cliche to say Ixaris is my second home <br></br> 
                  and second family—but this is what <br></br> 
                  explains it best.” <br></br>
                </div>
                </div>
               </div>

               <div className="col-lg-4  col-md-4 col-sm-12 col-xs-12">
                <div className="">
                <div className="career_people">
                <img src="/images/Icon_1.png" alt=""/>  
                </div>
                  <p className="career_txt1">Suzanne Borg</p>
                  <div className="team-member-position">Group Head of IT</div>
                  <div className="quote_1">
                  “Working in the IT department at Ixaris, <br></br>
                  meant being exposed to a lot of <br></br>
                  innovative tools and technologies <br></br>
                  including cloud based solutions and <br></br>
                  avant-garde infrastructure. At Ixaris, <br></br> 
                  hard work is recognized and rewarded <br></br> 
                  by managers and the company. This is <br></br> 
                  invaluable to me!”<br></br> 
                </div>
                </div>
               </div>
               
             </div>
             <div>
                <button className="col-lg-12 button_4"><span>Browse jobs</span></button>
             </div>

    </div>    
    );
  }
}

export default InformationComponent;



