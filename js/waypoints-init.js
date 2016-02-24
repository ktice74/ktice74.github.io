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

  $('.avitar').waypoint(function() {
    $(this).toggleClass( 'animated rotateIn' );
  },
  {
    offset: '80%'
    // triggerOnce: true
  });

  $('.row-5, .row-4, .row-3, .row-2, .row-1').waypoint(function() {
    $(this).toggleClass( 'animated bounceIn' );
  },
  {
    offset: '90%'
    // triggerOnce: true
  });

})( this, jQuery );

});