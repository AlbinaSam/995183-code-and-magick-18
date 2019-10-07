'use strict';
(function () {

  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARDS_NUMBER = 4;


  /* отрисовываем похожих волшебников */
  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizardDescription = {
      name: window.util.getRandomElement(NAMES) + ' ' + window.util.getRandomElement(SURNAMES),
      coatColor: window.util.getRandomElement(COAT_COLORS),
      eyesColor: window.util.getRandomElement(EYES_COLORS)
    };
    wizards.push(wizardDescription);
  }

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var fillFragment = function () {

    for (var j = 0; j < WIZARDS_NUMBER; j++) {
      fragment.appendChild(renderWizard(wizards[j]));
    }
  };

  fillFragment();

  similarListElement.appendChild(fragment);

  document.querySelector('.setup-similar').classList.remove('hidden');


  // изменение цвета мантии по клику
  var wizardCoat = window.util.setup.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatColorInput = window.util.setup.querySelector('input[name="coat-color"]');

  var onWizardCoatClick = function () {
    var coatColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    wizardCoatColorInput.value = coatColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);


  // изменение цвета глаз по клику
  var wizardEyes = window.util.setup.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');

  var onWizardEyesClick = function () {
    var eyesColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    wizardEyesColorInput.value = eyesColor;
  };

  wizardEyes.addEventListener('click', onWizardEyesClick);


  // изменение цвета фаербола по клику
  var fireball = window.util.setup.querySelector('.setup-fireball-wrap');
  var fireballColorInput = window.util.setup.querySelector('input[name="fireball-color"]');

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  fireball.addEventListener('click', onFireballClick);

})();
