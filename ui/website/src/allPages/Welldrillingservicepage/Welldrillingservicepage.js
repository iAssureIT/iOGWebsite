import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Welldrillingservicepage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Welldrillingservicepage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Well Drilling",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Our Drilling experts can provide clients the capability to undertake detailed drilling design as well as the capacity to track, monitor and advice on real time drilling operations. We simulate drilling operations and let our customers know beforehand the challenges prior to starting the actual drilling operation, leading to a substantial reduction in risk and cost of drilling operations.",
                overviewtext2  : "iOG provides below Well Drilling Services",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Drilling Design",
                    },
                    {  
                        ulData : "Drilling Simulation",
                    },
                    {  
                        ulData : "Geosteering",
                    },
                    {  
                        ulData : "Drilling Monitoring",
                    },
                    {  
                        ulData : "Drilling Data Management",
                    }
                ]


            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Drilling Design:",
                challengestext  : "iOG uses industry recognized software as part of its drilling design process as well as drilling risk analysis tools to analyse technical and commercial drilling risks. Listed below are some of the well drilling design services that iOG can offer:",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[
                    {
                        ulData : "Independent review of drilling programs, procedures and well design",
                    },
                    {  
                        ulData : "Drilling and Development Feasibility Studies",
                    },
                    {  
                        ulData : "Well engineering audits, peer reviews and benchmarking",
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "",
                challengestext  : "By using industry used softwares, we help our customers to meet Drilling Engineering Challenges as below:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Torque & Drag: Validate well design and prevent loss of rig time by eliminating drilling string failure",
                    },
                    {  
                        ulData : "Hydraulics: Model downhole circulating pressures during drilling, tripping and running casing",
                    },
                    {  
                        ulData : "Casing Design: Perform casing design and tri-axial load analysis of casing or tubing strings",
                    },
                    {  
                        ulData : "Well Control: Integrated kick tolerance calculator and kill sheet",
                    },
                    {  
                        ulData : "Jar Placement: Calculate the optimal jar placement in the BHA for a given well geometry",
                    }
                ]
            }, 
                  
        ]
    }


    commonulliData(){
        return [
            {
                commonulliheading : "Our Drilling design services include:",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Casing, Tubing & Drill String Design:",
                        commonulliLi : [
                                            {
                                                liData : "iOG Solutions uses Industry standard casing design software to model complex conditions and design the most appropriate casing and tubular while obtaining both the right well integrity and the best cost configuration. iOG also provides tri-axial load analysis of casing or tubing strings"
                                            }
                                        ]
                    },
                    {   ulData : "Completion Design:",
                        commonulliLi : [
                                            {
                                                liData : "iOG helps its customers in Completion Design. We tell our customers the best practice and method to be used in Well Completion Operations."
                                            }
                                        ]
                    },
                    {   ulData : "Different Types of Completion:",
                        commonulliLi : [
                                            {
                                                liData : "Open Hole Completion"
                                            },
                                            {
                                                liData : "Cased and Perforated Completion"
                                            },
                                            {
                                                liData : "Liner Completion"
                                            },
                                            {
                                                liData : "Tubingless Completion"
                                            },
                                            {
                                                liData : "Casing with Suspended Tubing Completion"
                                            },
                                            {
                                                liData : "Tubing and Packer Completion",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Single String – Single Packer Completion"
                                                                    },
                                                                    {
                                                                        lilastData : "Commingled Completion"
                                                                    },
                                                                    {
                                                                        lilastData : "Multiple String Completion"
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "Planning for Drilling Fluid products:",
                        commonulliLi : [
                                            {
                                                liData : "iOG serves its clients by anticipating and planning for how drilling fluid products would behave in the downhole environment, both to optimize drilling performance and to minimize the risk associated with fluids-related problems."
                                            },
                                            {
                                                liData : "Drilling Fluid Systems & Products",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "iOG helps client in implementing drilling solutions that help out clients maximize Rate Of Penetration (ROP), eliminate Non-Productive Time (NPT), achieve QHSE performance objectives, and obtain quality data from the wellbore."
                                                                    }
                                                                ]

                                            },
                                            {
                                                liData : "Completion Systems, Fluids & Tools",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Our focus here is the safeguarding of well completions and formation stability by delivering techniques, technologies, fluids, tools and expertise that ensure the optimal condition of the wellbore and fluid systems.  Everything in our product line is rooted in our conviction that a clean wellbore, properly prepared, is the foundation for higher production and longer service over the life of your well."
                                                                    }
                                                                ]

                                            },
                                            {
                                                liData : "Solids Control Systems & Products",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "One of the most effective ways to reduce drilling costs is to maintain drilling-fluid condition at an optimum level.  Controlling the amount and types of solids present in the fluid system, as well as fluid temperatures, can result in higher ROP, fewer lost-circulation problems and a reduction in well-control incidents.  iOG helps clients in using equipment and technologies that help our clients remove efficiency-robbing solids and keep the materials that boost productivity: lost-circulation and wellbore-strengthening products."
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "BHA Management",
                        commonulliLi : [
                                            {
                                                liData : "Our BHA (Bore Hole Assembly) Experts will help you in designing and optimizing BHA and bit coupling to predict the equilibrium curvature (build/drop & turn rates) of a drilling system. Our services include:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Simulation of all BHA types (Rotary BHA, BHA with variable gauge stabilizers, steerable motor BHA, rotary steerable systems BHA, BHA with reaming while drilling tools)"
                                                                    },
                                                                    {
                                                                        lilastData : "Analysis of directional response of any BHA run & understand underperformance problems"
                                                                    },
                                                                    {
                                                                        lilastData : "Optimization of next BHAs predictability by assessing different parameters such as hole overgauge, friction factors or formation hardness"
                                                                    }

                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "Drill Bit Modelling and Selection",
                        commonulliLi : [
                                            {
                                                liData : "Bit choice is a key factor in the directional response of any drilling system. We can help clients in ",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Evaluation of bit steerability and bit walking tendency, affecting the Bit performance"
                                                                    },
                                                                    {
                                                                        lilastData : "Selection of Bit taking into consideration all the affecting factors like Passive gauge, active gauge, cutting structure main characteristics, formation hardness and operating conditions"
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "Modal Analysis",
                        commonulliLi : [
                                            {
                                                liData : "Our Modal Analysis experts can help you in estimating the natural frequencies and corresponding deflection shapes (modes) of the Drillstring, which in turn help in determining the optimum speed and positioning for minimizing the damaging vibrations and loads. We assist clients with following services:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Detecting and analysing the effect of all types of vibrations including, Lateral vibrations (whirling), Axial vibrations (bit bouncing), Torsional vibrations (stick-slip)"
                                                                    },
                                                                    {
                                                                        lilastData : "Assessment of Critical frequencies to ensure safe operational speeds for the drillstring."
                                                                    },
                                                                    {
                                                                        lilastData : "Estimation of critical operational parameters (RPM, WOB effect)."
                                                                    },
                                                                    {
                                                                        lilastData : "Performance of Modal Analysis to determine BHA deflected modal shapes."
                                                                    },
                                                                    {
                                                                        lilastData : "Determination of the high solicited drillstring zones."
                                                                    }
                                                                ]

                                            }
                                        ]
                    }

                ]
            }                        
        ]
    }


