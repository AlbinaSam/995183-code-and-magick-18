'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  window.wizard = wizard;

  // изменение цвета мантии по клику
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatColorInput = document.querySelector('input[name="coat-color"]');


  var onWizardCoatClick = function () {
    var newColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = newColor;
    wizardCoatColorInput.value = newColor;
    wizard.onCoatChange(newColor);
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);


  // изменение цвета глаз по клику
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');


  var onWizardEyesClick = function () {
    var newColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = newColor;
    wizardEyesColorInput.value = newColor;
    wizard.onEyesChange(newColor);
  };

  wizardEyes.addEventListener('click', onWizardEyesClick);


  // изменение цвета фаербола по клику
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var onFireballClick = function () {
    var newColor = window.util.getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = newColor;
    fireballColorInput.value = newColor;
  };

  fireball.addEventListener('click', onFireballClick);

  return wizard;

})();
