import $ from 'jquery';
import Chart from './Chart.js';

const defaults = {
  percentage: 100,
};

function getDataOptions($element) {
  return {
    percentage: $element.data('percentage'),
  };
}

function initializer(userOptions) {
  return this.each(function initialize() {
    const $element = $(this);
    const options = $.extend(defaults, getDataOptions($element), userOptions);

    const chart = new Chart($element, options);
    chart.draw();

    $element.data('don-chart', chart);

    return $element;
  });
}

$.fn.donChart = initializer;
