import React, {Component} from 'react';

// import $                  from 'jquery';
import './Downstreamservicespage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';

export default class Downstreamservicespage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Downstream",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Downstreaminfoblock.png",
                servicestext  : "Oil & Gas downstream includes procurement and supply of Crude oil, refining operations, product blending, storage and distribution of finished products. The midstream operations such as trading, risk management, supply & distribution are also included in downstream verticals at iOG. In addition, it includes Petrochemicals and LNG facilities.",
                servicestext2 : "iOG Solutions provides best in class expertise, solution and work flow for all the disciplines throughout the Mid-stream and Downstream Life cycle. We understand customer’s requirement and provide suitable solutions including software, consulting services and methodology to address these requirements. Our experts in Oil & Gas Downstream work in tandem with client team to give cost effective solutions and hence improved profitability for our customers."
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/supplychain",
                downstreamTitle : "Supply Chain Management",
                downstreamimg   : "/images/Illustration_2.png",
                downstreamtext  : "The ever-increasing demand for chemicals & petrochemicals derived from valuable petroleum feedstock has pushed oil giants to reach more customers and increase their market share and profitability. Supply chains are growing complex by the day and the petroleum industry is finding the development and management of the same a very complex task."
                    
                
            }, 
            {
                downstreamurl   : "/manufacturesystem",
                downstreamTitle : "Manufacturing Execution Systems",
                downstreamimg   : "/images/Illustration_3.png",
                downstreamtext  : "Manufacturing Execution Systems are vital tools in the smooth and efficient execution of the manufacturing process. Manufacturing Execution Systems are applications that bridge the gap between the control system (DCS) & the ERP layers & can consist of numerous modules including HSE, PCMS, and SCM. In such a situation, the MES is used in a bigger context & is synonymous to Refinery Information Systems or Integrated RIS ."
            }, 
            {
                downstreamurl   : "/apc-services",
                downstreamTitle : "APC Services",
                downstreamimg   : "/images/Illustration_4.png",
                downstreamtext  : "Advanced Process Control (APC) technologies helps to improve operation stability, push operations closer to quality or equipment limits and improve the capability of process units to handle disturbances. Our APC consulting services help customers specify, justify, and apply APC technologies such as multivariable predictive control, neural net inferential modeling, and fuzzy logic controllers that will significantly improve plant performance."
            }, 
            {
                downstreamurl   : "/simulation",
                downstreamTitle : "Simulation & Modelling",
                downstreamimg   : "/images/Illustration_5.png",
                downstreamtext  : "Process simulation studies enable the asset owners and the system designers to gain a better insight into the design and operation of their facilities."
            }, 
            {
                downstreamurl   : "/energy",
                downstreamTitle : "Energy Management",
                downstreamimg   : "/images/Illustration_6.png",
                downstreamtext  : "Improving energy efficiency in a refinery is very critical, as Oil refining is an energy-intensive activity. Factors such as more stringent oil product standards (e.g. ultra-low-sulfur diesel), increasing demand for lighter products, and heavier crude oil slates all demand increased processing, which in turn places upward pressure on the overall energy intensity for refining."
            },
             {
                downstreamurl   : "/etrm",
                downstreamTitle : "ETRM and Pricing Tool Application",
                downstreamimg   : "/images/Illustration_7.png",
                downstreamtext  : "Many oil and gas producers and marketers employ hedging strategies to lock in prices at profitable levels. Futures contracts and swaps can be effective tools in managing price and basis risk, creating price caps, price floors and “no-cost collars” to manage price risk. Energy and commodities’ firms engaged in active trading are investing in more sophisticated ETRM solutions. Excel is not going to cut it!"
            }
            
        ]
    }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="downstreambg1">
              <Commoninfoblock infodata={this.ServicesData()} />
              <Commonservicesblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

