import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './Megamenu.css';
import 'bootstrap/js/modal.js';


export default class Megamenu extends Component {
	constructor(props){
		super();
		this.state = {
      maxRowsPerColumn : 10,
			megaMenuArray : [
				{label: "Planning & Scheduling", href:"/planningschedul",hearer:true},
				{label: "Production Planning", href:"/refineryplanning"},
				{label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
        {label: "Production Schedule", href:"/refineryschedule"},
			]
		}
	}
	createMenu(){
    var menuCol1 = "<div className'menuCol oddCol'>";
    var menuCol2 = "<div className'menuCol evencol'>";
    var menuCol3 = "<div className'menuCol oddCol'>";
    var menuCol4 = "<div className'menuCol evencol'>";
    var menuCol5 = "<div className'menuCol oddCol'>";

    // for(let i=0; i<this.state.megaMenuArray.length; i++){
    //   menu = menu + 
    // }

    var menu = menuCol1 + menuCol2 + menuCol3 + menuCol4 + menuCol5 ;

	}
	render() {
		return (
			<div>
        <div className="megamenuWrapper">
  				{
  					this.state.megaMenuArray.length > 0 
  				 	?
  				 		this.createMenu()
  				 	:
  				 		"There is no data"
  				}
        </div>
			</div>
		);
	}
}

/*
                          <div class="dropdown-content expertcontrnt">
                            <div class="col-lg-12 row">
                              <div class=" column columnmenu columnmenu1">
                                <h5 className="columnhead">Planning & Scheduling</h5>
                                <a href="/refineryplanning">Prod Planning </a>
                                <a href="/refineryschedule">Prod Schedule</a>
                                <a href="/backcasting">Back Casting / Retro-Analysis</a>
                                <a href="/lputility">LP Utilities</a>
                                <a href="/lpconfig">LP Configuration studies</a>
                              </div>
                          <div class=" column columnmenu columnmenu2">
                            <h5 className="columnhead">Supply & Distribution</h5>
                            <a href="/demandmanagement">Demand Mgmt</a>
                            <a href="/inventorymanagement">Inventory Mgmt</a>
                            <a href="/diatributionplanning">Distribution Planning & Optimization</a>
                            <a href="/retailautomation">Retail Automation</a>
                          </div>
                           <div class=" column columnmenu thirdcolumn columnmenu3">
                            <h5 className="columnhead">Mfg Execution System</h5>
                            <a href="/productionaccounting">Prod Accounting</a>
                            <a href="/datahistorian">Realtime Data Historian</a>
                            <a href="/corporatedashboard">Corporate Dashboard & Analytics</a>
                            <a href="/operationlogbook">Operation Logbook & Target Dashboard</a>
                            <a href="/oilmovement">Oil Movement Mgmt Systems</a>
                          </div>
                          <div class=" column columnmenu columnmenu3">
                            <h5 className="columnhead">Simulation & Modeling</h5>
                            <a href="/simulation">Steady State Simulation </a>
                            <a href="">Dynamic Simulation</a>
                            <a href="">Operator Training</a>
                            <a href="/etrm">ETRM</a>
                          </div>
                          <div class="column columnmenu">
                            <h5 className="columnhead">Energy Mgmt</h5>
                            <a href="">Util Network Optimiz</a>
                            <a href="">Equipment Monitoring</a>
                            <a href="">Energy Accounting</a>
                          </div>
                          <div class=" column columnmenu column6">
                            <h5 className="columnhead">Asset Mgmt </h5>
                            <a href="/assetCriticalAnalysis">Asset Criticality Anls</a>
                            <a href="/riskBasedInspection">Asset Lifecycle Mgmt</a>
                            <a href="/assetStrategyMgmt">Asset Strategy Mgmt</a>
                            <a href="#">Inspection & Callibration Mgmt</a>
                          </div>
                           <div class=" column columnmenu columnhealth">
                            <h5 className="columnhead">Health Safety & Env  </h5>
                            <a href="#">Occupational Health Mgmt</a>
                            <a href="#">Process Safety Mgmt</a>
                            <a href="#">Environment Mgmt</a>
                          </div>
                          <div class=" column columnmenu column6">
                            <h5 className="columnhead">Digital Services </h5>
                            <a href="#">Digital Transformation</a>
                            <a href="#">Application Support</a>
                            <a href="#">Application Integration</a>
                            <a href="#">Visualization & Dashboards</a>
                            <a href="#">Industry 4.0 Initiatives</a>
                          </div>
                          <div class=" column columnmenu column7">
                            <h5 className="columnhead">Other Services</h5>
                            <a href="/apc-services">APC Services</a>
                            <a href="/etrm">ETRM</a>
                          </div>
                        </div>
                      </div>




*/