'use strict';

document.querySelector('.setup').classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var createProperty = function (arr) {
  var randomValue = arr[Math.floor(Math.random(arr) * arr.length)];
  return randomValue;
};

var wizards = [
  {
    name: createProperty(NAMES) + ' ' + createProperty(SURNAMES),
    coatColor: createProperty(COAT_COLORS),
    eyesColor: createProperty(EYES_COLORS)
  },
  {
    name: createProperty(NAMES) + ' ' + createProperty(SURNAMES),
    coatColor: createProperty(COAT_COLORS),
    eyesColor: createProperty(EYES_COLORS)
  },
  {
    name: createProperty(NAMES) + ' ' + createProperty(SURNAMES),
    coatColor: createProperty(COAT_COLORS),
    eyesColor: createProperty(EYES_COLORS)
  },
  {
    name: createProperty(NAMES) + ' ' + createProperty(SURNAMES),
    coatColor: createProperty(COAT_COLORS),
    eyesColor: createProperty(EYES_COLORS)
  },
];

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

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
