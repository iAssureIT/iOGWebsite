import React, {Component} from 'react';

// import $                  from 'jquery';
import './Manufacturingsyspage.css';

import Commoninfoblock                 from '../../allBlocks/Commoninfoblock/Commoninfoblock.js';
/*import Commonservicesblock             from '../../allBlocks/Commonservicesblock/Commonservicesblock.js';*/
import Commonservicesleafpageblock             from '../../allBlocks/Commonservicesblock/Commonservicesleafpageblock.js';

export default class Manufacturingsyspage extends Component {
  ServicesData(){
        return [
            {
                servicesTitle : "Manufacturing Execution System",
                servicesSubTitle : "iOG Solutions stands for intelligent O&G solutions.",
                servicesimg   : "/images/Manufacturing-Execution-Systems.png",
                servicestext  : "Manufacturing Execution Systems (MES) are vital tools in the smooth and efficient execution of the manufacturing process. Manufacturing Execution Systems are applications that bridge the gap between the control system (DCS) and the ERP layers and can consist of numerous modules including HSE, PCMS, and SCM. In such a situation, the MES is used in a bigger context and is synonymous to Refinery Information Systems (RIS) or Integrated RIS (IRIS).",
                    
                
            } 
                        
        ]
    }
  

  DownstreamData(){
        return [
            {
                downstreamurl   : "/productionaccounting",
                downstreamTitle : "Production Accounting",
                downstreamimg   : "/images/Production_Accounting.png",
                downstreamtext  : "The Production accounting application performs reconciliation of the measured raw data and provides accurate data for daily production accounting and performance reporting. It provides reconciled data for daily, weekly and monthly reporting and provides key inputs for fiscal / revenue accounting. It also provides other tangible and nontangible benefits such as loss minimization, quality giveaway minimization, etc...."
                    
                
            }, 
            {
                downstreamurl   : "/datahistorian",
                downstreamTitle : "Real time Data Historian",
                downstreamimg   : "/images/Real-ime-data-historian.png",
                downstreamtext  : "A Data Historian or Process Historian or Operational Historian is a software program that records and retrieves production and process data by time; it stores the information in a time series database that uses minimal disk space and enables fast retrieval. Time series information is often displayed in a trend or as tabular data over a time range...."
            }, 
            {
                downstreamurl   : "/corporatedashboard",
                downstreamTitle : "Corporate Dashboard & Analytics",
                downstreamimg   : "/images/Corporate-dashboard-analytics.png",
                downstreamtext  : "Corporate dashboards provide an integrated and visual representation of the complete oil business right from crude procurement all the way down to product distribution. It gives executives a quick and easy way to view and analyze the performance of the organization in real time....."
            }, 
            {
                downstreamurl   : "/operationlogbook",
                downstreamTitle : "Operation Logbook & Target Dashboard",
                downstreamimg   : "/images/operations-logbook-target-dashboard.png",
                downstreamtext  : "The Operator Logbook is an application that logs, tracks events and operations data for use in daily and shift reports. It facilitates daily/weekly operations meetings by the recording comments and observations and enables other refinery staff to access and analyze operations data and reports in a consistent and reliable fashion. It also automates the operating instructions workflow, exchange of data with external systems....."
            }, 
            {
                downstreamurl   : "/oilmovement",
                downstreamTitle : "Oil Movement Management Systems",
                downstreamimg   : "/images/oil-movement-management-systems.png",
                downstreamtext  : "An oil movement system (OMS) manages all pipelines, crude oil, and product storage tanks in the tank farm area and controls the movement of all intermediate components and finished products. It is also known as the Off-site Area Management Application and closes the loop between basic control systems and IT systems. OMS provides a collaborative environment for the offsite operations and provides an overview of all important events, tasks, data, instructions, and activities within this area...."
            }
        ]
    }

  render() {


    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
          <div className="">
              <Commoninfoblock infodata={this.ServicesData()} />
              <Commonservicesleafpageblock servicedata={this.DownstreamData()}/>
          </div>
      </div>
    );  
  }
}

