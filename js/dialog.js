'use strict';

(function () {

  var startOffsetCoords = {};

  var setup = document.querySelector('.setup');

  window.dialog = {

    closePopup: function () {
      setup.classList.add('hidden');
      document.removeEventListener('keydown', onPopupEscPress);
      setup.style.top = startOffsetCoords.y + 'px';
      setup.style.left = startOffsetCoords.x + 'px';
    }
  };

  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.util.ESC_KEYCODE) {
      window.dialog.closePopup();
    }
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
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
    window.dialog.closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      window.dialog.closePopup();
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

  var dialogHadler = setup.querySelector('.upload');

  dialogHadler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    startOffsetCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
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

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';

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
