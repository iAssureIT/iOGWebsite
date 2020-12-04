import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// import $                  from 'jquery';
import './Privacypolicypage.css';

import Overview                from '../../allBlocks/Overview/Overview.js';
import Imgleafblock            from '../../allBlocks/Imgleafblock/Imgleafblock.js';
import Challenges              from '../../allBlocks/Challenges/Challenges.js';
import Commonulliblock         from '../../allBlocks/Commonulliblock/Commonulliblock.js';

export default class Privacypolicypage extends Component {

     overviewData(){
        return [
            {
                overviewTitle       : "Legal Privacy Policy",
                overviewSubTitle    : "Overview",
                overviewimg         : "",
                overviewtext1       : "The privacy and security of the personal information that we hold about you are very important to us and is an important part of our relationship with our clients.",
                overviewtext2       : "The following privacy policy applies to all clients of iOG Solutions Pvt. Ltd. It is designed to assist you in understanding how we collect and deal with your personal information. By dealing with us, you consent to the collection, use, and disclosure of your personal information as described in this privacy policy.",
                overviewtext3       : "",
                overviewtext4       : "",
                overviewtext5       : "",
                commonulliUl2 : []

            } 
                        
        ]
    }

    Commonleafulblock(){
        return [
            {
                challengesTitle : "Our Policy",
                challengestext3  : "",
                challengestext : "In the course of providing high end O&G software services, it is necessary for us to collect personal information. We will not use or disclose personal information for a purpose other than that for which it was collected unless it is:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "a purpose described below;"
                    },
                    {
                        ulData : "a purpose which you would reasonably expect;"
                    },
                    {   
                        ulData : "a purpose required by law; or"
                    },
                    {   
                        ulData : "a purpose for which we have obtained consent."
                    }
                ]
            }, 
                  
        ]
    }

 Commonleafulblock2(){
        return [
            {
                challengesTitle : "Collection of Information",
                challengestext3  :"Personal information will only be collected to the extent necessary for us to be able to provide you with the assistance you seek from us, except as is required or authorized by law. In order to use the iOG website, we may request information from you in order to provide the best service possible. In addition, we may collect personal information in client meetings, in writing, by telephone and email and through other methods of communication.",
                challengestext :"Instances, when we collect such information, include:",
                challengestext2 :"Information collected would generally comprise name, address, postal address, telephone, fax, and email contact details, as well as details of the iOG services you shall be interested in. High level information in relation to your business may also be collected.",
                commonulliUl : [
                    {
                        ulData : "when providing O&G software consulting services to you;"
                    },
                    {
                        ulData : "when interacting with you via our websites;"
                    },
                    {   
                        ulData : "when dealing with certain government agencies or departments; and"
                    },
                    {   
                        ulData : "when required by law."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock3(){
        return [
            {
                challengesTitle : "",
                challengestext3  : "Should you contact us requiring technical or similar assistance, information relating to your problem or suggested solution are also recorded by us to assist customer relationship management.",
                challengestext : "When we collect personal information from you we will take reasonable steps to ensure that you are aware:",
                challengestext2 : "",
                commonulliUl : [
                    {
                        ulData : "of our contact details;"
                    },
                    {
                        ulData : "that you may access the personal information we have collected;"
                    },
                    {
                        ulData : "of the purpose for which the information was collected;"
                    },
                    {
                        ulData : "the types of third parties we will normally disclose or transfer personal information to;"
                    },
                    {
                        ulData : "of any legal requirement on our part to collect the personal information; and"
                    },
                    {
                        ulData : "of the possible consequences of us not disclosing personal information when required to do so."
                    }
                ]
            }, 
                  
        ]
    }
Commonleafulblock4(){
        return [
            {
                challengesTitle : "Positions vacant website",
                challengestext3  : "We may disclose the personal information you provide to us via our positions vacant website to iOG employees and/or advisors for the purpose of considering you for career opportunities at iOG Solutions.",
                challengestext : "",
                challengestext5 : "",
                challengestext2 : "",
                commonulliUl : []
            }, 
                  
        ]
    }


Commonleafulblock5(){
        return [
            {
                challengesTitle : "How we use this information",
                challengestext3  : "We generally use the personal information provided to us for the reason it was collected. When you seek a service from us, we may request certain personally identifiable information from you. You may be required to provide contact information (such as name, email, and postal address) and financial information. We use this information for ordering and billing purposes, and if we have trouble processing an order, to contact you.",
                challengestext : "We collect personal information so that we can communicate with you about our services that you use and efficiently administer all services we provide to you. These communications could relate to software upgrades, feature variations or enhancements, any problems discovered with the software and corrective measures that may be taken, and informing you of other iOG services.",
                challengestext5 : "In addition, we use the personal information we collect to enable us to provide appropriate O&G Software consulting services to you, and to enable us to comply with any legal requirements.",
                challengestext2 : "Correspondence is recorded in order to provide service references and to assist in our staff development.",
                challengestext4 : "We may use personal information to let you know about events such as seminars, webinars, and conferences conducted by iOG. If at any stage you do not wish to receive such information and you may contact us in writing to advise us of your wishes, we shall subsequently remove your information from our marketing list.",
                commonulliUl : []
            }, 
                  
        ]
    }

Commonleafulblock6(){
        return [
            {
                challengesTitle : "Information storage",
                challengestext3  : "Electronic customer management and database systems are used to store personal information. The systems are accessed by authorized users and contain security features to ensure the protection and integrity of the data that we hold.",
                challengestext : "We take all reasonable measures to protect personal information from loss, unauthorized access, destruction, misuse, modification or disclosure.",
                challengestext2 : "",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock7(){
        return [
            {
                challengesTitle : "Disclosure",
                challengestext3  :"iOG may at its discretion use other third parties to provide essential services on our website or for our business processes. We may share your details as necessary for the third party to provide that service. These third parties are prohibited from using your personally identifiable information for any other purpose. iOG shall not share any information with third parties for any unknown or unrelated uses.",
                challengestext : "We reserve the right to disclose your personally identifiable information to iOG’s advisors or third parties engaged by iOG to assist in providing you with the services requested, as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on us.",
                challengestext2 : "",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock8(){
        return [
            {
                challengesTitle : "Disclosure of personal information to overseas recipients",
                challengestext3  :"We are an international high-end O&G Software service provider and may disclose personal information to any of our global entities when providing you with our products and services. Personal information may be stored in Abu Dhabi and/or Pune. By choosing to provide us with your personal information, you consent to the transfer of your personal information to a country other than your own.",
                challengestext : "We reserve the right to disclose your personally identifiable information to iOG’s advisors or third parties engaged by iOG to assist in providing you with the services requested, as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on us.",
                challengestext2 : "",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock9(){
        return [
            {
                challengesTitle : "Access to information",
                challengestext3  :"You have the right to access the personal information that we hold in relation to you. If you would like details of the personal information which we may hold about you, or if you would like to correct any of the information that we hold, please contact us as follows:",
                challengestext : "We reserve the right to disclose your personally identifiable information to iOG’s advisors or third parties engaged by iOG to assist in providing you with the services requested, as required by law and when we believe that disclosure is necessary to protect our rights and/or comply with a judicial proceeding, court order, or legal process served on us.",
                challengestext5 : "e-mail: info@iogsolutions.com",
                challengestext2 : "or write to us:",
                challengestext4 : "The Adminstrative Officer iOG Solutions Pvt. Ltd.,Amanora Chambers, Office 330,3rd Floor, East Block,Hadapsar, Pune India - 411028",
                commonulliUl : []
            }, 
                  
        ]
    }
Commonleafulblock10(){
        return [
            {
                challengesTitle : "",
                challengestext3  :"There are certain circumstances in which we may not allow you to access that information, these include;",
                challengestext : "",
                challengestext5 : "",
                challengestext2 : "We are committed to protecting the privacy of your personal information, and if you are dissatisfied with either the manner of collection or the use of such personal information please contact our Administrative Officer on the contact details listed above to discuss the matter.",
                challengestext4 : "",
                commonulliUl : [
                    {
                        ulData : "where disclosure would have an unreasonable impact on the privacy of others;"
                    },
                    {
                        ulData : "where the information would reveal commercially sensitive decision making processes;"
                    },
                    {
                        ulData : "where providing such access would prejudice certain investigations; and"
                    },
                    {
                        ulData : "where we are required by law not to disclose the information."
                    }
                ]
            }, 
                  
        ]
    }

Commonleafulblock11(){
        return [
            {
                challengesTitle : "Links",
                challengestext3  :"Links on the iOG website to external entities are not covered by this policy. The terms and conditions set out in this privacy statement only cover content hosted on http://www.iogsolutions.com",
                challengestext : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                commonulliUl : []
            }, 
                  
        ]
    }

Commonleafulblock12(){
        return [
            {
                challengesTitle : "Changes to Privacy Policy",
                challengestext3  :"If we decide to change our privacy policy, we will post those changes to this privacy statement, the homepage, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.  If we make material changes to this policy, we will notify you here or by means of a notice on our homepage.",
                challengestext : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                commonulliUl : []
            }, 
                  
        ]
    }

Commonleafulblock13(){
        return [
            {
                challengesTitle : "Acknowledgements",
                challengestext3  :"iOG Solutions and it’s logo are registered trademarks of iOG Solutions Pvt. Ltd in India and iOG IT Solutions L.L.C. in UAE",
                challengestext : "",
                challengestext5 : "",
                challengestext2 : "",
                challengestext4 : "",
                commonulliUl : []
            }, 
                  
        ]
    }


    
   

  render() {  
    return (
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOpadding">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 NOPadding" style={{marginTop:"30px"}}>
          <h2 className="BT1_bannerTitle_res text-center HistorianTitle text-center"><b>Legal Privacy Policy</b></h2>
           <div className="dynamicpageimg BT1_img1"></div>
          </div>
         <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 policyMainDiv">
          	<Overview OverviewData={this.overviewData()} />
            <Challenges   CommonleafblockData={this.Commonleafulblock()} /> 
            <Challenges   CommonleafblockData={this.Commonleafulblock2()} /> 
            <Challenges   CommonleafblockData={this.Commonleafulblock3()} /> 
            <Challenges   CommonleafblockData={this.Commonleafulblock4()} /> 
            <Challenges   CommonleafblockData={this.Commonleafulblock5()} /> 
            <Challenges   CommonleafblockData={this.Commonleafulblock6()} /> 
        </div> 
       {/* <Challenges   CommonleafblockData={this.Commonleafulblock6()} /> */}
      </div>
    );  
  }
}

