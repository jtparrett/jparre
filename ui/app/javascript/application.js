// --------------------------------------------------------------------------
// application.js
// --------------------------------------------------------------------------
// This file imports and initialises modules.
//
// Add module names to the modules array for automatic initialisation.
//
// No specific javascript should be placed in this file.
// --------------------------------------------------------------------------

$(function() {

  'use strict';

  var modules = ['exampleModule'];

  for(var i = 0; i < modules.length; i++) {
    RN[modules[i]].init();
  }

});