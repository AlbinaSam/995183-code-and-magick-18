'use strict';

(function () {

  var onConnectionError = function (onError) {
    onError('Произошла ошибка соединения');
  };

  window.backend = {

    load: function (onLoad, onError) {

      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === window.util.SUCCESS_CODE) {
          onLoad(xhr.response);

        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', onConnectionError);

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = window.util.TIMEOUT;

      xhr.open('GET', window.util.URL_LOAD);

      xhr.send();

    },

    save: function (data, onLoad, onError) {

      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === window.util.SUCCESS_CODE) {
          onLoad(xhr.response);

        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', onConnectionError);

      xhr.open('POST', window.util.URL_SEND);
      xhr.send(data);
    }
  };

})();
