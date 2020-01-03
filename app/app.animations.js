define(['angular', 'angular.animate'], function(angular){
'use strict';
var phonecatAnimations = angular.module('phonecatAnimations', ['ngAnimate']);
phonecatAnimations.
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    var animateIn = function(element, className, done) {
      if (className !== 'selected') return;

      element.css({
        display: 'block',
        position: 'absolute',
        top: 500,
        left: 0
      }).animate({
        top: 0
      }, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    var animateOut = function (element, className, done) {
      if (className !== 'selected') return;

      element.css({
        position: 'absolute',
        top: 0,
        left: 0
      }).animate({
        top: -500
      }, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
  return phonecatAnimations;
});