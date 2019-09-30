'use strict';
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var WIZARDS_NUMBER = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var getRandomElement = function (elements) {
  var randomValue = elements[Math.floor(Math.random(elements) * elements.length)];
  return randomValue;
};

var wizards = [];
for (var i = 0; i < WIZARDS_NUMBER; i++) {
  var wizardDescription = {
    name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
    coatColor: getRandomElement(COAT_COLORS),
    eyesColor: getRandomElement(EYES_COLORS)
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

/* открытие/закрытие окна настройки персонажа */

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var curElement = document.activeElement;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);

};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var input = document.querySelector('.setup-user-name');

input.addEventListener('focus', function() {
  document.removeEventListener('keydown', onPopupEscPress);
});

input.addEventListener('blur', function() {
  document.addEventListener('keydown', onPopupEscPress);
})

/* изменение цвета мантии по клику */
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardCoatColorInput = setup.querySelector('input[name="coat-color"]');

var onWizardCoatClick = function () {
  var coatColor = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = coatColor;
  wizardCoatColorInput.value = coatColor;
};

wizardCoat.addEventListener('click', onWizardCoatClick);


/* изменение цвета глаз по клику */
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardEyesColorInput = document.querySelector('input[name="eyes-color"]');

var onWizardEyesClick = function () {
  var eyesColor = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = eyesColor;
  wizardEyesColorInput.value = eyesColor;
};

wizardEyes.addEventListener('click', onWizardEyesClick);


/* изменение цвета фаербола по клику */
var fireball = setup.querySelector('.setup-fireball-wrap');
var fireballColorInput = setup.querySelector('input[name="fireball-color"]');

var onFireballClick = function () {
  var fireballColor = getRandomElement(FIREBALL_COLORS);
  fireball.style.backgroundColor = fireballColor;
  fireballColorInput.value = fireballColor;
};

fireball.addEventListener('click', onFireballClick);
