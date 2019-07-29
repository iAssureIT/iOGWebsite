import React, {Component} from 'react';

// import $                  from 'jquery';
import './Founderprofile.css';

import Aboutufounder                 from '../../allBlocks/Aboutufounder/Aboutufounder.js';

export default class Founderprofile extends Component {

    founder1(){
        return [
            {
                foundername : "Pankaj Zawar",
                founderlink : "/",
                founderimg  : "/images/7.png",
                foundertag  : "Founder and Director of iOG Solutions." ,         
                foundertext : "Our Founder and Director,Pankaj Zawar is a chemical engineer from UICT, Mumbai with 20+ years of experience in providing consulting,engineering  and implementation services for MES, APC and SCM solutions." ,         
                founderli   : [
                    {
                        liData : "Strong domain knowledge in Oil and Gas industry."
                    },
                    {
                        liData : "Strong skills in using refinery LP and Scheduling tools for refinery production planning and scheduling."
                    },
                    {
                        liData : "Led several remarkable MES and SCM projects at state-owned.Private refineries and petrochemical plants in India, SE Asia, and the Middle East."
                    }
                ]
            }
        ]
    
    }
        founder2(){
                return [
                    {
                        foundername : "Second founder",
                        founderlink : "https://www.linkedin.com/company/iogsolutions/",
                        founderimg  : "/images/noimg.png",
                        foundertag  : "Founder and Director of iOG Solutions." ,         
                        foundertext : "Our Founder and Director,Pankaj Zawar is a chemical engineer from UICT, Mumbai with 20+ years of experience in providing consulting,engineering  and implementation services for MES, APC and SCM solutions." ,         
                        founderli   : [
                                        {
                                            liData : "Strong domain knowledge in Oil and Gas industry."
                                        },
                                        {
                                            liData : "Strong skills in using refinery LP and Scheduling tools for refinery production planning and scheduling."
                                        },
                                        {
                                            liData : "Led several remarkable MES and SCM projects at state-owned.Private refineries and petrochemical plants in India, SE Asia, and the Middle East."
                                        }
                                      ]
                    }
                ]
            
            }

          
  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="">
              <Aboutufounder founderData={this.founder1()} />
              <Aboutufounder founderData={this.founder2()} />
          </div>
      </div>
    );  
  }
}

