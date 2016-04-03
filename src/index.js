import $ from 'jquery';
import Manager from './Manager.js';

$.fn.donChart = function plugin(args = {}) {
  return this.each(function initialize() {
    // element as jquery object
    const $element = $(this);

    // get options by merging data and args, priority to args
    const options = $.extend($element.data(), args);

    // init manager and call draw
    const manager = new Manager($element, options);
    manager.draw();

    // store manager in element
    $element.data('don-chart-manager', manager);

    return $element;
  });
};
