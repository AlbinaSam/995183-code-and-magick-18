'use strict';

(function () {

  window.util = {
    getRandomElement: function (elements) {
      var randomValue = elements[Math.floor(Math.random(elements) * elements.length)];
      return randomValue;
    },

    ESC_KEYCODE: 27,

    ENTER_KEYCODE: 13,

  };

})();