Commonleafulblock3(){
        return [
            {
                challengesTitle : "Drilling Simulation:",
                challengestext  : "Our team replicates a real drilling operation in drilling software solutions dynamically and provides accuracy not possible with simpler steady-state models. The tool is then used in an Integrated environment for geoscience and drilling from well design to geosteering",
                challengestext2 : "",
                challengestext5 : "Following are some of our offerings and applications of Drilling Simulation:",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Simulation of all the aspects of Drilling operation, including the complex hydraulics involved, pressure control, well control, and blowout control.",
                    },
                    {
                        ulData : "Replication of drilling features like Circulatory and Rotary systems, Hoisting systems, Blow-out prevention and Well Control system & Downhole Effects",

                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock4(){
        return [
            {
                challengesTitle : "Geosteering",
                challengestext  : "Geosteering is the process of continual adjustment of the placement of drillhead, taking into consideration the real-time changes and data coming from different sources about the immediate and surrounding areas to the drilling rig.",
                challengestext2 : "",
                challengestext5 : "Minimizing uncertainty and adopting a fit-for-purpose geosteering strategy is crucial to drilling productively. Real-time identification of reservoir layers enables directional drillers to adjust well trajectory to maximize reservoir exposure, even in thin, dipping, and fractured reservoirs. ",
                challengestag   : "Our Differentiating features:",
                commonulliUl : [
                    {
                        ulData : "iOG Solutions can help clients integrate multiple dimensional real time information and enables directional drillers in geological placement of precise, high-angle well trajectories on the fly",
                    },
                    {
                        ulData : "Our geosteering experts can help the drilling crew in selecting the best trajectory for their wells by balancing multiple objectives:",
                        commonulliLi : [
                                            {
                                                liData : "Maintaining drilling close to the reservoir roof"
                                            },
                                            {
                                                liData : "Drilling relative to the fluid content in the reservoir"
                                            },
                                            {
                                                liData : "Following the optimum reservoir zones"
                                            },
                                            {
                                                liData : "Avoiding unproductive reservoir zones"
                                            }
                                            
                                        ]

                    },
                    {
                        ulData : "Assisting directional drilling engineers in using sophisticated interpretation tools to assimilate, analyse and interpret the incoming real time data to make the best possible decisions for maximizing the hydrocarbon production.",
                    },
                    {
                        ulData : "Our Geosteering services enable clients to keep wellbores in the most productive zones by identifying formation dips, bed thickness, and fractures combined with image analysis, forward modeling, and recognition of geologic boundaries while drilling.",
                    },
                    {
                        ulData : "We provide integration and analysis support for the following data types to help predict the best optimal well path in the target zones:",
                        commonulliLi : [
                                            {
                                                liData : "MWD"
                                            },
                                            {
                                                liData : "LWD"
                                            },
                                            {
                                                liData : "Image logs"
                                            },
                                            {
                                                liData : "2D and 3D seismic data"
                                            },
                                            {
                                                liData : "Geological models"
                                            },
                                            {
                                                liData : "Real-time drilling data"
                                            },
                                            {
                                                liData : "Trajectory path based on updated geological information"
                                            }
                                            
                                        ]

                    }

                ]
            }, 
                  
        ]
    }

Commonleafulblock5(){
        return [
            {
                challengesTitle2 : "Drilling Monitoring:",
                challengestext3  : "iOG Solutions can help its clients in enhancing the efficiency of their drilling operations by enabling them to monitor from a centralized location all their drilling operations in real time. Such real time monitoring will ensure timely support and advice to the related professionals in order to follow the most efficient procedures and mitigate any anticipated risks.",
                challengestext5 : "Salient features:",
                challengestext : "We assist our clients in real time evaluation of the operations data collected from the monitoring processes and develop new and timely procedures to minimize cost and maximize the efficiency of their drilling operations.",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Real time monitoring and analysis of Surface Instrumentation and equipment parameters",
                    },
                    {
                        ulData : "Non-Productive Time analysis",
                    },
                    {
                        ulData : "LWD and MWD analysis",
                    },
                    {
                        ulData : "Mud Log analysis",
                    },
                    {
                        ulData : "Creation of Thresholds, cut-offs and corresponding alarms and alerts for timely notification to all the involved parties for real time control of the drilling operations",
                    },
                    {
                        ulData : "Reporting of results for the different analytical assessments to concerned personnel",
                    },
                    {
                        ulData : "Rig Performance assessment by plotting of relevant graphs like Depth Vs Rig time, Depth Vs Rotation time & Prognosis, Well trajectory plots, Mud parameters Vs. Depth, ROP & cost Vs Depth, etc.",
                    },
                    {
                        ulData : "Monitoring of the lithology using stereoscopic microscope for estimating Porosity and oil staining possibility",
                    }
                ]
            }, 
                  
        ]
    }

    Commonleafulblock6(){
        return [
            {
                challengesTitle : "",
                challengestext  : "Our drilling monitoring services can help our clients in ensuring a more efficient and safe working procedure for their personnel. Timely monitoring, evaluation and a centralized processing facility for incoming data can help in:",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Anticipation of future problems and taking timely measures for avoiding them",
                    },
                    {
                        ulData : "Identification of trends that may signal deviation from efficiency or problems in the process",

                    },
                    {
                        ulData : "Increase in efficiency and effectiveness of engineering teams",

                    },
                    {
                        ulData : "Mitigation of risk and  decrease in operation costs",

                    }
                ]
            }, 
                  
        ]
    }


