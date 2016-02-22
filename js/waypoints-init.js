jQuery(function($) {

( function( window, $, undefined ) {
  'use strict';

  $('.intro p, .slide-left').waypoint(function() {
    $(this).toggleClass( 'animated fadeInLeft' );
  },
  {
    offset: '90%'
    // triggerOnce: true
  });


  $('.intro h2, .slide-right').waypoint(function() {
    $(this).toggleClass( 'animated fadeInRight' );
  },
  {
    offset: '90%'
    // triggerOnce: true
  });


  $('#skills .col-md-4').waypoint(function() {
    $(this).toggleClass( 'animated fadeInUp' );
  },
  {
    offset: '90%'
    // triggerOnce: true
  });


  $('.title').waypoint(function() {
    $(this).toggleClass( 'animated zoomIn' );
  },
  {
    offset: '90%'
    // triggerOnce: true
  });

  $('.roll-wrapper .prod_3').waypoint(function() {
    $(this).toggleClass( 'animated fadeInRight' );
  },
  {
    offset: '100%'
    // triggerOnce: true
  });




})( this, jQuery );

});