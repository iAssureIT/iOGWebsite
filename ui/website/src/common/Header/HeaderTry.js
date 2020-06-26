import React, {Component} from 'react';

// import $                  from 'jquery';
import 'bootstrap/js/modal.js';
import 'bootstrap/js/collapse.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from "jquery";
import './HeaderTry.css';
import './Megamenu.js';
import Contactform       from '../../allBlocks/Contactform/Contactform.js';

export default class Header extends Component {
  
  componentWillMount() {$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

      if (scroll >= 100) {
          $(".headerflow").addClass("headerflowscroll");
      } else {
          $(".headerflow").removeClass("headerflowscroll");
      }
    });
  }
  componentDidMount(){
   
  }
  myFunction(){
     var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }

  }
  /*responsivemenubar(event){
  $(document).ready(function(){
        $(".dataonHover1").hide();

    $(".oilsign8").hover(function(){
        $(".dataonHover1").show();

    });
  });
} */
  modalClickEvent(){
    console.log("click event")
    $('#modalId').addClass('in');
    $('#modalId').css('display','block');
    
    // $('#modalId').modal('hide');
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
  
 /* googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 
  'google_translate_element');
} 
*/
  render() {  
    return (
   
    <header className="col-lg-12 col-md-12 col-sm-12 col-xs-12  headerflow"> 
     <div class="bs-example">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a href="#" class="navbar-brand">Brand</a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav">
        
            </div>
            <form class="form-inline">
              <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Profile</a>
              <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages1</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
              <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages2</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
              <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages3</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
              <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages4</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
               <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Messages5</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Sent</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                    </div>
                </div>
            </form>
            <div class="navbar-nav">
                <a href="#" class="nav-item nav-link">Login</a>
            </div>
        </div>
    </nav>
</div>
    </header>


    );  
  }
}