'use strict';

(function () {

  window.util = {
    getRandomElement: function (elements) {
      var randomValue = elements[Math.floor(Math.random(elements) * elements.length)];
      return randomValue;
    },

    ESC_KEYCODE: 27,

    ENTER_KEYCODE: 13,

    TIMEOUT: 10000,

    SUCCESS_CODE: 200,

    URL_LOAD: 'https://js.dump.academy/code-and-magick/data',

    URL_SEND: 'https://js.dump.academy/code-and-magick'

  };

})();
