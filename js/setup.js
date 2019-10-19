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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };


  /* загрузка данных с сервера */

  var successLoadHandler = function (wizardsData) {
    var fragment = document.createDocumentFragment();

    var fillFragment = function () {

      for (var j = 0; j < WIZARDS_NUMBER; j++) {
        fragment.appendChild(renderWizard(wizardsData[j]));
      }
    };

    fillFragment();

    similarListElement.appendChild(fragment);

    document.querySelector('.setup-similar').classList.remove('hidden');
  };


  var errorLoadHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.padding = '22px 0';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successLoadHandler, errorLoadHandler);


  /* отправка данных на сервер*/

  var successSaveHandler = function () {
    window.setup.classList.add('hidden');
  };

  var errorSaveHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), successSaveHandler, errorSaveHandler);
  });


  // изменение цвета мантии по клику
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatColorInput = document.querySelector('input[name="coat-color"]');

  var onWizardCoatClick = function () {
    var coatColor = window.util.getRandomElement(COAT_COLORS);
    wizardCoat.style.fill = coatColor;
    wizardCoatColorInput.value = coatColor;
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);


  // изменение цвета глаз по клику
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');

  var onWizardEyesClick = function () {
    var eyesColor = window.util.getRandomElement(EYES_COLORS);
    wizardEyes.style.fill = eyesColor;
    wizardEyesColorInput.value = eyesColor;
  };

  wizardEyes.addEventListener('click', onWizardEyesClick);


  // изменение цвета фаербола по клику
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  var onFireballClick = function () {
    var fireballColor = window.util.getRandomElement(FIREBALL_COLORS);
    fireball.style.backgroundColor = fireballColor;
    fireballColorInput.value = fireballColor;
  };

  fireball.addEventListener('click', onFireballClick);

})();
