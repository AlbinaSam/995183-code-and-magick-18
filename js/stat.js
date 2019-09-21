'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LINE_HEIGHT = 20;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var MULTIPLIER = 101;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var barHeight = MAX_BAR_HEIGHT * times[i] / maxTime;

    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_GAP + LINE_HEIGHT * 2 + (MAX_BAR_HEIGHT - barHeight));

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * MULTIPLIER) + '%, 50%)';
    }

    /* names[i] === 'Вы' ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'hsl(240, ' + Math.floor(Math.random() * MULTIPLIER) + '%, 50%)'; */

    var rectX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillRect(rectX, CLOUD_Y + TEXT_GAP + LINE_HEIGHT * 3 + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], rectX, CLOUD_HEIGHT - TEXT_GAP);
  }
};
