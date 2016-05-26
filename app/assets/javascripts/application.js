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
  'https://stopthehitch.files.wordpress.com/2013/06/arnold-schwarzenegger-1920x1080.jpg',
  'https://images5.alphacoders.com/387/387340.jpg',
  'https://i.ytimg.com/vi/JC5WpGw7pag/maxresdefault.jpg',
  'http://s1.1zoom.net/big0/963/353960-admin.jpg',
  'http://sixpackmakeover.com/wp-content/uploads/2014/12/arnold-schwarzenegger-4466x2791-wallpaper-2164878.jpg'
];

randomBG = arnoldBackgrounds[Math.floor(Math.random() * arnoldBackgrounds.length)];

$(function() {
  $('#background').css("background", "url(" + randomBG + ")");
  $('#background').css("background-size", "cover");
});
