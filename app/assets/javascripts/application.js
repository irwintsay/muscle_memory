// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// Randomize Backgrounds
var arnoldBackgrounds = [
  '/assets/arnold-bicep.jpg',
  '/assets/arnold-comp.jpg',
  '/assets/arnold-pose.jpg',
  '/assets/arnold-row.jpg',
  '/assets/arnold-sky.jpg'
];

randomBG = arnoldBackgrounds[Math.floor(Math.random() * arnoldBackgrounds.length)];

$(function() {
  $('#background').css("background", "url(" + randomBG + ")");
  $('#background').css("background-size", "cover");
});
