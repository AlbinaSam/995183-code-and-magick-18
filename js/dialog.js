'use strict';

(function () {

  var startOffsetCoords = {};

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.util.setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    window.util.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.util.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.util.setup.style.top = startOffsetCoords.y + 'px';
    window.util.setup.style.left = startOffsetCoords.x + 'px';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      closePopup();
    }
  });

  var input = document.querySelector('.setup-user-name');

  input.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  input.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });


  // реализуем перемещение окна

  var dialogHadler = window.util.setup.querySelector('.upload');

  dialogHadler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startOffsetCoords = {
      x: window.util.setup.offsetLeft,
      y: window.util.setup.offsetTop
    };

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.util.setup.style.top = (window.util.setup.offsetTop - shift.y) + 'px';
      window.util.setup.style.left = (window.util.setup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      var onClickPreventDefault = function (clickEvt) {
        clickEvt.preventDefault();
        dialogHadler.removeEventListener('click', onClickPreventDefault);
      };

      if (dragged) {
        dialogHadler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

})();
