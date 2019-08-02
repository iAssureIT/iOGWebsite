import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Geointerpritpage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Geointerpritpage extends Component {

    overviewData(){
        return [
            {
                overviewTitle    : "iOG Geophysical Interpretation",
                overviewSubTitle : "Overview",
                overviewimg    : "/images/2.png",
                overviewtext1  : "Geophysical Interpretation is the extraction of subsurface geologic information from the data obtained using various techniques such as Seismic, Gravitational, Magnetic etc. Geophysical Interpretation is best carried out in integration with Geological Data and we combine our expertise in both to provide our clients a balanced interpretation. ",
                overviewtext2  : "We offer Interpretation services for data collected over the entire spectrum of Geophysical techniques:",
                overviewtext3  : "We focus mainly on interpreting the data obtained using Seismic methods. A comprehensive interpretation of seismic data requires an understanding of the subsurface formations, and their effect on wave characteristics & reception. We use industry-standard tools for seismic interpretation which enable the following workflow.",
                overviewtext4  : "",
                overviewtext5  : "",
                commonulliUl   : [
                    {
                        ulData : "Seismic"
                    },
                    {
                        ulData : "Gravitational including Gravity gradiometry"
                    },
                    {   
                        ulData : "Magnetic"
                    },
                    {   
                        ulData : "Electrical & Electromagnetic including Resistivity Tomography and Induced Polarization"
                    }
                ]

            } 
                        
        ]
    }

      Commonleafulblock(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "Seismic Interpretation",
                challengestext  : "Seismic Data Interpretation utilizes all information gathered in the exploration process from basin scale to the prospect scale. iOG Solutions can provide its clients with an unparalleled combination of skills and knowledge in interpreting 2D and 3D seismic data. Our areas of expertise include:",
                challengestext2 : "",
                challengestext3 : "Seismic interpretation (2D and 3D) - Structural and Stratigraphic",
                commonulliUl : [
                    {
                        ulData : "Structural interpretation"
                    },
                    {
                        ulData : "Stratigraphic interpretation"
                    },
                    {   
                        ulData : "Fault interpretation"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock1(){
        return [
            {
                challengesTitle : "",
                challengesTitle2: "",
                challengestext  : "Our interpretation service span across",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Integrated Regional Seismic studies"
                    },
                    {
                        ulData : "Identification of prospects and locations for Exploratory Drilling"
                    },
                    {   
                        ulData : "Suggestions for optimum well location"
                    },
                    {   
                        ulData : "Types of Petrophysical Studies required"
                    },
                    {   
                        ulData : "Integration of Interpretation results with Reservoir Characterization and Modelling"
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock2(){
        return [
            {
                challengesTitle : "Fault mapping/network analysis and integration marker maps",
                challengesTitle2: "Mapping of marker horizons (2D & 3D)",
                challengestext  : "We can help our clients in interpreting faults on vertical views including arbitrary lines, time slices, or in 3D.",
                challengestext2 : "",
                challengestext3 : "",
                commonulliUl : [
                    {
                        ulData : "Interpolate fault surfaces automatically"
                    },
                    {
                        ulData : "Correlation and assignment of fault segments on vertical view, time slice, map view or in 3D"
                    },
                    {   
                        ulData : "Automatic fault heave calculation with the fault polygons alongside heaves calculations"
                    }
                ]
            }, 
                  
        ]
    }

  
  commonulliData(){
        return [
            {
                commonulliheading : "Quantitative Geophysical Interpretation",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "Attribute analysis:",
                        commonulliLi : [
                                            {
                                                liData : "Seismic attributes are the components of the seismic data which are obtained by measurement, computation and other methods from the seismic data."
                                            },
                                            {
                                                liData : "Frequency Attributes followed by Spectral Decomposition are used as a direct Hydrocarbon Indicator."
                                            },
                                            {
                                                liData : "Seismic Attributes distinguish important reservoir or lithology characteristics. Time-based attributes relate to structure, amplitude-based attributes to stratigraphy or hydrocarbons and the frequency-based attributes to stratigraphy or reservoir characterization. Multicomponent seismic attributes can detect fractures and faulting and determine their orientation."
                                            }
                                        ]
                    },
                    {   ulData : "Amplitude Variations with Offset (AVO)",
                        commonulliLi : [
                                            {
                                                liData : "AVO refers to the dependency of the seismic amplitude on the distance between the source and receiver (the offset). AVO analysis techniques can be executed on seismic data to determine various parameters such as fluid content, porosity, density or seismic velocity, shear wave information and fluid indicators (hydrocarbon indications)."
                                            }
                                        ]
                    },
                    {   ulData : "AVO techniques can be subdivided into two broad categories based on the focus of their analysis:",
                        commonulliLi : [
                                            {
                                                liData : "Seismic reflectivity methods",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Near and Far Stack"
                                                                    },
                                                                    {
                                                                        lilastData : "Fluid Factor"
                                                                    },
                                                                    {
                                                                        lilastData : "Intercept Gradient"
                                                                    }
                                                                ]
                                            },
                                            {
                                                liData : "Impedance methods",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Acoustic & Shear Impedance"
                                                                    },
                                                                    {
                                                                        lilastData : "Elastic Impedance"
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "We provide the following services to our clients:",
                        commonulliLi : [
                                            {
                                                liData : "AVO feasibility studies"
                                            },
                                            {
                                                liData : "AVO data processing for emphasizing, maintaining and enhancing the proper amplitude relationships"
                                            },
                                            {
                                                liData : "AVO scanning for finding anomalous regions of amplitude"
                                            },
                                            {
                                                liData : "Elastic model inversion at prospective locations for identifying potential reservoirs and describe them numerically prior to drilling."
                                            }
                                        ]
                    },
                    {   ulData : "Well ties",
                        commonulliLi : [
                                            {
                                                liData : "Well-seismic ties allow well data, measured in units of depth to be compared to seismic data, measured in units of time. This allows us to relate horizon tops identified in a well with specific reflections on the seismic section. The well-seismic tie is the bridge we need to go from seismic data to the rocks that produced it and our interpretation of the subsurface geology"
                                            },
                                            {
                                                liData : "We can help our clients in comparing and analysing seismic traces produced from sonic and density well logs against the real seismic data collected near the well location."
                                            }
                                        ]
                    },
                    {   ulData : "Wavelet extraction and synthetics",
                        commonulliLi : [
                                            {
                                                liData : "Wavelet extraction is a sub-step in seismic processing for determining the shape of the reflected seismic wavelet. Wavelets can be extracted using a direct one-dimensional model of acoustic energy traveling through the layers of the Earth, in a process known as the Synthetic Seismogram or Synthetic. The synthetic seismogram is generated by combining the reflectivity derived from digitized acoustic and density logs with the wavelet derived from seismic data. We can help our clients in wavelet extraction by deconvolving the seismic trace with the set of reflection coefficients of the synthetic seismogram, a process also known as deterministic wavelet extraction."
                                            }
                                        ]
                    },
                    {   ulData : "Depth conversion/Velocity modeling:",
                        commonulliLi : [
                                            {
                                                liData : "Building a representative velocity model is a key critical element in imaging subsurface geology. We can provide a wide range of velocity model building algorithms and workflows, including full waveform inversion, reflection tomography, anisotropic earth models and powerful refraction topographies (which detect shallow velocity anomalies). All these algorithms work with various acquisition configurations and can be applied to any geological setting. These computer intensive algorithms are also integrated with an interactive graphics environment for rapid and accurate quality control of the interim and final results."
                                            }
                                        ]
                    },
                    {   ulData : "Seismic Inversion",
                       
                    },
                    {   ulData : "Seismic Inversion converts the original reflectivity data which is in the form of an interface property (i.e. a reflection) to a rock property known as impedance, which itself is the multiplication of sonic velocity and bulk density.",
                       
                    },
                    {   ulData : "Seismic Inversion usually includes other reservoir measurements such as well logs and cores. iOG aims at providing the following techniques of Seismic Inversion to its clients based on their data-type and the level of accuracy required in their situation:",
                        commonulliLi : [
                                            {
                                                liData : "Input Seismic Data Conditioning",
                                            },
                                            {
                                                liData : "Well-to-Seismic Tie and Wavelet Extraction",
                                            },
                                            {
                                                liData : "Post-Stack Inversion:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Deterministic Methods:"
                                                                    },
                                                                    {
                                                                        lilastData : "Stochastic Inversion"
                                                                    },
                                                                    {
                                                                        lilastData : "Intercept Gradient"
                                                                    }
                                                                ]
                                            },
                                            {
                                                liData : "Pre-Stack Inversion:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Extended Elastic Inversion"
                                                                    },
                                                                    {
                                                                        lilastData : "Simultaneous Inversion"
                                                                    }
                                                                ]

                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }

commonulliData2(){
        return [
            {
                commonulliheading : "Advanced Techniques",
                commonullisubheading : "",
                commonullitext  : "",
                commonulliUl : [
                    {   ulData : "4D Time-Lapse Seismic Interpretation and Prospect Delineation",
                        commonulliLi : [
                                            {
                                                liData : "The 4D Seismic method is used for determining changes in the reservoir over a period of time. It involves the design and interpretation of repeated seismic surveys over a producing hydrocarbon field. The objective is to determine the changes occurring in the reservoir as a result of hydrocarbon production or injection of water or gas into the reservoir by comparing the repeated datasets."
                                            },
                                            {
                                                liData : "We offer",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Pre-conditioning of the pre-stack data"
                                                                    },
                                                                    {
                                                                        lilastData : "A complete 4D solution from feasibility studies to inversion and history matching."
                                                                    },
                                                                    {
                                                                        lilastData : "Production enhancement and redirecting enhanced recovery mechanisms"
                                                                    },
                                                                    {
                                                                        lilastData : "Identification of bypassed reserves"
                                                                    },
                                                                    {
                                                                        lilastData : "Placement of Injection wells using the interpretation results"
                                                                    },
                                                                    {
                                                                        lilastData : "Identification of unknown permeability conduits"
                                                                    },
                                                                    {
                                                                        lilastData : "Depletion Monitoring and CO2 sequestration"
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "Borehole seismic ",
                        commonulliLi : [
                                            {
                                                liData : "Vertical seismic profile (VSP)",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Borehole Seismic services including Vertical Seismic Profiling for correlation with surface seismic data, for obtaining images of higher resolution than surface seismic images and for looking ahead of the drill bit. VSPs vary in the well configuration, the number and location of sources and geophones and how they are deployed."
                                                                    }
                                                                ]

                                            },
                                            {
                                                liData : "Crosswell seismic tomography",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "Crosswell technique measures the seismic signal transmitted from a source, located in one well, to a receiver array in a neighbouring well. We then process the resulting data to create a reflection image or to map the various attributes in the area between wells. With this method we can survey the formation between wells and achieve a high degree of resolution for your Reservoir characterization maps since this method studies only the Reservoir zone of interest."
                                                                    }
                                                                ]

                                            }
                                        ]
                    },
                    {   ulData : "Multicomponent seismic",
                        commonulliLi : [
                                            {
                                                liData : "iOG helps clients in designing and performing Multicomponent Seismic Programs, in which data is generated and collected using multiple geophones and accelerometers. Our experts can guide you through the following techniques of multicomponent seismic data acquisition:",
                                                commonulliLast : [
                                                                    {
                                                                        lilastData : "3C Seismic: 3C seismic data acquisition techniques use three orthogonally oriented geophones/accelerometers."
                                                                    },
                                                                    {
                                                                        lilastData : "4C Seismic: This technique is used for marine data acquisition needs and places a fourth Hydrophone in addition to the orthogonally placed 3 hydrophones in the 3C technique. It allows tracing and determination of both the Pressure and Shear waves along with their direction of propagation."
                                                                    }
                                                                ]

                                            }
                                        ]
                    }
                ]
            }                        
        ]
    }

    imgleafblockData(){
        return [
            {
                plansTitle        : "Identification of structural and stratigraphic petroleum traps",
                plansSubTitle1    : "",
                plansSubTitle2    : "",
                planstext         : "Hydrocarbons migrate from their source through porous subterranean strata until their route is blocked by an impermeable geological structure known as traps.  Traps can be classified on the basis of their formation into Structural and Stratigraphic traps depending on whether they have been formed after or at the time sedimentary rock deposition. These can be further sub-categorized as follows.",
                planstext1        : "",
                planstext2        : "",
                planstext3        : "Our Geophysical Interpretation experts can help you identify the various classes of Structural and Stratigraphic Traps using state-of-the-art interpretation techniques which make it possible to visualize and interpret the subtleties produced in the maps and wavelets by the the presence of these formations.",
                plansimg          : "images/giointerprit.png",

            }
        ]
    }

    

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
      	<Overview OverviewData={this.overviewData()} />
        <Challenges   CommonleafblockData={this.Commonleafulblock()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock1()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
        <Imgleafblock ImgleafblockData={this.imgleafblockData()} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        <Commonulliblock CommonulliData={this.commonulliData()} />
        <Commonulliblock CommonulliData={this.commonulliData2()} />
      </div>
    );  
  }
}

