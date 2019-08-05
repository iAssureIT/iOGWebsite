import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Productionenggpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Productionenggpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Production Engineering",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "iOG’s Production Engineering involves designing and selecting the equipment that will get the well to produce oil and gas after it is drilled. It is based on the reservoir and well engineering design. In production engineering, iOG selects the artificial lift method; optimizes the design of tubing string and the design of the surface gathering system.",
                overviewtext2  : "iOG design is done for the most efficient day to day oil and gas production operations from the reservoir, up the well and through the processing and storage operations at the surface. The objective is to maximize the well deliverability in a cost-effective manner by understanding the intersection of the Inflow performance relationship (IPR) and the vertical flow performance (VFP). The IPR represents what the reservoir can deliver and the VFP represents what the well can deliver.",
                overviewtext3  : "Improving well deliverability by optimizing the flow system from the bottom hole location to the surface production facility is a major role of  iOG’s production engineer. This can be done by lowering the flowing bottom hole pressure by",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl2   : [
                    {
                        ulData : "Minimizing the pressure losses between the bottom hole and the separation facility (for e.g.by removing unnecessary restrictions, optimizing tubing size etc.),",
                    },
                    {  
                        ulData : "Or by implementing or improving artificial lift procedures.",
                    }
                ]


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our services are as below:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Designing & optimization of Well completion systems including tubing selection, perforating, sand control, matrix stimulation, and hydraulic fracturing for multi-lateral, multi-layer and horizontal wells.",
                    },
                    {  
                        ulData : "Design of  Well and Reservoir Performance Monitoring & optimization program",
                    },
                    {  
                        ulData : "Design of Well Work Over, Intervention And Stimulation",
                    },
                    {  
                        ulData : "Design of remedial steps that can range from well stimulation procedures such as hydraulic fracturing that enhance flow in the reservoir to the resizing of surface flow lines to increase productivity.",
                    },
                    {  
                        ulData : "Selection and Design of Artificial Lift such as Gas lifts, Hydraulic pumps, PCP, Jet Pumps, ESP or Tapered ESP wells, Diluent Injection and Foam Lift Wells",
                    },
                    {  
                        ulData : "Detailed pipeline design including flow regimes, slug size and frequency, and stability analysis",
                    },
                    {  
                        ulData : "Undertake Flow Assurance Studies",
                    },
                    {  
                        ulData : "Design and build Complete Field Model including reservoir tanks, wells and the surface gathering system",
                    },
                    {  
                        ulData : "Modeling of production system containing oil, gas, condensate and gas",
                    },
                    {  
                        ulData : "Selection of Equipment For Surface Facilities that separate and measure the produced fluids (oil, natural gas, water and impurities), prepare the oil and gas for transportation to market and handle disposal of any water and impurities.",
                    },
                    {  
                        ulData : "Water Injection System design for water flooding including ground water injection system design, the downhole string design of water injection wells and the quality control design of injected water.",
                    }
                ]
            }, 
                  
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "",
                plansimg          : "images/productionengg.png",

            }
        ]
    }

   
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

