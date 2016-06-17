// --------------------------------------------------------------------------
// exampleModule.js
// --------------------------------------------------------------------------
// Brief explanation of what the module is used for.
// --------------------------------------------------------------------------

RN.exampleModule = function() {

  'use strict';

  function init() {
    byBehaviour('selector').on('click', doSomething);
  }

  function doSomething() {
    console.log('I did something!');
  }

  return {
    init: init
  };

}();