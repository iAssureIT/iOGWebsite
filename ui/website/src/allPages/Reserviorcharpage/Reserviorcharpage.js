import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Reserviorcharpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Reserviorcharpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "Reservoir Characterization",
                overviewSubTitle : "Overview",
                overviewimg    : "",
                overviewtext1  : "Static Reservoir modeling, also sometimes referred to as Reservoir Characterization is carried out to determine reservoir architecture and quality with respect to distribution of porosity, permeability and rock properties.",
                overviewtext2  : "It can be summarized as consiting of the steps summarized in the following figure:",
                overviewtext3  : "",
                overviewtext4  : "",
                overviewtext5  : "",

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "Data Preparation:",
                challengestext  : "Data preparation consists of organizing, formatting and uploading data into standard software packages. It is followed by a quality-control process for assessing and generating sufficient, accurate and curated data required in further modeling steps. Refer to details in iOG Data management offerings.",
                challengestext2 : "",
                challengestag   : "",
                commonulliUl :[]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "3D Structural Modelling",
                challengestext  : "Preparation of the 3D structural model consists of the bounding surfaces and the faults. In this model the seismic surfaces generally are converted to depth and adjusted for the well tops of the key marker surfaces. Some key elements of 3D structural modeling include",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Fault geometry",
                    },
                    {  
                        ulData : "Fault-to-fault relationships",
                    },
                    {  
                        ulData : "Ensure that fault-to-bounding-surface contacts are a perfect match (this prevents later problems during flow simulation)",
                    },
                    {  
                        ulData : "Optimize the model so that it  is restricted to those faults that directly impact fluid flow",
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "3D Petrophysical Modelling:",
                challengestext  : "After facies modeling, the petrophysical properties are interpolated on a facies-by-facies basis, using the sedimentary model as a template.",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : []
            }, 
                  
        ]
    }
   
Commonleafulblock4(){
        return [
            {
                challengesTitle : "Upscaling:",
                challengestext  : "The high-resolution petrophysical model often has many millions of grid cells and the high-resolution model needs to be simplified (UPSCALED) before proceeding to the flow simulation. Upscaling, also referred to as homogenization, is substituting a heterogeneous property region consisting of fine grid cells with an equivalent homogeneous region made up of a single coarse-grid cell with an effective property value. Upscaling is performed for each of the cells in the coarse grid and for each of the grid properties needed in the reservoir flow-simulation model. It is essentially an averaging procedure in which the static and dynamic properties of a fine-scale model are approximated by that of a coarse-scale model. Upscaling the grid geometry also upscales the petrophysical properties.",
                challengestext2 : "",
                challengestext5 : "",
                challengestag   : "",
                commonulliUl : [
                    {
                        ulData : "Defining the objectives of the History-Matching Process",
                    },
                    {  
                        ulData : "Determining the method to be used, the relevant historical data to be matched, and setting up criteria for a successful match based on the availability and quality of data and the objectives of the process.",
                    },
                    {  
                        ulData : "Determining the reservoir data that can be adjusted and the confidence range of that data.",
                    },
                    {  
                        ulData : "Running the simulation model through the pressure-match and saturation stages of the procedure iteratively, by specifying voidage, oil and gas rates within the confidence intervals to ensure  the best possible match such",
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
        <Challenges   CommonleafblockData={this.Commonleafulblock3()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock4()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </div>
    );  
  }
}