Commonleafulblock7(){
        return [
            {
                challengesTitle : "Drilling Data Management",
                challengestext  : "iOG has well-rounded experience in Aggregating and Integrating continuous Data-feeds coming from the Drilling operations, verifying their Data Quality, and developing standardised workflows. Our visualization and BI capabilities enable easy representation of complex features like formation tops or fluid contacts, caliper-based wellbore profiling, ellipses of uncertainty and offset measurement for providing a ‘big picture’ view of the entire operation, which in turn, helps in parameter correlation, geosteering, planning, and collision avoidance.",
                challengestext2 : "",
                challengestext5 : "iOG can help you with the following Drilling and Well-related Data Management needs:",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Tracking and Managing all operated and non-operated wells in a central data repository",
                    },
                    {
                        ulData : "Interactive report templates for reporting data, relevant and specific to the functions",

                    },
                    {
                        ulData : "Visualize drilling information which helps in enhancing data quality, offering insights, and increasing collaboration",

                    },
                    {
                        ulData : "View directional tracks (actual Vs. proposed) and 3D display of all wellbores in the well file",

                    },
                    {
                        ulData : "Analyse the Drilling data and performance of Wells by comparing plan to actual; querying NPT events; generating well to well comparisons of cost and time.",

                    },
                    {
                        ulData : "Perform Multi-Well analysis",

                    },
                    {
                        ulData : "Integrate the drilling data with WITSML log object curves to analyse the data with respect to time and thus trace significant trends in data",

                    }
                ]
            }, 
                  
        ]
    }

 
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
        <Commonulliblock CommonulliData={this.commonulliData()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />  
        <Challenges   CommonleafblockData={this.Commonleafulblock5()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock6()} /> 
        <Challenges   CommonleafblockData={this.Commonleafulblock7()} /> 
      </div>
    );  
  }
}

